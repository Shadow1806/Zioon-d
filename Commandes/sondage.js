const Discord = require("discord.js")

module.exports.run = async(client, message, args)=>{

    message.react('👍').then(() => message.react('👎'));

const filter = (reaction, user) => {
    return ['👍', '👎'].includes(reaction.emoji.name) && user.id === message.author.id;
};

message.awaitReactions(filter, { max: 1,})
    .then(collected => {
        const reaction = collected.first();
        
        const technicien = reaction.users.filter(u => !u.bot).first();

        if (reaction.emoji.name === '👍') return console.log('👍')
        if (reaction.emoji.name === '👎') return console.log('👎')
        
    async function f1() {
        var x = await technicien.send(message);
      }
      f1();
      console.log('Résolu.');
})}

module.exports.help= {
    name: "sondage"
}