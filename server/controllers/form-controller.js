const Contact = require('../models/contact-model');


const contacts = async (req, res) => {
    try {
        await Contact.create(req.body);
        console.log("Form Submitted: " + `${req.body}`);
        return res.status(200).send("Form Submitted ...");

        //SEARCH OUT WHY WE USE RETURN FOR RES SOMETIMES AND SOMETIME WE JSUT DIRECTLY WRITE THE RESPONSE STATEMENT WITHOUT ANY RETURN
    } catch (error) {
        console.log(error);
    }
};


module.exports = contacts;