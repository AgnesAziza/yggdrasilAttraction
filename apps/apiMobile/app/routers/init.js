const express = require('express');
const { initAppController } = require('../controllers');

const router = express.Router();

router.get('/init', initAppController.init);

module.exports = router;