/**
 * Joi Validator
 * @param {Object} schema - schéma de données a valider
 * @params {Object} errorSchema- schéma d'erreur 
 * @returns {object} - next si validation OK ou error
 */
module.exports = (schema, errorSchema) =>async(req, _, next) =>{
    try {          
        console.log(req.body);  
        await schema.validateAsync(req.body);
        next();        
    } catch (error) {        
        console.log(error.message);
        next({errorSchema: errorSchema, type: error.message });
    }
};