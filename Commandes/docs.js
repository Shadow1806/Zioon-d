const Command = require('./Structure/Command');
const fetch = require('node-fetch');

const srcRegex = RegExp(/\s?--src=([a-zA-Z-]+)/);

module.exports.run = async(client, message, args) => {

    let searchString = args.join(' ');
    if (!searchString) searchString = await this.awaitMessages(message);
    if (!searchString) return;
    const project = srcRegex.test(searchString) ? srcRegex.exec(searchString)[1] : 'stable';
    const query = srcRegex.test(searchString) ? searchString.replace(RegExp(`\\s?--src=${project}`), '') : searchString;
    const res = await fetch(`https://djsdocs.sorta.moe/v2/embed?src=${project}&q=${encodeURIComponent(query)}`).catch(console.error);
    const embed = await res.json();
    if (!embed) return message.channel.send('Nothing found, maybe try searching for something that exists.');
    message.channel.send({ embed: embed });


    let responce;

    const filter = (user) => {
        return user.author.id === message.author.id;
    };

    message.channel.send('**What do you want to search for?** \nType `cancel` to cancel the command.');

    await message.channel.awaitMessages(filter, { max: 1, time: 120000, errors: ['time'] })
        .then((msg) => {
            const firstMsg = msg.first();
            if (firstMsg.content.toLowerCase() === 'cancel') return firstMsg.react('👍');
            responce = firstMsg.content;
        })
        .catch(() => {
            message.channel.send('Welp.. you took too long, cancelling the command.');
        });

    return responce;
}

module.exports.help = {
    name: 'docs'
};