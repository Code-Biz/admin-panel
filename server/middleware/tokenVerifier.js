const jwt = require('jsonwebtoken');
const User = require('../models/user-model');

const authMiddleware = async (req, res, next) => {

    const token = req.header("Authorization");



    if (!token) {
        console.log("Unauthorized HTTP, token not found!");
        return res.status(401).json({ msg: "HTTP request not authorized, because not logged in!" });

    }

    const pureToken = token.replace("Bearer ", "").trim();
    console.log("Token after trim: " + pureToken);

    try {
        const tokenVerifed = jwt.verify(pureToken, process.env.JWT_SECRET_KEY);
        const userData = await User.findOne({ email: tokenVerifed.email }).select({ pass: 0, });
        console.log("Token Verified! - ref: tokenVerifier.js");


        //The req data will be first rcvd in this middleware, it will be then updated as below 
        // and then will be passed to the next middleware that is the isAdminValidator as soon as the next() gets called
        req.user = userData;
        req.userID = userData._id;
        req.token = token;

        next();
    }
    catch (error) {
        console.log("Error: Token ain't Verified!");
    };

}

module.exports = authMiddleware;