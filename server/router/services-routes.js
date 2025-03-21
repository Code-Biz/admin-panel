const express = require("express");
const router = express.Router();
const servicesController = require('../controllers/servicesController');


router.route("/all").get(servicesController);

module.exports = router;