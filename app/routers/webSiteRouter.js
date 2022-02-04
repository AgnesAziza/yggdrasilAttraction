const express = require('express');
const router = express.Router();
const pageController = require('../controllers').pageController;
const incidentMiddleware = require('../middleware/index').incidentMiddleware;

/**Acces incident page */
router.get('/', incidentMiddleware.getAll, pageController.homeIncidentPage);

/**Creation d'un nouvel incident  */
router.post('/new', pageController.CreatePage);

/** */
router.route('/incident/:id')
    /** recuperation d'un incident*/
    .get(incidentMiddleware.getIncident, pageController.detailIncidentPage)
    /**modification du status d'un incident */
    .put(incidentMiddleware.updateIncident, pageController.updatePage);

module.exports = router;