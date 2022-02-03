const express = require('express');
const { eventsAppController } = require('../controllers');

const router = express.Router();

router.get('/events', eventsAppController.events);

module.exports = router;