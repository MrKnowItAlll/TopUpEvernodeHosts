const xrpl = require('xrpl')
const evernode = require('evernode-js-client');
const { exit } = require('process');
const readline = require("readline");
const client = new xrpl.Client('wss://xahau.network');
const codec = require('ripple-binary-codec');
const hosts_accounts = []

async function getXahauBalance(account) {
  const response = await client.request({
    "command": "account_info",
    "account": account,
    "ledger_index": "validated"
  })
  return (response.result.account_data.Balance / 1000000).toFixed(3);
}

async function getFee(account, amount, destination) {
  //Dummy payment tx
  var payment = await client.autofill({
      TransactionType: "Payment",
      Account: account,
      Amount: xrpl.xrpToDrops(amount),
      Destination: destination,
      Fee : '0',
      SigningPubKey  : '0'
  });

  var txBlob = codec.encode(payment);
  const response = await client.request({
    "command": "fee",
    "tx_blob": txBlob
  })

  return (parseInt(response.result.drops.base_fee) + 20).toString();
}

async function sendXahau(wallet,domain,destination,amount, retry) {
    console.log('\n' + (retry < 3 ? '[retry]':'') + 'Trying to send ' + amount + ' XAH to:' + domain + '[' + destination + ']');
    //Calculate expected fee
    var fee = await getFee(wallet.address, amount, destination);
    //Prepare TX
    var payment = await client.autofill({
          TransactionType: "Payment",
          Account: wallet.address,
          Amount: xrpl.xrpToDrops(amount),
          Destination: destination,
          Fee : fee
        });

    //Sign and submit
    const max_ledger = payment.LastLedgerSequence;
    var signed = await wallet.sign(payment);
    var tx = await client.submitAndWait(signed.tx_blob);
    let txResult = tx.result.meta.TransactionResult
    return tx.result.meta.TransactionResult;
}

const main = async () => {

    //Get Domain from user
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });
    var domain = "_"
    rl.question('Please input your hosts domain or email:', (answer) => {
        domain = answer;
    });
    while (domain == "_") { await new Promise(r => setTimeout(r, 100))  }

    var isEmail = domain.includes('@');
    if(isEmail)
      console.log('\n\nEmail: ' + domain);
    else
      console.log('\n\nDomain: ' + domain);

    //Connect to Xahau
    console.log('\n\nConnection to Xahau...');
    await client.connect();
  
    //Get hosts from Evernode Registry
    var hosts;
    try {
      console.log('\n\nGetting Evernode hosts from registry, Please wait...'); 
      await evernode.Defaults.useNetwork('mainnet');
      const xrplApi = new evernode.XrplApi(null, { autoReconnect: true });
      evernode.Defaults.set({
          xrplApi: xrplApi
      });
      const registryClient = await evernode.HookClientFactory.create(evernode.HookTypes.registry);
      await registryClient.connect();
      hosts = await registryClient.getAllHostsFromLedger();
    } catch(err) {
      console.log('\n\nCant get hosts err: ' + err);
      exit(1);
    }

    //Parse users hosts
    for(const host of hosts) {
        if(!isEmail && host.domain != null && host.domain.toLowerCase().includes(domain.toLowerCase()))
        {
            balance = await getXahauBalance(host.address);
            hosts_accounts.push([host.domain,host.address,balance])
        } else if(host.email != null && host.email.toLowerCase().includes(domain.toLowerCase()))
        {
            balance = await getXahauBalance(host.address);
            hosts_accounts.push([host.domain,host.address,balance])
        }
    }

    //Display information
    console.log('\n\nDetected ' + hosts_accounts.length + ' Hosts under this domain:');
    for(const host_account of hosts_accounts)
    {
      console.log('Domain: ' + host_account[0] + '       Account: ' + host_account[1] + '        XAH balance: ' + host_account[2] + ' XAH');
    }

    //Query users request for top up
    var amount = "_"
    rl.question('\n\nSpecify to what value of XAH to Top up each host:', (answer) => {
        amount = answer;
    });
    while (amount == "_") { await new Promise(r => setTimeout(r, 100))  }

    var seed = "_"
    rl.question('\nSpecify The secret key(seed) of the sender:', (answer) => {
        seed = answer;
    });
    while (seed == "_") { await new Promise(r => setTimeout(r, 100))  }

    var needed_xahah = 0;

    //Calculate amount needed for Transfer
    for(const host_account of hosts_accounts)
    {
      if(amount - host_account[2] > 0)
        needed_xahah += amount - host_account[2];
    }

    //If top up is lower than needed just exit now
    if(needed_xahah == 0)
    {
        console.log('\nAll Your accounts already have the desired XAH balance, not doing anything BA BYE');
        exit(1);
    }

    //Issue notice to user about needed amount from sender
    wallet = xrpl.Wallet.fromSeed(seed);
    console.log('\n\n !!!! Please Verify the sender['+ wallet.address + '] has: ' + needed_xahah.toFixed(3) + ' XAH available to send!!!!!');

    //Fire up last consent to start sending it out
    var consent = "_"
    rl.question('\nDo you wish to start sending now?[y/N]', (answer) => {
        consent = answer;
    });
    while (consent == "_") { await new Promise(r => setTimeout(r, 100))  }
    if(consent.toLowerCase() != 'y')
    {
       console.log('K BA BYE');
       exit(1);
    }

    //Sending
    console.log('\n\n Sending using account[' + wallet.address + '] Please wait...');

    for(const host_account of hosts_accounts)
    {
      var send_amount = amount - host_account[2];
      //Skip hosts with higher top up amount
      if(send_amount.toFixed(3) <= 0)
      {
        console.log('\nSkipping ' + host_account[0] + '[' + host_account[1] + '] it already has : ' + host_account[2] + ' XAH');
        continue;
      }
      
      //Allow for 3 retries if it failes
      var retry = 3;
      var result = "";
      while(result != 'tesSUCCESS' && retry > 0)
      {
          try{
            result = await sendXahau(wallet, host_account[0], host_account[1], send_amount.toFixed(3), retry);
          } catch(error) {
            console.log('\nFailed payment attempt error: '  + error);
          }
          retry--;
      }

      if(result != 'tesSUCCESS')
        console.log('\nFailed sending to: '  + host_account[0] + '[' + host_account[1] + '] after 3 retries result:' + result);
      else
        console.log('\nSent ' + send_amount.toFixed(3) + ' XAH to:' + host_account[0] + '[' + host_account[1] + ']');
    }

    //Print out accounts balances after the transfers
    console.log('\n\nFinished sending Hosts stautus after:');
    for(const host_account of hosts_accounts)
    {
      var balance_after = await getXahauBalance(host_account[1]);
      console.log('Domain: ' + host_account[0] + '       Account: ' + host_account[1] + '        XAH balance: ' + balance_after + ' XAH');
    }
    console.log('\nAll done BA BYE');
    exit(1);
}

main()
