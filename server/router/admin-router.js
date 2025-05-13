const express = require('express');
const router = express.Router();
const tokenVerifier = require('../middleware/tokenVerifier');
const isAdminValidator = require('../middleware/isAdminValidator');
const admin_controllers = require('../controllers/admin-controllers');
const contacts = require('../controllers/contactus-controller');

router.route('/users').get(tokenVerifier, isAdminValidator, admin_controllers.getAllUsers_Admin);
router.route("/users/delete/:id").delete(tokenVerifier, isAdminValidator, admin_controllers.deleteUser);
router.route('/contacts/all').get(tokenVerifier, isAdminValidator, contacts.getContacts);


//The below line is must here even its imported anywhere
module.exports = router;
