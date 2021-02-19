const Discord = require('discord.js');

module.exports.run = async(bot, message, args) => {

    if(!message.member.hasPermission("MANAGE_ROLES")) return message.channel.send("**Vous n'avez pas la permission.**")

    let aMember = message.mentions.members.first()
    if(!aMember) return message.channel.send("**Veuillez mentionnez un utilisateur.**")
    let role = message.guild.roles.cache.find(r => r.name == args[1]) || message.guild.roles.cache.find(r => r.id == args[1]) || message.mentions.roles.first()
    if(!role) return message.channel.send("**Veuillez mentionnez un role.**")

    if(!aMember.roles.cache.has(role.id)) {
        return message.channel.send(`**${aMember} à déja ce role.**`)
    } else {
        await aMember.roles.add(role.id)
        aMember.createDM().then( channel => {
            channel.send(`Le role **${role.name}** vous a été ajoutez !`)
        })
    }
}

module.exports.help = {
    name: 'addrole'
};  