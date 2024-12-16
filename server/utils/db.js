const mongoose= require('mongoose');
require('dotenv').config();



const uri= process.env.MONGODB_URI;

const connectDB= async () => {
 try {
    await mongoose.connect(uri);
    console.log("Database Connection Successful");
 } catch (error) {
    console.error("Database connection failed! ...");
    console.log(error);
    process.exit(0);
 }   
};

module.exports = connectDB;