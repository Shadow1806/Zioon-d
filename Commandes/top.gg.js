const message = require('../Events/message');
const Command = require('./Structure/Command');

module.exports.run = async (client, message, args) => {
    
    message.delete()

    message.channel.send("Ici vous trouverais le lien pour votez notre bot:\n\n• **Top.gg** <https://top.gg/bot/730783717395660861/vote>")
}
        
    
module.exports.help = {
    name: 'vote'
};