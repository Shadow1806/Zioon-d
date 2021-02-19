require('dotenv/config');
const { MessageEmbed } = require('discord.js')
const moment = require('moment');
require('moment-duration-format');

const logColor = {
    kick: 0xff8300,
    softban: 0xff8300,
    ban: 0xff1900,
    unban: 0x80f31f,
    warn: 0xffcc00,
    restrict: 0xffcc00,
    mute: 0xffcc00,
};

module.exports = async (message, client, user, reason, action, nsfw, ref, length, restriction) => {
    const { updateCaseCount, createCaseDocument } = require('./caseManager');
    const caseNumber = await updateCaseCount(message.guild);

    const data = [];
    data.push(`**Membre:** ${user.tag} - (${user.id})`);
    data.push(`**Action:** ${client.util.capitalize(action)}`);
    data.push(`**Raison:** ${(reason.length > 1900 ? reason.substring(0, 1900) + '...' : reason) || 'Non spécifier'}`);
    if (ref) data.push(`**Ref:** ${ref}`);
    if (length) data.push(`**Length:** ${moment.duration(length).format('d [days,] h [hours,] m [mins]')}`);
    if (restriction) data.push(`**Restriction:** ${client.util.capitalize(restriction)}`);

    const embed = new MessageEmbed()
    .setColor(logColor[action])
    .setThumbnail(!nsfw ? user.displayAvatarURL({ dynamic: true}) : '')
    .setAuthor(`${message.author.tag} - (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))
    .setDescription(data.join('\n'))
    .setTimestamp(Data.npw())
    .setFooter(`Case: ${caseNumber}`);

    const modLog = message.guild.channels.cache.get(process.env.modLog_channel);
    const msg = await modLog.send({ embed: embed }).catch(err => console.log(err));
    await createCaseDocument(message.guild, modLog, msg, user, caseNumber);
    await require('./historyManager')(user, message.guild, action);
};