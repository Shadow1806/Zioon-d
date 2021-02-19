const Discord = require('discord.js');
const client = new Discord.Client();

client.login("Nzg4ODk3MDcxMjk3MjAwMTg5.X9qLpg.0M_J9MOaPl48Q3LtBdIMJn8DgJw")

const fs = require('fs');

client.commands = new Discord.Collection();

fs.readdir("./Commandes/", (error, f) => {
    if(error) console.log(error);

    let commandes = f.filter(f => f.split(".").pop() === "js");
    if(commandes.length <= 0) return console.log("Aucune commande trouvée !");

    commandes.forEach((f) => {

        let commande = require(`./Commandes/${f}`);
        console.log(`${f} commande chargée !`);

        client.commands.set(commande.help.name, commande);
  });
    });

fs.readdir("./Events/", (error, f) => {
    if(error) console.log(error);
    console.log(`${f.length} events en chargement`)

    f.forEach((f) => {
        const events = require(`./Events/${f}`);
        const event = f.split(".")[0];

        client.on(event, events.bind(null, client));
    });
});
client.on("ready", () =>{
    console.log(`Bot ${client.user.tag} désormais en ligne !`);
}) 

client.on('guildCreate', guild => {
    var serverIcon = guild.iconURL();
    let embed = new Discord.MessageEmbed()
    .setTitle(guild.name)
    .setThumbnail(guild.iconURL())
    .setColor("#25c059")
    .addField(`Maintennant sur ${client.guilds.cache.size} serveurs !`)
    .setDescription(`Bonne Nouvelle ! ${guild.name} vient d'ajouté Zioon dans son serveur 🙂`)
    .setThumbnail(serverIcon)
    .setTimestamp()
    const channel = client.channels.cache.find(channel => channel.id === "786559162606813224")
    channel.send(embed)
    return console.log(`Zioon a été ajoutez sur le serveur ${guild.name} Nice un serveur en plus ! / Maintennant sur ${client.guilds.cache.size} serveur !`)
})
client.on('guildDelete', guild => {
    var serverIcon = guild.iconURL();
    let embed = new Discord.MessageEmbed()
    .setTitle(guild.name)
    .setColor("#ff0000")
    .addField(`Maintennant sur: ${client.guilds.cache.size} serveurs !`)
    .setDescription(`Mauvaise Nouvelle, ${guild.name} vient de supprimé Zioon de son serveur 🙁`)
    .setThumbnail(serverIcon)
    .setTimestamp()
    const channel = client.channels.cache.find(channel => channel.id === "786559162606813224")
    channel.send(embed)
    return console.log(`Zioon a été retiré du serveur ${guild.name} Pas cool tout ca.. / Maintennant sur ${client.guilds.cache.size} serveur !`)
}) 


client.on('', async member => {
    var channel = null;
    member.guild.channels.cache.get("751798598928302192")
    const cachedInvites = guildInvites.get(member.guild.id);
    const newInvites = await member.guild.fetchInvites();
    guildInvites.set(member.guild.id, newInvites);
    try {
        const usedInvite = newInvites.find(inv => cachedInvites.get(inv.code).uses < inv.users);
        const embedG = new Discord.MessageEmbed()
        .setDescription("Un nouveau membre a rejoind votre serveur!")
        .addField('Name', `${member.user.tag}`, true)
        .addField('Nombre de membres dans le serveur:', `${member.guild.memberCount}`, false)
        .addField('Invitez le nombre d\'Utilisations:', `${usedInvite.uses}`, true)
        .addField('Invitez par:', `${usedInvite.inviter.tag}`, false)
        .setTimestamp()
        .setFooter('ZioonBot')
        channel.send(embedG)
    } catch (err) {
        console.log(err);
    }
})




