const express = require('express');
const { mobileAppController } = require('../controllers');

const router = express.Router();

router.get('/', mobileAppController.homePage);

module.exports = router;