const express = require('express');
const apiRouter = require('./api');
const mobileRouter = require('./mobile');
const bookRouter = require('./book');
const bookingsRouter = require ('./bookings');
const eventsRouter = require('./events');
const initRouter = require('./init');

const router = express.Router();

router.use(apiRouter);
router.use(mobileRouter);
router.use(bookRouter);
router.use(bookingsRouter);
router.use(eventsRouter);
router.use(initRouter);

module.exports = router;
