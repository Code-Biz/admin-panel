// The error middleware is utilized/applied by all routes as its being called by the app.use code line in server.js

const errorMiddleware = (err, req, res, next) => {
    const status = err.status || "Error Status Not Found ...";
    const name = err.error.name || "Error Name not found ...";
    const heading = err.heading || "Error heading not found ...";
    const description = err.description || { Description: "Not Description Not Found ..." };
    const issue_message = err.error.issues[0].message || "Error Issue-Message Not Found ...";
    const Error_Details = err || "Error details not found ...";

    // THIS MIDDLEWARE AND THE BELOW RESPONSE IS THE POINT FROM WHERE ANY ERROR DETAILS CAN BE
    // // SENT TO THE FRONT_END FOR DISPLAY
    // console.log({ status, name, heading, issue_message, description, });
    return res.status(404).json(issue_message);
}

module.exports = errorMiddleware;