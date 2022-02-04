const internalError = require('./schema/internalError');
/**
 * Gestion des erreurs
 * @param {Object} err - erreur envoyé
 * @param {Object} req 
 * @param {Object} res 
 * @param {Object} next 
 * @returns {Object} - API JSON response status
 */
module.exports = (err, req, res, next)=>{
    try {
        if(!err.errorSchema){
            err.errorSchema = internalError;
        }      
        /**Renvoie les status erreur */
        if( err?.errorSchema[err.type]?.statusCode
            && err?.errorSchema[err.type]?.redirect 
            && err?.errorSchema[err.type]?.message)
        {            
            return res.status(err.errorSchema[err.type].statusCode)
                .json({               
                    'redirect':err.errorSchema[err.type].redirect,                
                    'error' : true,
                    'message':err.errorSchema[err.type].message
                });
        }      
    } catch (error) {
        console.log(error);        
    }    
};