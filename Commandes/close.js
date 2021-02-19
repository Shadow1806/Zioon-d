const Discord = require('discord.js')

module.exports.run = async (client, message, args) => {
    if(!message.channel.name.startsWith("ticket")) return message.reply("Ce salon n'est pas un ticket !")
    message.channel.send("**Fermeture du ticket en cours...**")
    message.channel.delete()
    }    
module.exports.help = {
    name: "close"
}