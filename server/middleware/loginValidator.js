const loginValidator = (schema) => async (req, res, next) => {
    try {

        const validatedLogin = await schema.parseAsync(req.body);
        req.body = validatedLogin;
        console.log("Validated credentials ! - ref: loginValidator.js");
        next();

    } catch (error) {
        next(error)// error middleware
    }
};

module.exports = loginValidator