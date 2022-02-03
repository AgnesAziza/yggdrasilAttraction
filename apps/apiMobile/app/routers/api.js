const express = require('express');
const { apiController } = require('../controllers');

const router = express.Router();

router.get('/api', apiController.main);

module.exports = router;
