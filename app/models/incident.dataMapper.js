/**
 * 
 * @param {Object} client 
 * @param {Object} incidentDataMapperError 
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
     * Mise a jour de l'incident 
     * @param {Object} incident - données de l'incident
     * @param {Number} id - id de l'incident
     * @returns 
     */
    async updateById(incident, id){
        try {
            const result = await client.query('SELECT * FROM "incident" WHERE id = $1', [id]);

            if(result.rowCount === 0) {
                return ({errorSchema: incidentDataMapperError, type: 'updateIdUnvalid', error: 'updateIdUnvalid'});
            }

            const oldIncident = result.rows[0];
            const newIncent = { ...oldIncident, ...incident };

            const savedPost = await client.query('SELECT * FROM update_post($1)', [newIncent]);
            return savedPost.rows[0];            
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
            const savedIncident = await client.query(            `
                INSERT INTO incident
                (incident_number, nature, technical, repair_date, attraction_id, failure_date) VALUES
                ($1, $2 ,$3, $4, $5) RETURNING *
            `,
            [incident.incident_number, incident.nature, incident.technical, incident.repair_date, incident.attraction_id, incident.failure_date],
            );
            return savedIncident.rows[0];            
        } catch (error) {
            return ({errorSchema: incidentDataMapperError, type: 'queryError', error: error});
        }        
    }
});