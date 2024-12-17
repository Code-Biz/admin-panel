const mongoose=require('mongoose');
const bcrypt= require('bcryptjs')

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

// HASHING --------
// Hashing Password using the below middleware on the spot its recieved in th registration request
userSchema.pre('save', async function () {

    if(!this.isModified('pass')){
        next();
    }

    try {
        //const user= this.pass;

        const saltRounds= await bcrypt.genSalt(10);
        const hashedPass= await bcrypt.hash(this.pass, saltRounds);
        this.pass= hashedPass;

    } catch (error) {
        next(error);
    }
})
    


module.exports = new mongoose.model("userCollection", userSchema);