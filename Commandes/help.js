const Discord = require('discord.js');
const moment = require('moment');
module.exports.run = async(Client, message, args) => {
    message.delete();
    message.channel.send({
        embed: {
            color: 0xff00ea,
            title: "__**COMMANDES Zioon**__",
            fields: [
                {
                    name: "**Prefix**",
                    value: "**.**"
                },
				  {
                    name: "**Information**",
                    value: "**Quelque commande sont buger est sont donc en cours de vérification Merci d'attendre :)**"
                },
                {
                    name: "**Modération**",
                    value: "clear, giveaway, supchan"
                },
                {
                    name: 
                    "**Ticket** ||Les commandes ticket son uniquement utilisable sur mon serveur !||",
                    value: "Ticket, close" 
                },
                {
                    name: "**Utils**",
                    value: "ping, avatar, botinfo, bug, emoji, invite, serverinfo, serveur, suggestion, uptime, vote, covid"
                },
                {
                    name: "**Fun**",
                    value: "casino, 8ball, cat, dog, fortniteshop, météo, pf, roll, say, sondage, dilemmes"
                },
            ],
            footer: {
                text: `support : discord.io/Legenda`
            }
        }

    })
};
module.exports.help = {
    name: "help"
};