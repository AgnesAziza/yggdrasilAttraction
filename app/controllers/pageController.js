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
    detailIncidentPage: ()=>{

    },

    /**
     * 
     */
    CreatePage: ()=>{

    },

    updatePage: ()=>{

    }

}