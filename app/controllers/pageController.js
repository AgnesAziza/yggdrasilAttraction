/**
 * controller d'acces au pages internet
 */
module.exports ={

    /**
     * 
     */
    homeIncidentPage: (req, res, next)=>{
        //récuperation des incident
        const incidents = req.incidents;
        console.log(incidents);
        res.json(incidents);
    },

    /**
     * 
     */
    detailIncidentPage: (req, res, next)=>{
        const incident = req.incidentById;
        res.json(incident);
    },

    /**
     * 
     */
    CreatePage: (req, res, next)=>{
        const incident = req.createdIncident;
        res.json(incident);
    },

    updatePage: ()=>{

    }

}