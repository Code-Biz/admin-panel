const express = require('express');
const router = express.Router();
const tokenVerifier = require('../middleware/tokenVerifier');
const isAdminValidator = require('../middleware/isAdminValidator');
const admin_controllers = require('../controllers/admin-controllers');

router.route('/users').get(tokenVerifier, isAdminValidator, admin_controllers.getAllUsers_Admin);
router.route("/users/delete/:id").delete(tokenVerifier, isAdminValidator, admin_controllers.deleteUser);


//The below line is must here even its imported anywhere
module.exports = router;
