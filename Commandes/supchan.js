const Discord = require('discord.js');

module.exports.run = async(client, message, args) => {
	
	if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("STOP TU N'AS PAS LES PERMISSIONS REQUISES POUR UTILISER CETTE COMMANDE");
	message.channel.send("Le channel a bien été supprimé !")
	message.channel.delete();
	
};

module.exports.help = {
    name: 'supchan'
};