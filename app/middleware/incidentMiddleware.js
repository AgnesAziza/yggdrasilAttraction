/**
 * controller de récuperation de données
 */
const client = require('../database/pool');
const incidentMiddlewareSchemaError= require('../erros/schema/incidentMiddelwareError');
const incidentDataMapperError = require('../erros/schema/incidentDataMapperError');
const incidentDataMapper = require('../models/incident.dataMapper')(client, incidentDataMapperError);
module.exports = {

    /**home page - listing des incidents en cours */
    getAll : async(req,res,next)=>{
        const incidents = await incidentDataMapper.findAll();        
        if(!incidents){
            console.log('pas de données');
            return next({ errorSchema: incidentMiddlewareSchemaError, type: 'emptyResult' });
        }

        /**erreur lors de la requete */
        if(incidents.error){
            console.log(incidents.error.message);
            return next({errorSchema: incidents.error.errorSchema , type: incidents.error.type}); 
        }        
        /**Renvoie du résulat */
        req.incidents = incidents;
        next();
    },

    /**
     * récupration incident par id
     * @param {Object} req 
     * @param {Object} res 
     * @param {Object} next 
     */
    getIncident: async(req, res, next)=>{
        const id =parseInt(req.params.id, 10);
        if(isNaN(id)){
            return next({errorSchema: incidentMiddlewareSchemaError, type:'idBadFormat' }); 
        }
        const incidentById = await incidentDataMapper.findById(id);

        if(!incidentById){
            console.log('pas de données');
            return next({ errorSchema: incidentMiddlewareSchemaError , type: 'emptyResult' });
        }

        /**erreur lors de la requete */
        if(incidentById.error){
            console.log(incidentById.error.message);
            return next({errorSchema: incidentById.error.errorSchema , type: incidentById.error.type}); 
        }

        /**Renvoie du résulat */
        req.incidentById = incidentById;
        next();
    },

    /**
     * cration d'un incident
     * @param {Object} req 
     * @param {Object} res 
     * @param {Object} next 
     */
    createIncident: async(req, res, next)=>{
        const createIncident = await incidentDataMapper.create();

        if(!createIncident){
            console.log('pas de données');
            return next({ errorSchema: incidentMiddlewareSchemaError , type: 'emptyResult' });
        }

        /**erreur lors de la requete */
        if(createIncident.error){
            console.log(createIncident.error.message);
            return next({errorSchema: createIncident.error.errorSchema , type: createIncident.error.type}); 
        }

        /**Renvoie du résulat */
        req.incidentById = createIncident;
        next();
    },

    /**
     * Mise a jour d'un incident     * 
     * @param {Object} req 
     * @param {Object} res 
     * @param {Object} next 
     */
    updateIncident: async(req, res, next)=>{
        const id =parseInt(req.params.id, 10);
        if(isNaN(id)){
            return next({errorSchema: incidentMiddlewareSchemaError, type:'idBadFormat' }); 
        }
        const updateById = await incidentDataMapper.updateById(id);

        if(!updateById){
            console.log('pas de données');
            return next({ errorSchema: incidentMiddlewareSchemaError , type: 'emptyResult' });
        }

        /**erreur lors de la requete */
        if(updateById.error){
            console.log(updateById.error.message);
            return next({errorSchema: updateById.error.errorSchema , type: updateById.error.type}); 
        }

        /**Renvoie du résulat */
        req.incidentById = updateById;
        next();
    }
};