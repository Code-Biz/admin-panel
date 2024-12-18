const mongoose = require('mongoose');
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken');
require('dotenv').config();


const userSchema = new mongoose.Schema({
    username: {
        type: String,
        require: true,
    },
    email: {
        type: String,
        require: true,
    },
    pass: {
        type: String,
        require: true,
    },
    phone: {
        type: String,
        require: true,
    },

    isAdmin: {
        type: Boolean,
        default: false,
    },
});

// HASHING --------
// Hashing Password using the below middleware on the spot its recieved in th registration request
userSchema.pre('save', async function () {

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


module.exports = new mongoose.model("userCollection", userSchema);
