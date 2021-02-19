const Discord = require('discord.js');

module.exports.run = async(client, message, args) => {

    message.delete()

    const avatembed = new Discord.MessageEmbed()
    .setTitle(`Voici votre avatar: ${user.mentionned}`)
    .setImage(user.displayAvatarURL)
    .setColor("0x010000")
    message.channel.send(avatembed)
}
module.exports.help = {
    name: 'avatar'
};