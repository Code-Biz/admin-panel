const User = require('../models/user-model');





// DASHBOARD ---------
const home = async (req, res) => {
   try {
      res.status(200).send("Welcome To Dentoblog");
   } catch (error) {
      console.log(error);
   }
};


//REGISTER  ----------
const register = async (req, res) => {
   try {
      const { username, email, pass, phone } = req.body;

      const userExist = await User.findOne({ email });
      if (userExist) {
         console.log("User Already Exists");
         return res.status(400).json({ message: "User already exists..." });
      }
      // registering
      else {
         const userCreated = await User.create({ username, email, pass, phone });// This is the main line below is just a basic response shown to user.

         res.status(200).json({
            msg: "User registered successfully ...",
            token: await userCreated.generateToken(), //middleware defined in model
            user_id: userCreated._id.toString()
         });

         console.log("User Created Successfully : " + `${userCreated}`);
      }
   } catch (error) {
      // res.status(404).send({ message: "Page Not Found!" }) use this line or the line below in which we are calling an arror middleware
      const status = "404";
      const message = "Error: User Registration Failed by register-auth-controller!";
      const description = "There might be something wrong with the user entered details or backend...";
      const err = { status, message, description, error };
      next(err);
   }

};


// LOGIN   ----------
const login = async (req, res) => {
   try {

      const { email, pass } = req.body;

      const userExist = await User.findOne({ email });
      console.log(userExist);
      if (!userExist) {
         res.status(401).json({ message: "User not found ..." })
      }

      const userVerified = await userExist.comparePass(pass);
      // Or const userVerified = bcrypt.compare(pass, userExist.pass);;

      if (userVerified) {
         res.status(201).json({
            msg: "Login Successfull ...",
            user_id: userExist._id.toString(),
            token: await userExist.generateToken(),
         })

      }
      else {
         res.status(400).json({ msg: "Invalid Credentials from backend" })
      }
   } catch (error) {
      res.status(404).send({ message: "Server Error!" })
   }

};


// USER    ----------
const user = async (req, res) => {
   try {
      const userData = req.user;
      console.log("User Found, below is his data: " + userData);
      return res.status(200).json({ userData })
   } catch (error) {
      console.log("Error hit while finding user data: " + error);
   }
};


module.exports = { home, register, login, user }