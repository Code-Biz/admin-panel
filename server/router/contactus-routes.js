const express = require('express');
const router = express.Router();
const contactus = require('../controllers/contactus-controller.js');

router.route('/new').post(contactus.contactUS);

module.exports = router;