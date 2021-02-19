const Sortileges = require('../sorts')
const { createConnection } = require('mysql');
const util = require('util')
const db = createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "rpg"
});
const query = util.promisify(db.query).bind(db);
module.exports = class Attaque extends Sortileges{
    constructor(name, defaut){
        super(name);
        this.name = name;
        this.damage = defaut;
    }
    /**
     * @class
     * Sortilèges d'attaque
     */
    
     /**
     * @function lancement
     * @id - ID de l'utilisateur utilisant le sortilège
     * @victime - ID de la personne victime du sortilège
     */
    async lancement(id, victime) {
        let victimeHealth = (await query(`SÉLECTIONNEZ hp de hp où id = ${victime}`))[0].HP;
        if(parseInt(victimeHealth) - parseInt(this.damage) <= 0) {
            // dead boy
            // Système de mort SOON
            await query (`METTRE À JOUR HP SET HP = '0' où id = '${victime}'`)
        }
        else {
            await query (`METTRE À JOUR HP SET HP = '${parseInt(victimeHealth) - parseInt(this.damage)}' WHERE ID = '${victime}'`)
        }
    }
}