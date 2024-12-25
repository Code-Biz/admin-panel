const { z } = require('zod');

const loginValidationSchema = z.object({
    email: z.string({ required_error: "Email Required" }).trim().min(3, { message: "Email must be of atleast 3 characters ..." }).max({ message: "Email must not be of more than 255 characters ..." }),
    pass: z.string({ required_error: "Pass required ..." }).trim().min(3, { message: "Pass must be of atleast 3 characters ..." }).max({ message: "Pass must not be of more than 255 characters ..." }),
});

module.exports = loginValidationSchema;