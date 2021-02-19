const Discord = require('discord.js');

module.exports.run = async(client, message, args) => {

    const suggembed = new Discord.MessageEmbed()
    .setAuthor ('Invite Moi')
    .setURL("https://discord.com/api/oauth2/authorize?client_id=788897071297200189&permissions=8&scope=bot")
    .setThumbnail (`${message.author.displayAvatarURL({ dynamic : true })}`)
    .setDescription (`Mon invite: https://discord.com/api/oauth2/authorize?client_id=788897071297200189&permissions=8&scope=bot`)
    .setFooter ('Zioon BOT')
    .setTimestamp()

    if (message.content === `${suggembed}`) return message.react('👍')

    message.delete()
    message.channel.send(suggembed)

};
module.exports.help = {
    name: "invite"
  }; 