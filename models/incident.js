module.exports=(client) => ({

    /**
     * retourne tous les incidents
     * @returns 
     */
    async findAll(){
        const result = await client.query('SELECT * FROM "incident"');
        return result.rows;
    },

    /**
     * Renvoie l'incident récuoeré par son id
     * @param {Number} incidentId 
     * @returns 
     */
    async findById(incidentId){
        const result = await client.query('SELECT * FROM "incident" WHERE id = $1', [
            incidentId,
        ]);

        if(result.rowCount === 0) {
            return null;
        }
        return result.rows[0];        
    },

    /**
     * Mise a jour de l'incident 
     * @param {Object} incident 
     * @param {Number} id 
     * @returns 
     */
    async updateById(incident, id){
        const result = await client.query('SELECT * FROM "incident" WHERE id = $1', [id]);

        if(result.rowCount === 0) {

        }

        const oldIncident = result.rows[0];
        const newIncent = { ...oldIncident, ...incident };

        const savedPost = await client.query('SELECT * FROM update_post($1)', [newIncent]);
        return savedPost.rows[0];
    },

    /**
     * 
     */
    async create(incident){
        const savedIncident = await client.query(            `
                INSERT INTO incident
                (incident_number, nature, technical, repair_date, attraction_id, failure_date) VALUES
                ($1, $2 ,$3, $4, $5) RETURNING *
            `,
        [incident.incident_number, incident.nature, incident.technical, incident.repair_date, incident.attraction_id, incident.failure_date],
        );
        return savedIncident.rows[0];
    }
});