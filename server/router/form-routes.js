const express = require('express');
const router = express.Router();
const formController = require('../controllers/form-controller.js');

router.route('/contacts').post(formController);

module.exports = router;