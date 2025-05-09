const regvalidator = (zodValidationschema) => async (req, res, next) => {

    try {
        const validatedRegistration = await zodValidationschema.parseAsync(req.body);
        // console.log("==========>",validatedRegistration); validatedRegistration the same data as it was if it matches the schema and is the as it is passed to the body

        req.body = validatedRegistration;
        console.log("User is validated")
        next(); // goes back to next function i.e register in auth-controller 
    } catch (error) {
        const status = "40400";
        const heading = "Validation Failed by regValidator!";
        const description = "Please recheck for mistakes in form fields or see the issues in detail below : ";

        const err = { status, heading, description, error };

        //The reg Validator parses and verifies the format and if theres any error it rcvs an error from the regVlidationSchema and moves that error to the error middleware from this next()
        next(err);

        // This next passes err as defined above to the error - middleware where it is directly returned in the return statement as it is by using the term err only or the values set/defined in the error-middleware can be returned
    }

};

module.exports = regvalidator;