const User = require('../models/user-model');
const ContactDB = require('../models/contact-model');



// DASHBOARD ---------
const home = async (req, res) => {
   try {
      res.status(200).send("Welcome To Dentoblog");
   } catch (error) {
      console.log(error);
   }
};


//when we post data by submit button in the handle submit function of register.jsx i.e frontend part
// that data goes to the regValidator and from their if theres no response/error rcvd i.e everything is valid then the next()-with no arguments 
// will move the flow to this below register function and a res from it will be returned to the frontend. 

//REGISTER  ----------
const register = async (req, res) => {
   try {
      const { username, email, pass, phone } = req.body;

      const userExist = await User.findOne({ email });
      if (userExist) {
         console.log("User Already Exists");
         return res.status(400).json("User already exists...");
      }
      // registering
      else {
         const userCreated = await User.create({ username, email, pass, phone });// This is the main line below is just a basic response shown to user.
         console.log("This is the result of userCreated : ", userCreated);

         res.status(200).json({
            msg: "User registered successfully ...",
            token: await userCreated.generateToken(), //middleware defined in model
            user_id: userCreated._id.toString()
         });

         console.log("User Created Successfully : " + `${userCreated}`);
      }
   } catch (error) {
      // res.status(404).send({ message: "Page Not Found!" }) use this line or the line below in which we are calling an arror middleware
      //At this nect if there is some error it moves to the error middleware with the default error data or with custom error dat u can define here as u did in regValidoto
      console.log("Moving to next() from auth-controllers");
      next(err);
   }

};



// LOGIN   ----------
const login = async (req, res) => {
   try {

      const { email, pass } = req.body;

      const userExist = await User.findOne({ email });
      if (!userExist) {
         res.status(401).json("User not found ...")
      }

      else {
         // console.log("User Found: " + userExist);
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
            res.status(400).json("Valid input but isn't correct!")
         }
      }
   } catch (error) {
      console.log("Server Error at auth-controller : " + error);
      const err = { error };
      next(err);
   }

};




// USER    ----------
const user = async (req, res) => {
   try {
      const data = req.user;
      console.log("User Found, below is his data: " + data);
      return res.status(200).json({ data })
   } catch (error) {
      console.log("Error hit while finding user data: " + error);
   }
};




module.exports = { home, register, login, user }