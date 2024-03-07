# TopUpEvernodeHosts
Small script to top up Evernode Hosts XAH balance
Script asks for your Domain name, then queries Evernode hosts under that domain or Email.
Then you can specify which amount of XAH you wish to TopUp the hosts, the script will calculate the diff
and send to all your hosts from the specified sender which you will be asked to enter its seed.

If you find this Helpfull, you can buy me a Cup of coffee
at **rXRPncvJ7VVw6nrbCdXwDnSLKx7FMdVj6**

# Setup
    git clone https://github.com/MrKnowItAlll/TopUpEvernodeHosts.git
    cd TopUpEvernodeHosts/
    npm i xrpl@2.14.0
    npm i ripple-binary-codec@2.0.0
    npm i evernode-js-client@0.6.34

# Run
    node topup.js


# Exemple output:


    Please input your hosts domain or email:mkiaevernode.xyz
    
    
    Domain: mkiaevernode.xyz
    
    
    Connection to Xahau...
    
    
    Getting Evernode hosts from registry, Please wait...
    
    
    Detected 30 Hosts under this domain:
    Domain: mkiaevernode.xyz       Account: rGDT9QNrosskmGbzbNP4ezvuAH3KwAkghA        XAH balance: 31.074 XAH
    Domain: evernode1.mkiaevernode.xyz       Account: rfQnDz9BBu6RmAG9FMAeW4z7nv6fCoWXRD        XAH balance: 35.868 XAH
    Domain: evernode2.mkiaevernode.xyz       Account: r3AkasC1z4XUco6W7o8yjzAU4GmJFRUKhn        XAH balance: 33.116 XAH
    Domain: evernode3.mkiaevernode.xyz       Account: rKZXX9GdAhj525BaDHHaLSb4rBaPKNjHD4        XAH balance: 32.086 XAH
    Domain: evernode4.mkiaevernode.xyz       Account: rBUe2YWnCwVCRhDX6G8sZLhc1rnRF4qUbx        XAH balance: 32.362 XAH
    Domain: evernode6.mkiaevernode.xyz       Account: rh7x9DT5eAG3HvGNumMN9HmR9Du345wpdC        XAH balance: 31.560 XAH
    Domain: evernode5.mkiaevernode.xyz       Account: rGcDzcfaVdFdEmbdXh7d9db7CM5HRmqEcY        XAH balance: 31.633 XAH
    Domain: evernode8.mkiaevernode.xyz       Account: rKCnjk85gjfaGxQFwm5U1WNMwUMVrpURTZ        XAH balance: 31.601 XAH
    Domain: evernode7.mkiaevernode.xyz       Account: rL4pwpZHnXkzwsMhax7Yag1ufzPNkRtD8F        XAH balance: 32.712 XAH
    Domain: evernode9.mkiaevernode.xyz       Account: rKwCcSmDMPBBPgEHB1DKSBZhufb7XvqFww        XAH balance: 30.206 XAH
    Domain: evernode10.mkiaevernode.xyz       Account: rHKJURk3vqiz66wZNfuyDLApYp9ZUnwW1w        XAH balance: 30.634 XAH
    Domain: evernode13.mkiaevernode.xyz       Account: rJ5P4SBa78B4D8wzdz6oGXVgZBYeTj9fYS        XAH balance: 30.787 XAH
    Domain: evernode14.mkiaevernode.xyz       Account: rrsLNYUoSJr83p8Tfy8ga6jzEufkt6e8tW        XAH balance: 32.146 XAH
    Domain: evernode15.mkiaevernode.xyz       Account: rPV1vL4vbVzQgrHq4jJYsyGxTDTgdvhRC2        XAH balance: 30.387 XAH
    Domain: evernode16.mkiaevernode.xyz       Account: rP1zpYnpgDVTJ9k5TZ2cpsVL52kQW4x3t9        XAH balance: 30.612 XAH
    Domain: evernode18.mkiaevernode.xyz       Account: rBornVY3PJqUX4TEvWxnkvqBUWPGdHjn7J        XAH balance: 33.109 XAH
    Domain: evernode17.mkiaevernode.xyz       Account: rMCSrkMEM36NrcisGtCQ98tetegPYTGDve        XAH balance: 30.492 XAH
    Domain: evernode19.mkiaevernode.xyz       Account: rNyMTzUSeeQkT8wsQuC1H5WbQ6gMwZejQN        XAH balance: 30.743 XAH
    Domain: evernode20.mkiaevernode.xyz       Account: rNDckmcM1TZUWrqNa5M9Z6mWopX7dKeSn1        XAH balance: 32.951 XAH
    Domain: evernode21.mkiaevernode.xyz       Account: rfmdHqEcxHo12ffQqfb1mGFje9RmoJbhL6        XAH balance: 31.134 XAH
    Domain: evernode22.mkiaevernode.xyz       Account: rfrPiwDFqSofMN4RxgYeFKGBefzehk5JPR        XAH balance: 31.016 XAH
    Domain: evernode23.mkiaevernode.xyz       Account: rPGd3pfByi1bEYgSZ1YSfDWdT39bcMNi1A        XAH balance: 17.900 XAH
    Domain: evernode27.mkiaevernode.xyz       Account: rsVTvWS1m7U7D2EVdmgmj9H5zUzhDz34zC        XAH balance: 17.900 XAH
    Domain: evernode31.mkiaevernode.xyz       Account: rDXHvqYTBf143RoB4UhduYJYrzaj1kPxmJ        XAH balance: 17.900 XAH
    Domain: evernode29.mkiaevernode.xyz       Account: rpiNkw66rv6vmBiMCcfQgZJuXhKHs3vpDU        XAH balance: 17.900 XAH
    Domain: evernode25.mkiaevernode.xyz       Account: rGod4upgZiT9RgNdzREntre6D9LWbizqFK        XAH balance: 17.900 XAH
    Domain: evernode28.mkiaevernode.xyz       Account: rDaoJiX1zAFhjzK5YrkH5PY24m7WSG1WBF        XAH balance: 17.900 XAH
    Domain: evernode24.mkiaevernode.xyz       Account: rGjJaBq8noVtHkHsmpZctvPJgJo46x9M7R        XAH balance: 17.900 XAH
    Domain: evernode30.mkiaevernode.xyz       Account: rskGx2p5gd8NfRUgMFMSk9aFpnVZQJRJU6        XAH balance: 17.900 XAH
    Domain: evernode26.mkiaevernode.xyz       Account: rDD8AJPid11aqenyMgweHC1km68v3WyMao        XAH balance: 17.900 XAH
    
    
    Specify to what value of XAH to Top up each host:20
    
    Specify The secret key(seed) of the sender:snuasfSAFAFSVQvVZrxqdTUmasffaYPr
    
    
     !!!! Please Verify the sender[rcSVagrNYQpFUWCAAdbWw8EyS1dp24iLi] has: 18.900 XAH available to send!!!!!
    
    Do you wish to start sending now?[y/N]y
    
    
     Sending using account[rcSVagrNYQpFUWCAAdbWw8EyS1dp24iLi] Please wait...
    
    Skipping mkiaevernode.xyz[rGDT9QNrosskmGbzbNP4ezvuAH3KwAkghA] it already has : 31.074 XAH
    
    Skipping evernode1.mkiaevernode.xyz[rfQnDz9BBu6RmAG9FMAeW4z7nv6fCoWXRD] it already has : 35.868 XAH
    
    Skipping evernode2.mkiaevernode.xyz[r3AkasC1z4XUco6W7o8yjzAU4GmJFRUKhn] it already has : 33.116 XAH
    
    Skipping evernode3.mkiaevernode.xyz[rKZXX9GdAhj525BaDHHaLSb4rBaPKNjHD4] it already has : 32.086 XAH
    
    Skipping evernode4.mkiaevernode.xyz[rBUe2YWnCwVCRhDX6G8sZLhc1rnRF4qUbx] it already has : 32.362 XAH
    
    Skipping evernode6.mkiaevernode.xyz[rh7x9DT5eAG3HvGNumMN9HmR9Du345wpdC] it already has : 31.560 XAH
    
    Skipping evernode5.mkiaevernode.xyz[rGcDzcfaVdFdEmbdXh7d9db7CM5HRmqEcY] it already has : 31.633 XAH
    
    Skipping evernode8.mkiaevernode.xyz[rKCnjk85gjfaGxQFwm5U1WNMwUMVrpURTZ] it already has : 31.601 XAH
    
    Skipping evernode7.mkiaevernode.xyz[rL4pwpZHnXkzwsMhax7Yag1ufzPNkRtD8F] it already has : 32.712 XAH
    
    Skipping evernode9.mkiaevernode.xyz[rKwCcSmDMPBBPgEHB1DKSBZhufb7XvqFww] it already has : 30.206 XAH
    
    Skipping evernode10.mkiaevernode.xyz[rHKJURk3vqiz66wZNfuyDLApYp9ZUnwW1w] it already has : 30.634 XAH
    
    Skipping evernode13.mkiaevernode.xyz[rJ5P4SBa78B4D8wzdz6oGXVgZBYeTj9fYS] it already has : 30.787 XAH
    
    Skipping evernode14.mkiaevernode.xyz[rrsLNYUoSJr83p8Tfy8ga6jzEufkt6e8tW] it already has : 32.146 XAH
    
    Skipping evernode15.mkiaevernode.xyz[rPV1vL4vbVzQgrHq4jJYsyGxTDTgdvhRC2] it already has : 30.387 XAH
    
    Skipping evernode16.mkiaevernode.xyz[rP1zpYnpgDVTJ9k5TZ2cpsVL52kQW4x3t9] it already has : 30.612 XAH
    
    Skipping evernode18.mkiaevernode.xyz[rBornVY3PJqUX4TEvWxnkvqBUWPGdHjn7J] it already has : 33.109 XAH
    
    Skipping evernode17.mkiaevernode.xyz[rMCSrkMEM36NrcisGtCQ98tetegPYTGDve] it already has : 30.492 XAH
    
    Skipping evernode19.mkiaevernode.xyz[rNyMTzUSeeQkT8wsQuC1H5WbQ6gMwZejQN] it already has : 30.743 XAH
    
    Skipping evernode20.mkiaevernode.xyz[rNDckmcM1TZUWrqNa5M9Z6mWopX7dKeSn1] it already has : 32.951 XAH
    
    Skipping evernode21.mkiaevernode.xyz[rfmdHqEcxHo12ffQqfb1mGFje9RmoJbhL6] it already has : 31.134 XAH
    
    Skipping evernode22.mkiaevernode.xyz[rfrPiwDFqSofMN4RxgYeFKGBefzehk5JPR] it already has : 31.016 XAH
    
    Trying to send 2.100 XAH to:evernode23.mkiaevernode.xyz[rPGd3pfByi1bEYgSZ1YSfDWdT39bcMNi1A]
    
    Sent 2.100 XAH to:evernode23.mkiaevernode.xyz[rPGd3pfByi1bEYgSZ1YSfDWdT39bcMNi1A]
    
    Trying to send 2.100 XAH to:evernode27.mkiaevernode.xyz[rsVTvWS1m7U7D2EVdmgmj9H5zUzhDz34zC]
    
    Sent 2.100 XAH to:evernode27.mkiaevernode.xyz[rsVTvWS1m7U7D2EVdmgmj9H5zUzhDz34zC]
    
    Trying to send 2.100 XAH to:evernode31.mkiaevernode.xyz[rDXHvqYTBf143RoB4UhduYJYrzaj1kPxmJ]
    
    Sent 2.100 XAH to:evernode31.mkiaevernode.xyz[rDXHvqYTBf143RoB4UhduYJYrzaj1kPxmJ]
    
    Trying to send 2.100 XAH to:evernode29.mkiaevernode.xyz[rpiNkw66rv6vmBiMCcfQgZJuXhKHs3vpDU]
    
    Sent 2.100 XAH to:evernode29.mkiaevernode.xyz[rpiNkw66rv6vmBiMCcfQgZJuXhKHs3vpDU]
    
    Trying to send 2.100 XAH to:evernode25.mkiaevernode.xyz[rGod4upgZiT9RgNdzREntre6D9LWbizqFK]
    
    Sent 2.100 XAH to:evernode25.mkiaevernode.xyz[rGod4upgZiT9RgNdzREntre6D9LWbizqFK]
    
    Trying to send 2.100 XAH to:evernode28.mkiaevernode.xyz[rDaoJiX1zAFhjzK5YrkH5PY24m7WSG1WBF]
    
    Sent 2.100 XAH to:evernode28.mkiaevernode.xyz[rDaoJiX1zAFhjzK5YrkH5PY24m7WSG1WBF]
    
    Trying to send 2.100 XAH to:evernode24.mkiaevernode.xyz[rGjJaBq8noVtHkHsmpZctvPJgJo46x9M7R]
    
    Sent 2.100 XAH to:evernode24.mkiaevernode.xyz[rGjJaBq8noVtHkHsmpZctvPJgJo46x9M7R]
    
    Trying to send 2.100 XAH to:evernode30.mkiaevernode.xyz[rskGx2p5gd8NfRUgMFMSk9aFpnVZQJRJU6]
    
    Sent 2.100 XAH to:evernode30.mkiaevernode.xyz[rskGx2p5gd8NfRUgMFMSk9aFpnVZQJRJU6]
    
    Trying to send 2.100 XAH to:evernode26.mkiaevernode.xyz[rDD8AJPid11aqenyMgweHC1km68v3WyMao]
    
    Sent 2.100 XAH to:evernode26.mkiaevernode.xyz[rDD8AJPid11aqenyMgweHC1km68v3WyMao]
    
    
    Finished sending Hosts stautus after:
    Domain: mkiaevernode.xyz       Account: rGDT9QNrosskmGbzbNP4ezvuAH3KwAkghA        XAH balance: 31.074 XAH
    Domain: evernode1.mkiaevernode.xyz       Account: rfQnDz9BBu6RmAG9FMAeW4z7nv6fCoWXRD        XAH balance: 35.868 XAH
    Domain: evernode2.mkiaevernode.xyz       Account: r3AkasC1z4XUco6W7o8yjzAU4GmJFRUKhn        XAH balance: 33.116 XAH
    Domain: evernode3.mkiaevernode.xyz       Account: rKZXX9GdAhj525BaDHHaLSb4rBaPKNjHD4        XAH balance: 32.086 XAH
    Domain: evernode4.mkiaevernode.xyz       Account: rBUe2YWnCwVCRhDX6G8sZLhc1rnRF4qUbx        XAH balance: 32.362 XAH
    Domain: evernode6.mkiaevernode.xyz       Account: rh7x9DT5eAG3HvGNumMN9HmR9Du345wpdC        XAH balance: 31.560 XAH
    Domain: evernode5.mkiaevernode.xyz       Account: rGcDzcfaVdFdEmbdXh7d9db7CM5HRmqEcY        XAH balance: 31.633 XAH
    Domain: evernode8.mkiaevernode.xyz       Account: rKCnjk85gjfaGxQFwm5U1WNMwUMVrpURTZ        XAH balance: 31.601 XAH
    Domain: evernode7.mkiaevernode.xyz       Account: rL4pwpZHnXkzwsMhax7Yag1ufzPNkRtD8F        XAH balance: 32.712 XAH
    Domain: evernode9.mkiaevernode.xyz       Account: rKwCcSmDMPBBPgEHB1DKSBZhufb7XvqFww        XAH balance: 30.206 XAH
    Domain: evernode10.mkiaevernode.xyz       Account: rHKJURk3vqiz66wZNfuyDLApYp9ZUnwW1w        XAH balance: 30.634 XAH
    Domain: evernode13.mkiaevernode.xyz       Account: rJ5P4SBa78B4D8wzdz6oGXVgZBYeTj9fYS        XAH balance: 30.787 XAH
    Domain: evernode14.mkiaevernode.xyz       Account: rrsLNYUoSJr83p8Tfy8ga6jzEufkt6e8tW        XAH balance: 32.146 XAH
    Domain: evernode15.mkiaevernode.xyz       Account: rPV1vL4vbVzQgrHq4jJYsyGxTDTgdvhRC2        XAH balance: 30.387 XAH
    Domain: evernode16.mkiaevernode.xyz       Account: rP1zpYnpgDVTJ9k5TZ2cpsVL52kQW4x3t9        XAH balance: 30.612 XAH
    Domain: evernode18.mkiaevernode.xyz       Account: rBornVY3PJqUX4TEvWxnkvqBUWPGdHjn7J        XAH balance: 33.109 XAH
    Domain: evernode17.mkiaevernode.xyz       Account: rMCSrkMEM36NrcisGtCQ98tetegPYTGDve        XAH balance: 30.492 XAH
    Domain: evernode19.mkiaevernode.xyz       Account: rNyMTzUSeeQkT8wsQuC1H5WbQ6gMwZejQN        XAH balance: 30.743 XAH
    Domain: evernode20.mkiaevernode.xyz       Account: rNDckmcM1TZUWrqNa5M9Z6mWopX7dKeSn1        XAH balance: 32.951 XAH
    Domain: evernode21.mkiaevernode.xyz       Account: rfmdHqEcxHo12ffQqfb1mGFje9RmoJbhL6        XAH balance: 31.134 XAH
    Domain: evernode22.mkiaevernode.xyz       Account: rfrPiwDFqSofMN4RxgYeFKGBefzehk5JPR        XAH balance: 31.016 XAH
    Domain: evernode23.mkiaevernode.xyz       Account: rPGd3pfByi1bEYgSZ1YSfDWdT39bcMNi1A        XAH balance: 20.000 XAH
    Domain: evernode27.mkiaevernode.xyz       Account: rsVTvWS1m7U7D2EVdmgmj9H5zUzhDz34zC        XAH balance: 20.000 XAH
    Domain: evernode31.mkiaevernode.xyz       Account: rDXHvqYTBf143RoB4UhduYJYrzaj1kPxmJ        XAH balance: 20.000 XAH
    Domain: evernode29.mkiaevernode.xyz       Account: rpiNkw66rv6vmBiMCcfQgZJuXhKHs3vpDU        XAH balance: 20.000 XAH
    Domain: evernode25.mkiaevernode.xyz       Account: rGod4upgZiT9RgNdzREntre6D9LWbizqFK        XAH balance: 20.000 XAH
    Domain: evernode28.mkiaevernode.xyz       Account: rDaoJiX1zAFhjzK5YrkH5PY24m7WSG1WBF        XAH balance: 20.000 XAH
    Domain: evernode24.mkiaevernode.xyz       Account: rGjJaBq8noVtHkHsmpZctvPJgJo46x9M7R        XAH balance: 20.000 XAH
    Domain: evernode30.mkiaevernode.xyz       Account: rskGx2p5gd8NfRUgMFMSk9aFpnVZQJRJU6        XAH balance: 20.000 XAH
    Domain: evernode26.mkiaevernode.xyz       Account: rDD8AJPid11aqenyMgweHC1km68v3WyMao        XAH balance: 20.000 XAH
    
    All done BA BYE
