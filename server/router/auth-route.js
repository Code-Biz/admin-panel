const express=require('express');
const router=express.Router();
const auth_controllers= require("../controllers/auth-controllers");


router.route('/').get(auth_controllers.home);
router.route('/register').post(auth_controllers.register);
router.route('/login').get(auth_controllers.login);

module.exports=router;