const express = require('express');
const router = express.Router();
const webSitePageRouter = require('./webSiteRouter');
const error = require('../erros');
const notFound = require('../controllers/notfoundcontroller');

/**router website */
router.use(webSitePageRouter);

/**path inconnue */
router.use(notFound);

/**traitement des erreurs */
router.use(error);

module.exports = router;