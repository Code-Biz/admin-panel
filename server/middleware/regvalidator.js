const regvalidator = (schema) => async (req, res, next) => {

    try {
        const validatedRegistration = await schema.parseAsync(req.body);
        req.body = validatedRegistration;
        console.log("User is validated")
        next(); // goes back to the function 
    } catch (error) {
        const status = "40400";
        const heading = "Validation Failed by regValidator!";
        const description = "Please recheck for mistakes in form fields or see the issues in detail below : ";

        const err = { status, heading, description, error };

        //The reg Validator Verifies the format and if theres any error it moves to the error middleware from this next()
        next(err);

        // This next passes err as defined above to the error - middleware where it is directly returned in the return statement as it is by using the term err only or the values set/defined in the error-middleware can be returned
    }

};

module.exports = regvalidator;