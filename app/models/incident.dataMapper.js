/**
 * 
 * @param {Object} client - client connexion a la base de données
 * @param {Object} incidentDataMapperError - gestion erreur datamapper
 * @returns 
 */
module.exports=(client, incidentDataMapperError) => ({

    /**
     * retourne tous les incidents
     * @returns 
     */
    async findAll(){
        try {     
            const result = await client.query('SELECT * FROM "incident"');            
            return result.rows;            
        } catch (error) {
            return ({ errorSchema: incidentDataMapperError, type: 'queryError', error: error });
        }        
    },

    /**
     * Renvoie l'incident récuoeré par son id
     * @param {Number} incidentId 
     * @returns 
     */
    async findById(incidentId){
        try {
            const result = await client.query('SELECT * FROM "incident" WHERE id = $1', [
                incidentId,
            ]);
    
            if(result.rowCount === 0) {
                return null;
            }
            return result.rows[0];
        } catch (error) {
            return ({errorSchema: incidentDataMapperError, type: 'queryError', error: error});
        }            
    },

    /**
     * Recupere un incident par N° incident
     * @param {string} incidentNumber 
     */
    async findByIncidentNumber(incidentNumber){
        try {
            const result = await client.query('SELECT * FROM "incident" WHERE incident_number = $1 LIMIT 1', [
                incidentNumber,
            ]);

            if(result.rowCount === 0) {
                return null;
            }
            return result.rows[0];
        } catch (error) {
            return ({errorSchema: incidentDataMapperError, type: 'queryError', error: error});
        }     
    },

    /**
     * Mise a jour de l'incident 
     * @param {Object} incident - données de l'incident
     * @param {Number} id - id de l'incident
     * @returns 
     */
    async updateById(incident, id){
        try {            
            const findIncident = await client.query('SELECT * FROM "incident" WHERE id = $1', [id]);
            
            if(findIncident.rowCount === 0) {
                return ({errorSchema: incidentDataMapperError, type: 'updateIdUnvalid', error: 'update invalid incident id'});
            }
            console.log('findIncident');
            const savedIncident = await client.query(
                `
                    UPDATE incident SET
                    incident_number = $1,
                    nature = $2,
                    technical = $3,
                    attraction_id = $4,
                    failure_date = $5
                    repair_date= $6
                    WHERE id = $7
                    RETURNING *
                `,
                [incident.incident_number, incident.nature, incident.technical, incident.attraction, incident.failure_date, incident.repair_date, id],
            );
            return savedIncident.rows[0];            
        } catch (error) {
            return ({errorSchema: incidentDataMapperError, type: 'queryError', error: error});
        }        
    },

    /**
     * creation d'un incident
     * @param {Object} incident 
     * @returns {Object} - renvoie l'incident de créé
     */
    async create(incident){
        try {     
            const findIncident = await this.findByIncidentNumber(incident.incident_number);       
            
            //N° incident déja présent
            if(findIncident){
                return ({errorSchema: incidentDataMapperError, type: 'incidentNumberExist', error: 'numéro incident déja présent'});
            }
            const savedIncident = await client.query(            `
                INSERT INTO incident
                (incident_number, nature, technical, attraction_id, failure_date) VALUES
                ($1, $2 ,$3, $4, $5) RETURNING *
            `,
            [incident.incident_number, incident.nature, incident.technical, incident.attraction_id, incident.failure_date],
            );
            return savedIncident.rows[0];            
        } catch (error) {
            return ({errorSchema: incidentDataMapperError, type: 'queryError', error: error});
        }        
    }
});