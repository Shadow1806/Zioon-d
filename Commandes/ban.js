const Discord = require('discord.js');

module.exports.run = async(client, message, args) => {

    letKickedUser = message.guild.member(message.mentions.users.first() || message.guild.members.chache.get(args[0]));
    if(!KickedUser) {
        return message.channel.send(`L\'utilisateur : 'n\'as pas été trouver`)
    }

    let KickReason = args.join(' ').slice(22);
    if(!message.member.hasPermission('MANAGE_MESSAGE')) {
        return message.channel.send(`Vous n\'avez pas la permission`)
    }
    if(KickedUser.hasPermission('MANAGE_MESSAGE')) {
        return message.channel.send(`Vous ne pouvez pas kick cette personne car elle à la permission \`MANAGE_MESSAGE\``)
    }

    let KickEmbed = new Discord.MessageEmbed()
    .setDescription('Logs')
    .setColor('RANDOM')
    .addField('User kickée', `${KickedUser} (ID: ${KickedUser.id})`)
    .addField('Author de ce kick', `${message.author} (ID: ${message.author.id})`)
    .addField('Salon ou la commande a été executée', message.channel)
    .addField('Raison du kick', KickReason)

    let kickChannel = message.guild.channels.cache.find(`Logs`);
    if(!kickChannel) {
        return message.channel.send('Salon \`Logs\` n\'as pas été trouver. Merci d\'en crée un')
    }

    message.guild.member(KickedUser).kick(KickReason)
    kickChannel.send(kickEmbed)
}




module.exports.help = {
    name: 'kick'
}