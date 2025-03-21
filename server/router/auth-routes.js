const express = require('express');
const router = express.Router();
const auth_controllers = require("../controllers/auth-controllers");
const registrationvalidator = require("../middleware/regvalidator");
const registrationValidationSchema = require('../models/regValidationSchema');
const loginValidationSchema = require('../models/loginValidationSchema');
const loginValidator = require('../middleware/loginValidator');
const tokenVerifier = require('../middleware/tokenVerifier');



// GET DASHBOARD --------
router.route('/').get(auth_controllers.home);
// POST REGISTER --------
router.route('/register').post(registrationvalidator(registrationValidationSchema), auth_controllers.register);
// GET LOGIN ---------
router.route('/login').post(loginValidator(loginValidationSchema), auth_controllers.login);
// GET USER ---------
router.route('/user').get(tokenVerifier, auth_controllers.user);
module.exports = router;

