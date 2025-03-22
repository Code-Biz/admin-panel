const { z } = require('zod');

console.log("Reference: regValidationSchem.js");

const regValidationSchema = z.object({

    username: z.string({ required_error: "Username required ..." }).trim().min(3, { message: "Username must be of atleast 3 characters ..." }).max({ message: "Username must not be of more than 255 characters ..." }),
    email: z.string({ required_error: "Email required ..." }).trim().min(3, { message: "Email must be of atleast 3 characters ..." }).max({ message: "Email must not be of more than 255 characters ..." }),
    pass: z.string({ required_error: "Pass required ..." }).trim().min(3, { message: "Pass must be of atleast 3 characters ..." }).max({ message: "Pass must not be of more than 255 characters ..." }),
    phone: z.string({ required_error: "Phone required ..." }).trim().min(3, { message: "Phone must be of atleast 3 characters ..." }).max({ message: "Phone must not be of more than 255 characters ..." })
});


module.exports = regValidationSchema;