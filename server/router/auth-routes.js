const express = require('express');
const router = express.Router();
const auth_controllers = require("../controllers/auth-controllers");
const regValidator = require("../middleware/regvalidator");
const registrationValidationSchema = require('../models/regValidationSchema');
const loginValidationSchema = require('../models/loginValidationSchema');
const loginValidator = require('../middleware/loginValidator');
const tokenVerifier = require('../middleware/tokenVerifier');


// GET DASHBOARD --------
router.route('/').get(auth_controllers.home);
// POST REGISTER --------
// Explaination: 1-> The frontend sends some userData object in the body to this route
// 2-> This route calls the regValidator passing the schema desinged for validation. The rcvd data is automatically passed and not needed to pass explicitly
// 3-> regValidator matches data for validation and returns the same data object intact if its validated, so now the req.body has still the same data as it was rcvd first but is validated now.
// 4-> Now the req.body i.e data  is passed to auth_controllers.register handler
// 5->  The data in req.body is destructred, matched with prexisiting data and then a new user with the given data is created with the help of the User Schema. The User.create() method returns the collection/data object created in the database. All this is done inside register handler.
// 6-> Once user is created and an object/collection is rcvd, a object.generateToken() method i.e userCreated.generateToken() method defined in the schema is called. This method returns a token generated via jwt.sign() on the bases of users id, email, isAdmin and secret-key for this 
// 7-> This route then sends a response containing msg, token and user_id back to the REGISTER.JSX frontend 
router.route('/register').post(regValidator(registrationValidationSchema), auth_controllers.register);
// GET LOGIN ---------
// Explaination: 1-> Same as POST REGISTER from 1-4.
// 5-> The data is destructured and passed to the comparePass() in schema to verify the user password via bcrypt.compare.
// Actually what happens in the login handler is that the user is first found via the email. If found in the database a single user document (user data object) returned by the find() method and is stored in a variable. 
// Then using the variable cthe comparePass(req.body.pass) is called. Now the compare passs runs bcrypt.compare(passEntered,this.pass) to match the two passwords.
// HERE this.pass REFERES TO THE STORED PASSWORD OF THE USER (rcvd in the single user document or say the user data object) THAT CALLED THE COMPAREPASS() AND THE BCRYPT
// 6-> If verified a msg, id and token are returned as response to the LOGIN.JSX frontend. IT IS WHERE THEN THE TOKEN IS PASSED TO THE LCAL STORAGE via storeTokenInLS
router.route('/login').post(loginValidator(loginValidationSchema), auth_controllers.login);
// GET USER ---------
router.route('/user').get(tokenVerifier, auth_controllers.user);

module.exports = router;

