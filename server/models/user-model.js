const mongoose=require('mongoose');

const userSchema= new mongoose.Schema({
    username:{
    type: String,
    require: true,
    },
    email:{
    type: String,
    require: true,
    },
    pass:{
    type: String,
    require: true,
    },
    phone:{
    type: String,
    require: true,
    },
    
    isAdmin:{
    type: Boolean,
    default: false,
    },
});
    


module.exports = new mongoose.model("userCollection", userSchema);