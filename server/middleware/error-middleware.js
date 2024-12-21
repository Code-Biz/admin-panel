const { description } = require("../models/regValidationSchema");

const errorMiddleware = (err, req, res, next) => {
    const status = err.status || "Error Status Not Found ...";
    const name = err.error.name || "Error Name not found ...";
    const heading = err.heading || "Error heading not found ...";
    const issue_message = err.error.issues[0].message || "Error Issue-Message Not Found ...";
    const description = err.description || { Description: "Not found ..." };
    const Error_Details = err.error || "Error details not found ...";

    return res.status(status).json({ status, name, heading, issue_message, description, Error_Details });
}

module.exports = errorMiddleware;