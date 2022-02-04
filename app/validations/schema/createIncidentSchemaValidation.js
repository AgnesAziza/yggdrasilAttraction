/**
 * validation création incident
 */
const Joi = require('joi');
module.exports = Joi.object({
    incident_number:Joi.string()
        .required(),
    nature:Joi.string()
        .required(),
    technical:Joi.string()
        .required(),
    failure_date:Joi.date().required(),
    attraction_id:Joi.number().required(),

});