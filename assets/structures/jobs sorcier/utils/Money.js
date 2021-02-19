  
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
module.exports = class Money {
    constructor(){}

    async updateDaily(){
        setInterval(async () => {
            let req = await query(`SÉLECTIONNER * DE l'argent`)
            for (let i = 0; i < req.length; i++) {
                let oldMoney = req[i].money
                let newMoney = parseInt(oldMoney) + 25
                await query(`METTRE À JOUR l'argent SET money = '${newMoney}'`)
            }
        }, 86400000)
    }
}