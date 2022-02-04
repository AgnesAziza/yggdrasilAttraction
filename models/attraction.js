const client = require('../config/db');
/**
 * @typedef {object} Get
 * @property {number} capacity - Capacité d'accueil d'une attraction / spectacle
 * @property {string} name - Nom de l'attraction / spectacle
 * @property {number} open_time - Heure d'ouverture
 * @property {number} closer_time - Heure de fermeture
 *
 */

const attractionDataMapper = {
    async attractionActive () {
        const result = await client.query(`SELECT * FROM IF ("open_time" < NOW() AND "closer_time > NOW()) THEN
                                           RETURN {open : true}
                                           ELSE
                                           RETURN FALSE
                                           END IF
                                           `);

    }
};


module.exports = client;
