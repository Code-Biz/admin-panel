const loginValidator = (schema) => async (req, res, next) => {
    try {

        const validatedLogin = await schema.parseAsync(req.body);
        req.body = validatedLogin;
        console.log("Validated credentials ! - ref: loginValidator.js");
        next();

    } catch (error) {
        console.log("I am at loginValidator : " + error);
        const err = { error };
        next(err)// error middleware
    }
};

module.exports = loginValidator