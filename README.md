# Introduction 
This componet is for use on partner websites to display the teams, shirts and odds for one match. 
It takes as a parameter the market id (aka bet offer ID) of the 1x2 main market.
There are 3 test pages here, one for the Production component, one for Eyas UAT coponent, and one for  Eyas DEV component (only visible to eyas)

# Getting Started
Add the following HTML to the page:

```
    <head>
        <!-- ONLY INCLUDE SCRIPT ONCE PER PAGE -->
        <script src="//www.lancebetting.com/etc.clientlibs/eyas-web/clientlibs/external-components.latest.js" data-eyas-config="//www.lancebetting.com/content/eyas-web/lancebet_com/pt.client.settings.json" async></script>
        <!--/ ONLY INCLUDE SCRIPT ONCE PER PAGE -->
    </head>


    <body>
        <eyas-match-container bet-offer-id="2282924245"></eyas-match-container>
```

See index.html for example code. 

see TBD for eample site.

## parameters:
 - **bet-offer-id** The market id of the 1x2 main market taken from https://kambi-explorer.eyasgaming.net/ (click on a market to get the id in the paste buffer).

# environments
There are 3 environments which can have different versions of the component, dev, uat and prod.
Dev is hidden behind the VPN, but UAT and prod can be used.

to switch between environment, change the URL in the script and config section, e.g.

```
Prod:

        <script src="//www.lancebetting.com/etc.clientlibs/eyas-web/clientlibs/external-components.latest.js" data-eyas-config="//www.lancebetting.com/content/eyas-web/lancebet_com/pt.client.settings.json" async></script>

 UAT (uses Kambi CTS env):

         <script src="//lancebet-com-uat.eyasgaming.net/etc.clientlibs/eyas-web/clientlibs/external-components.latest.js" data-eyas-config="//lancebet-com-uat.eyasgaming.net/content/eyas-web/lancebet_com/pt.client.settings.json" async></script>
        
```


# support
For technical support, please email simon hobbs @ eyasgaming or use the teams channel