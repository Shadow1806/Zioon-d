const Discord = require('discord.js');

module.exports.run = async(client, message, args) => {

    const random = [

        " \n Tᥙ tᥱ ᥴoᥒᥴᥱᥒtrᥱs.... Tᥙ rᥲssᥱmbᥣᥱs toᥙt toᥒ ρoᥙvoιrs ᥱᥒ toι....Tu arrives à te contrôler, à ressentir ton pouvoir.... Tu ressent un déclic en toi : Bravo d'avoir perseverer! Tᥙ ᥲs réussi toᥒ ᥱᥒtrᥲιᥒᥱmᥱᥒt. :white_check_mark: \n   \n https://i.pinimg.com/originals/00/76/36/007636fc119f2057f635bb16113a69fe.gif",
        " \n Tᥙ tᥱ ᥴoᥒᥴᥱᥒtrᥱs.... Tᥙ rᥲssᥱmbᥣᥱs toᥙt toᥒ ρoᥙvoιrs ᥱᥒ toι....Tu arrives à te contrôler, à ressentir ton pouvoir.... Tᥙ ᥒ'ᥲrrιvᥱ ρᥲs ᥲ̀ tᥱ ᥴoᥒtroᥣᥱr ᥱt tᥙ ᥣᥲιssᥱ tombᥱr.Mᥲᥣhᥱᥙrᥱᥙsᥱmᥱᥒt ᥴᥱ ᥒ'ᥱst ρᥲs toᥒ joᥙr : Tᥙ ᥲs rᥲtᥱ́ toᥒ ᥱᥒtrᥲιᥒᥱmᥱᥒt. :x: \n  \n https://www.gif-maniac.com/gifs/53/53219.gif",
        " \n Tᥙ tᥱ ᥴoᥒᥴᥱᥒtrᥱs.... Tᥙ rᥲssᥱmbᥣᥱs toᥙt toᥒ ρoᥙvoιrs ᥱᥒ toι....Tu arrives à te contrôler, à ressentir ton pouvoir.... Tᥙ ᥒ'ᥲrrιvᥱ ρᥲs ᥲ̀ tᥱ ᥴoᥒtroᥣᥱr ᥱt tᥙ ᥣᥲιssᥱ tombᥱr.Mᥲᥣhᥱᥙrᥱᥙsᥱmᥱᥒt ᥴᥱ ᥒ'ᥱst ρᥲs toᥒ joᥙr : Tᥙ ᥲs rᥲtᥱ́ toᥒ ᥱᥒtrᥲιᥒᥱmᥱᥒt. :x: \n  \n https://www.gif-maniac.com/gifs/53/53219.gif",
    ]

    let randomMessage = random[Math.floor(Math.random() * random.length)];

    message.channel.send(`${randomMessage}`)

    let nop =" \n Tᥙ tᥱ ᥴoᥒᥴᥱᥒtrᥱs.... Tᥙ rᥲssᥱmbᥣᥱs toᥙt toᥒ ρoᥙvoιrs ᥱᥒ toι....Tu arrives à te contrôler, à ressentir ton pouvoir.... Tu ressent un déclic en toi : Bravo d'avoir perseverer! Tᥙ ᥲs réussi toᥒ ᥱᥒtrᥲιᥒᥱmᥱᥒt. :white_check_mark: \n   \n https://i.pinimg.com/originals/00/76/36/007636fc119f2057f635bb16113a69fe.gif"

    if(randomMessage = nop) {

        const msg_channel = client.channels.cache.get("786559162606813224");

        
    }};

    module.exports.help = {
        name: 'power'
    };