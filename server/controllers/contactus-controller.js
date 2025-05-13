const ContactDB = require('../models/contact-model');


const contactUS = async (req, res, next) => {

    try {
        const { userName, userEmail, userMsg } = await req.body;
        console.log("contactus-routes ===> ", userName, userEmail, userMsg);



        const result = await ContactDB.create({ username: userName, email: userEmail, message: userMsg });
        // console.log("contactus-routes ===> ", result);


        if (result) {
            return res.status(200).json("Msg Sent");


        }
    } catch (error) {
        next(error)
    }

};


const getContacts = async (req, res, next) => {

    try {
        const contacts = await ContactDB.find();
        console.log("contacts-controller ====> ", contacts);
        if (contacts.length == 0) {
            return res.status(404).json({ msg: "Contacts not found! => getAllContactss" })
        }
        return res.status(404).json(contacts)

    } catch (error) {
        next("Error", error)
    }



};



module.exports = { contactUS, getContacts };