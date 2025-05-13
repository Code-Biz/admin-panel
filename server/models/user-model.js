const mongoose = require('mongoose');
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken');
const { required } = require('./regValidationSchema');
require('dotenv').config();


const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    pass: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    },

    isAdmin: {
        type: Boolean,
        default: false,
    },
});

// HASHING --------
// Hashing Password using the below middleware on the spot its recieved in th registration request via the create/save method. This function runs on create/save method
userSchema.pre('save', async function (next) {

    if (!this.isModified('pass')) {
        next();
    }

    try {
        //const user= this.pass;

        const saltRounds = await bcrypt.genSalt(10);
        const hashedPass = await bcrypt.hash(this.pass, saltRounds);
        this.pass = hashedPass;

    } catch (error) {
        next(error);
    }
})


// JWT GENERATION --------------

userSchema.methods.generateToken = async function () {


    try {
        return jwt.sign(
            {
                user_id: this._id.toString(),
                email: this.email,
                isAdmin: this.isAdmin,
            },
            process.env.JWT_SECRET_KEY,
            {
                expiresIn: "10d",
            }
        );
    } catch (error) {
        console.error(error);

    }

}

// USERFOUND
userSchema.methods.comparePass = async function (passEntered) {
    try {
        return await bcrypt.compare(passEntered, this.pass);

    } catch (error) {
        res.status(401).json({ Error: error });
    }

}

// *IMP*
//  A collection named userCollection that will contains multiple users details based on the schema userSchema,
//    will be created in the Database named as adminPanel, via MongoDb.
//The below term userCollection refers that the name of collection created against the userSchema will be userCollections.
//Model is somewhat you say collection+schema. i.e a collection based on some schema is refered as model
module.exports = new mongoose.model("userCollection", userSchema);
