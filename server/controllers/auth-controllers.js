

const home= async (req,res)=>{
   try {
    res.status(200).send("Welcome To Dentoblog");
   } catch (error) {
     console.log(error);
   } 
 };

 const register= async (req,res) => {
    try {
            res.status(200).send("To access notes register pls!") ;
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