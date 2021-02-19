const Discord = require("discord.js");
const { parse } = require("twemoji-parser");

module.exports = {
    name: "emoji",
  category: "🛠 Utility",
    aliases: ["emo"],
    description: "Converts emoji to png or jpg",
    async run(client, message, args, flags) {

        const emoji = args[0];
    if (!emoji) return message.channel.send(`S'il vous plait, donnez moi un émoji!`);

    let customemoji = Discord.Util.parseEmoji(emoji);

    if (customemoji.id) {
      const Link = `https://cdn.discordapp.com/emojis/${customemoji.id}.${
        customemoji.animated ? "gif" : "png"
      }`;
      
      const Added = new Discord.MessageEmbed()
        .setTitle(`Convertiseur d'Emoji`)
        .setColor("RANDOM")
        .setURL(Link)
        .setImage(Link
        );
      return message.channel.send(Added);
    } else {
      let CheckEmoji = parse(emoji, { assetType: "png" });
      if (!CheckEmoji[0])
        return message.channel.send(`Donnez moi un émoji valide!`);
      message.channel.send(
        `Vous pouvez utiliser des émoji normaux sans ajouter de serveur!`
      );
    }
  }
}
module.exports.help = {
  name: "emoji"
}