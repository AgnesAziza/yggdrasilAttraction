const express = require('express');
const router = express.Router();
const controller = require('../controllers');

/**Acces maintenance page */
router.get('/', controller.homePage);

router.post('/new', controller.createIncident);

router.route('/incident/:id')
    .get(controller.getIncident)
    .put(controller.updateIncident);



module.exports = router;