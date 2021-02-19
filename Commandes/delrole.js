const Discord = require('discord.js')

module.exports.run = async (client, message, args) => {
    if(!message.member.hasPermission("MANAGE_ROLES")) return message.reply(noperm)
    if(!message.guild.me.hasPermission("MANAGE_ROLES")) return message.channel.send("**Je n'ai pas la permission**")
    
    let aMember = message.mentions.members.first()
    if(!aMember) return message.channel.send("**Mentionnez un utilisateur.**")
    let role = message.guild.roles.cache.find(r => r.name == args[1]) || message.guild.roles.cache.find(r => r.id == args[1]) || message.mentions.roles.first()
    if(!role) return message.channel.send("**Mentionnez un grade.**")
    
    if(!aMember.roles.cache.has(role.id)) {
    return message.channel.send(`**${aMember} n'as pas ce rôle.**`)
    } else {
        await aMember.roles.remove(role.id)
    message.channel.send(`Le rôle <@&${role.id}> a été enlevé à <@${aMember.id}>`)
    aMember.createDM().then( channel => {
        channel.send(`Le rôle, **${role.name}** vous a été enlever sur le serveur **${message.guild.name}**`)
    })
    }
}
module.exports.help = {
    name: "delrole"
}