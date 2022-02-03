const express = require('express');
const { bookAppController } = require('../controllers');

const router = express.Router();

router.get('/book', bookAppController.book);

module.exports = router;