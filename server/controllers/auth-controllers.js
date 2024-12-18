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
         const userCreated = await User.create({ username, email, pass, phone });

         res.status(200).json({
            msg: "User registered successfully ...",
            token: await userCreated.generateToken(), //middleware defined in model
            user_id: userCreated._id.toString()
         });

         console.log("User Created Successfully : " + `${userCreated}`);
      }
   } catch (error) {
      res.status(404).send({ message: "Page Not Found!" })
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

      if (userVerified) {
         res.status(201).json({
            msg: "Login Successfull ...",
            user_id: userExist._id.toString(),
            token: await userExist.generateToken(),
         })

      }
      else {
         res.status(400).json({ msg: "Invalid Credentials" })
      }
   } catch (error) {
      res.status(404).send({ message: "Server Error!" })
   }

};

module.exports = { home, register, login }