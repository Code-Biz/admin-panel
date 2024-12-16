const User=require('../models/user-model');

const home= async (req,res)=>{
   try {
    res.status(200).send("Welcome To Dentoblog");
   } catch (error) {
     console.log(error);
   } 
 };

 const register= async (req,res) => {
    try {
      const {username, email, pass, phone}= req.body;

      const userExist = await User.findOne({email});
      if(userExist){
         console.log("User Already Exists");
         return res.status(400).json({message: "User already exists..."});     
      }
      else{
         const userCreated=  await User.create({username, email, pass, phone});
         res.status(200).json({msg: userCreated});
         console.log("User Created Successfully");
      }
    } catch (error) {
        res.status(404).send({message:"Page Not Found!"})
    }
  
 };
 const login= async (req,res) => {
    try {
            res.status(200).send("Login pls!");
    } catch (error) {
        res.status(404).send({message:"Page Not Found!"})
    }
    
 };

 module.exports = {home, register, login}