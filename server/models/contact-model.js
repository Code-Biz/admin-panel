const { Schema, model } = require('mongoose');

const contactSchema = new Schema({
    username: {
        type: String,
        require: true,
    },
    email: {
        type: String,
        require: true,
    },

    message: {
        type: String,
    }
});

const contact = new model("contact", contactSchema);
module.exports = contact;