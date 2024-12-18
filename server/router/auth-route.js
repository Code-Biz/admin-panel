const express = require('express');
const router = express.Router();
const auth_controllers = require("../controllers/auth-controllers");

// GET DASHBOARD --------
router.route('/').get(auth_controllers.home);
// POST REGISTER --------
router.route('/register').post(auth_controllers.register);
// GET LOGIN ---------
router.route('/login').post(auth_controllers.login);

module.exports = router;