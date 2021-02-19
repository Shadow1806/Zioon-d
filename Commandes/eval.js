const Command = require('./Structure/Command');
const { MessageEmbed } = require('discord.js');
const { inspect } = require('util');

module.exports.run = async(client, message, args) => {

    message.delete()

    const evalString = args.join(' ');
    if (!evalString) return message.channel.send('Vous devez spécifier quelque chose à évaluer.');
        
    const embed = new MessageEmbed() 
        .setColor('BLUE');

    try {
        const evaluated = eval(evalString);
        embed.setDescription(`\`\`\`js\n${inspect(evaluated, { depth: 0 })}\`\`\``);
    }
    catch (error) {
        embed.setDescription(`\`\`\`js\n${inspect(error.message, { depth: 0 })}\`\`\``);
    }

    message.channel.send({ embed: embed });

};

module.exports.help = {
    name: 'eval'
};