const Discord = require('discord.js')

module.exports.run = async (client, message, args) => {
    message.delete()
    let idrole = "808731579186020372"
    let categoryID = "791249565968891905"
    let prefix = "."
   
 if(message.guild.id !== "751798598928302192") return message.channel.send("Cette commande est uniquement disponnible sur le serveur à Shadow")

    const member = message.member;
    const username = member.user.tag;

    let reason = args.splice(0).join(' ')
    if(!reason) return message.reply("Veuillez inclure une raison")

            let channel = await message.guild.channels.create(`ticket-${username}`, {type: 'text', parent: message.guild.channels.cache.get(categoryID)})
            .catch(err => {
                message.channel.send('Erreur')
            });

            channel.updateOverwrite(message.guild.roles.everyone, {"VIEW_CHANNEL": false});
            channel.updateOverwrite(member, {
                'VIEW_CHANNEL': true,
                'SEND_MESSAGES': true,
                'ADD_REACTIONS': true
            })
            channel.updateOverwrite(message.guild.roles.cache.find(role => role.id == idrole), {'VIEW_CHANNEL': true})

            var embed1 = new Discord.MessageEmbed()
            .setTitle('Hello !')
            .setDescription(`Raison Du Ticket : ${reason} \n Expliquez en detail votre problème \n Entrer la commande **${prefix}close** une fois le ticket terminé !`)
            .setColor('#ff000')

            channel.send(`${member}`)
            channel.send(`<@&${idrole}>`)
            channel.send(embed1)      
    }    
module.exports.help = {
    name: "ticket"
}