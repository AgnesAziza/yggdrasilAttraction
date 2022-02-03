const express = require('express');
const { bookingsAppController } = require('../controllers');

const router = express.Router();

router.get('/bookings', bookingsAppController.bookings);

module.exports = router;
