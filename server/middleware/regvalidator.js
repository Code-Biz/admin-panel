const regvalidator = (schema) => async (req, res, next) => {

    try {
        const validatedRegistration = await schema.parseAsync(req.body);
        req.body = validatedRegistration;
        console.log("User is validated")
        next(); // goes back to the function 
    } catch (error) {
        const status = "404";
        const heading = "Validation Failed by regValidator!";
        const description = "Please recheck for mistakes in form fields or see the issues in detail below : ";
        const err = { status, heading, description, error };
        next(err); //goes to the error middleware
    }

};

module.exports = regvalidator;