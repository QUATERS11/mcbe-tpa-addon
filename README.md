<h3 style="color:red;font-family: 'Anton', sans-serif; font-family: 'Shippori Antique', sans-serif;"><strong>NOTE: </strong>This add-on only works for Minecraft Bedrock Version 1.18.10+</h3>
<h3 style="font-weight:bold;color:gray;">Commands:</h3>
<ul style="list-style-type:none;">
    <li>
        <strong>t!</strong>tpahelp | Used to get all available commands or infomation about a specific command.
    </li>
    <li>
        <strong>t!</strong>tpasend | Sends tpa request to the specified player you want to teleport to.
    </li>
    <li>
        <strong>t!</strong>tpaaccept | Used to accept an incoming tpa request.
    </li>
    <li>
        <strong>t!</strong>tpadecline | Used to decline incoming tpa requests.
    </li>
</ul>
<ul style="list-style-type:none;">
    <li>
        <strong>t!</strong>tpaadmin | This command allows an admin to tp everyone to his location, teleport someone to his location or tp to a players location, without op permissions.
    </li>
    <li>
        <strong>t!</strong>tpaconfig | This command can be used by admins, to change tpa configurations. Like: <strong>commandPrefix</strong>, <strong>Expiration Time</strong> and <strong>tpaAcceptUI</strong>.
    </li>
</ul>
<br />

<h3 style="font-weight:bold;color:gray;">Required Experimental Features:</h3>

![settings]

[settings]:https://cdn.discordapp.com/attachments/817055784273575966/930944353310998590/unknown.png


<h3 style="font-weight:bold;color:gray;">Config:</h3>
<ul style="list-style-type:none;">
    <li>
        The config can be found in <kbd><strong>scripts/config.js</strong></kbd> inside of the add-on.
        <alt>Config File Contents:</alt>

            /* 
                !WARNING!

                    All changes in this config file count globally as default settings to all your worlds that have this add-on enabled. 
                    All changes done from the config command in game count only to that specific world.
                
                !WARNING!
            */

            const config = {
                commandPrefix:"!", //Command Prefix.
                expiresIn:60, //In Seconds. 
                tpaAcceptUI:true, //Tpa accept UI.
                admins:[], //All the player names in this array will have access to administrator commands.
                exceptions:{
                    enabled:false, //Exceptions are used to disable tpa commands on certain players for certain situations. 
                    hasTags:[], //Players who have the tags inside of this array, cannot use tpa commands, untill the tag has been removed from them.
                    names:[], //Players who have their name is written in this array, cannot use tpa commands.
                }
            };
  
            export default config;

            /**
            * @author THErealDIVIJ
            * @description This Add-on was created by THErealDIVIJ
            * @discordUsername Ƭ卄Σ ᚱ𐌄𐌀𐌋 ᗪÏᐯÏᒎ#5638
            */

</ul>

