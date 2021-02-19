const Discord = require('discord.js')
const os = require('os')
const cpuStat = require('cpu-stat') 
const moment = require('moment')

module.exports.run = async (client, message, args) => {
    message.delete()
    const info = new Discord.MessageEmbed()
    cpuStat.usagePercent(function (err, percent, seconds) {
        if (err) {
            return console.log(err);
        }
 
 
        let embedStats = new Discord.MessageEmbed()
            .setTitle("__**Informations du bot**__")
            .setColor("RANDOM")
            .addField("Créateur du bot :", "ᴹᴷ ˢʰᵃᵈᵒʷ#5678")
            .addField("RAM Utilisée ", `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} / ${(os.totalmem() / 1024 / 1024).toFixed(2)} MB`, true)
            .addField("Discord.js ", `v12`, true)
            .addField("Node ", `${process.version}`, true)
            .addField("CPU ", `\`\`\`md\n${os.cpus().map(i => `${i.model}`)[0]}\`\`\``)
            .addField("Utilisation du CPU ", `\`${percent.toFixed(2)}%\``, true)
            .addField("Architecture", `\`${os.arch()}\``, true)
            .addField("Platforme", `\`\`${os.platform()}\`\``, true)
            .addField("Language de Dev du bot :", "Javascript")
            .setFooter(`${message.guild.name} | Zioon`)
            message.channel.send(embedStats)

})
}
module.exports.help = {
    name: "botinfo"
}