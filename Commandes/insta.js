const { Discord,  MessageEmbed, DiscordAPIError } = require("discord.js");
const { stripIndents } = require("common-tags");

const fetch = require("node-fetch");

module.exports = {
    name: "instagram",
    aliases: ["insta"],
    category: "info",
    description: "Find out some nice instagram statistics",
    usage: "<name>",
    run: async (client, message, args) => {
        const name = args.join(" ");

        if (!name) {
            return message.reply("Peut-être est-il utile de rechercher quelqu'un ...!")
                .then(m => m.delete(5000));
        }

        const url = `https://instagram.com/${name}/?__a=1`;
        
        let res; 

        try {
            res = await fetch(url).then(url => url.json());
        } catch (e) {
            return message.reply("Je n'ai pas trouver le compte..:(")
                .then(m => m.delete(5000));
        }

        const account = res.graphql.user;

        const embed = new Discord.MessageEmbed()
            .setColor("RANDOM")
            .setTitle(account.full_name)
            .setURL(`https://instagram.com/${name}`)
            .setThumbnail(account.profile_pic_url_hd)
            .addField("Information profile", stripIndents`**- Pseudo:** ${account.username}
            **- Full name:** ${account.full_name}
            **- Bio:** ${account.biography.length == 0 ? "none" : account.biography}
            **- Posts:** ${account.edge_owner_to_timeline_media.count}
            **- Abonné:** ${account.edge_followed_by.count}
            **- Abonemment:** ${account.edge_follow.count}
            **- Compte Priver:** ${account.is_private ? "Oui 🔐" : "Non 🔓"}`);

        message.channel.send(embed);
    }
}

module.exports.help = {
    name: 'insta'
};