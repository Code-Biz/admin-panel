const { z } = require('zod');

console.log("Reference: regValidationSchem.js");

// const loginValidationSchema = z.object({
//     email: z.string({ required_error: "Email Required" }).trim().min(3, { message: "Email must be of atleast 3 characters ..." }).max({ message: "Email must not be of more than 255 characters ..." }),
//     pass: z.string({ required_error: "Pass required ..." }).trim().min(3, { message: "Pass must be of atleast 3 characters ..." }).max({ message: "Pass must not be of more than 255 characters ..." }),
// });

//YOU CAN USE ABOVE SCHEMA AS PART OF REGVALIDATIONSCHEMA BY USING THE .EXTEND FEATURE and remove the two lines of email and pass of registrationSchema this will lessen the code or the separate file of loginValidaitonschema


const regValidationSchema = z.object({

    username: z.string({ required_error: "Username required ..." }).trim().min(3, { message: "Username must be of atleast 3 characters ..." }).max({ message: "Username must not be of more than 255 characters ..." }),
    email: z.string({ required_error: "Email required ..." }).trim().min(3, { message: "Email must be of atleast 3 characters ..." }).max({ message: "Email must not be of more than 255 characters ..." }),
    pass: z.string({ required_error: "Pass required ..." }).trim().min(3, { message: "Pass must be of atleast 3 characters ..." }).max({ message: "Pass must not be of more than 255 characters ..." }),
    phone: z.string({ required_error: "Phone required ..." }).trim().min(3, { message: "Phone must be of atleast 3 characters ..." }).max({ message: "Phone must not be of more than 255 characters ..." })
});


module.exports = regValidationSchema;