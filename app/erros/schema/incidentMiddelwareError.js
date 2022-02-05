module.exports = {
    //données manquantes
    missingData : {message: 'certaines données sont manquantes', statusCode:'422' ,redirect :'/', error: true},
    //champ vide
    emptyResult: {message: 'Pas de données', statusCode:'404' ,redirect :'/', error: true},
    //mauvais format pour id incident
    idBadFormat: {message: 'format id invalid', statusCode:'422' ,redirect :'/', error: true},
};