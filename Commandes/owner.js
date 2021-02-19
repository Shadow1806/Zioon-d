const Discord = require('discord.js');

module.exports.run = (client, message, args) => {
    let user = message.mentions.users.first();
    const member = message.guild.member(user);
    const admin_channel = message.guild.channels.cache.get("786195230038425620");
    const superadmin_role = message.guild.roles.cache.get("788889058897297438");

    const wLEmbed = new Discord.MessageEmbed()
    .setColor("WHRITE")
    .setAuthor(`${user.mentionned}`, user.avatarURL({dynamic: true}))
    .setDescription(`Êtes-vous sûr de vouloir donner les permissions Administrateur à **${user.mentionned}** ?`)
    .addField(
        {name: "si oui, tappez :", value: "Oui", inline: true},
        {name: "Si non, tappez :", value: "Non", inline: true}
    )
    .setTimestamp()
    .setFooter("Zioon - Perm")
    message.channel.send(wLEmbed)

    const vérif = m => m.content.includes('Oui');

}

module.exports.help = {
    name: 'owner'
};