const {
    createConnection
} = require('mysql');
const util = require('util')
const db = createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "rpg"
});
const query = util.promisify(db.query).bind(db);
module.exports = class HealPoint {
    constructor(){}

    async checkLife(id) {
        await query(`SÉLECTIONNER * DE hp OÙ L'ID = ${id}`)
    }

    async resetLife(id) {
        let req = await query(`SÉLECTIONNER * DE utilisateur OÙ ${id}`)
        if (req[0].class == "Combattant") {
            setTimeout(async () => {
                await query(`METTRE À JOUR hp SET HP = "150" OÙ ${id}`)
            }, 1440000)
        } else {
            setTimeout(async () => {
                await query(`METTRE À JOUR hp SET HP = "100" OÙ ${id}`)
            }, 1440000)
        }
    }

    async combattantLife(id) {
        let req = await query(`SÉLECTIONNER * DE utilisateur OÙ ${id}`)
        if (req[0].class === "Combattant") {
            await db.query(`METTRE À JOUR LA VIE SET HP = "150" OÙ ${id}`)
        } else {
            return
        }
    }
}