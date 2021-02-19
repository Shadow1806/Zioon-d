const { createConnection } = require('mysql');
const util = require('util')
const db = createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "rpg"
});
const query = util.promisify(db.query).bind(db);
module.exports = class estheticsData {
    constructor() {}
    async Tunic(){
        // class Sorcier
        await query(`INSÉRER des éléments (items, lvl, damage) VALEURS ('tunique', '1', 'NULL')`)
    }

    async SorcererHat(){
        // class Sorcier
        await query(`INSÉRER des éléments (items, lvl, damage) VALEURS ('chapeau de sorcier', '1', 'NULL')`)
    }
    
    async ArmorDB(){
        // class Combattant
        await query(`INSÉRER des éléments (items, lvl, damage) VALEURS ('armur', '1', 'NULL')`)
    }

    async estheticsload(){
        this.Tunic()
        this.SorcererHat()
        this.ArmorDB()
    } 
}