module.exports = {
    //champ vide
    queryError: {message: 'Echec de la requête', statusCode:'505' ,redirect :'/', error: true},
    //id update incident invalide
    updateIdUnvalid: {message: 'incident a mettre a jour inconnu', statusCode:'404' ,redirect :'/', error: true},
    //numero incident deja existant
    incidentNumberExist: {message: 'numéro incident déja existant', statusCode:'404' ,redirect :'/', error: true},

};