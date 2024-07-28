const express = require('express');
const appointment = require('../controllers/appointment.js');

const router = express.Router();

const {
    bookAppointment,
    getAppointments,
} = require("../controllers/appointment.js");

router.post('/appointment/:id', bookAppointment);
router.get('/appointment/:id', getAppointments);

module.exports = router;
