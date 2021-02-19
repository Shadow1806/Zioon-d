const Discord = require('discord.js');

module.exports.run = (client, message, args) => {
    if (!args[1]) return message.reply("S'il te plaît, posez-moi une question !");
  
    let replies = ["Oui", "Non", "Peut-être", "Probablement que oui", "Probablement que non",];
    let question = args.slice(0).join(" ");
    let res = Math.floor(Math.random() * replies.length);
    
    const askEmbed = new Discord.MessageEmbed()
      .setAuthor(message.author.tag)
      .setColor("#58D3F7")
      .addField("Question", question)
      .addField("Réponse", replies[res]);
    
    message.channel.send(askEmbed)
};

module.exports.help = {
    name: '8ball'
};