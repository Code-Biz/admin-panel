const express = require('express');
const app = express();
const router = require('./router/auth-route');
const connectDB = require('./utils/db');


app.use(express.json());         // filters json data recieved in requests
app.use("/api/auth", router)     // utilizing the router file

const port = 3000;
connectDB().then(() => {
    app.listen(port, () => { console.log("I am server listening at port: localhost:3000/api/auth/") })
})




// In very beginnings or after cloning the project donot git init or e.t.c in server just npm init in server
///Go back to admin panel do npm install in admin panel and git init also in admin panel
//then git add server then git commit and push