const { historyModel } = require('../database/models/export/index');

module.exports = async (committer, guild, action) => {
    let historyDoc = await historyModel.findOne({ guildID: guild.id, memberID: committer.id }).catch(console.error);

    if (!historyDoc) {
        historyDoc = new historyModel({
            guildID: guild.id,
            memberID: committer.id,
            [action === 'softban' ? 'kick' : action]: 1,
        });

        await historyDoc.save().catch(console.error);
    }
    else {
        historyDoc[action === 'softban' ? 'kick' : action] += 1;

        await historyDoc.save().catch(console.error);
    }
};