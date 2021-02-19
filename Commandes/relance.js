const Discord = require("discord.js")
 
module.exports.run = async (bot, message, args) => {
 
    message.delete()
 
    if(message.author.id != "545703044197908481") return message.channel.send("Vous n'avez pas la permissions.")
 
    if(!args[0]) return message.channel.send("Merci de précisez le nom de la commande à reload.")
 
    let commandName = args[0].toLowerCase();
 
    try {
        delete require.cache[require.resolve(`./${commandName}.js`)]
        bot.commands.delete(commandName)
        const pull = require(`./${commandName}.js`)
        bot.commands.set(commandName, pull)
 
        message.channel.send(`**La commande \`${args[0]}\` à bien été reload.**`).then(m => m.delete(5000))
    }catch(e) {
        return message.channel.send(`Je ne peux pas reload : \`${args[0].toUpperCase()}\``).then(m => m.delete(5000))
    }
}
 
module.exports.help = {
    name: "relance"
}