/**
 * controller d'acces au pages internet
 */
module.exports ={

    /**
     * tous les incidents
     */
    homeIncidentPage: (req, res, next)=>{
        //récuperation des incident
        const incidents = req.incidents;
        console.log(incidents);
        res.json(incidents);
    },

    /**
     * détail d'un incident
     */
    detailIncidentPage: (req, res, next)=>{
        const incident = req.incidentById;
        res.json(incident);
    },

    /**
     * créaton d'un incident
     */
    CreatePage: (req, res, next)=>{
        const incident = req.createdIncident;
        res.json(incident);
    },

    /**
     * Update d'un incident
     * @param {Object} req 
     * @param {Object} res 
     * @param {Object} next 
     */
    updatePage: (req, res, next)=>{
        const incident = req.updateIncident;
        res.json(incident);
    }
}