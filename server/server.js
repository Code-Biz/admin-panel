const express = require('express');
const app = express();
const auth_routes = require('./router/auth-routes');
const form_routes = require('./router/form-routes');
const services_routes = require('./router/services-routes');
const admin_router = require('./router/admin-router');;
const connectDB = require('./utils/db');
const errorMiddleware = require('./middleware/error-middleware');
const cors = require('cors');

const corsOptions = {
    //The below origin means that the request recived to the port:3000 (designated to backend) server will be coming/rcvd from the port: localhost:8000 (desgnated to front end in vite.config.js ) and vice versa fro response from backend to frontend.
    origin: "http://localhost:8000",
    methods: "GET, POST, PUT, DELETE,  PATCH, HEAD",
    credentials: true,
};

app.use(cors(corsOptions))
app.use(express.json());         // filters json data recieved in requests
app.use("/api/auth", auth_routes);    // utilizing the router file
app.use("/api/forms", form_routes);
app.use("/api/services", services_routes);  // api/services/all
app.use("/api/admin", admin_router);  // api/services/all

app.use(errorMiddleware);

const port = 3000;
connectDB().then(() => {
    app.listen(port, () => { console.log("I am server listening at port: localhost:3000/api/auth/") })
})




// In very beginnings or after cloning the project donot git init or e.t.c in server just npm init in server
///Go back to admin panel do npm install in admin panel and git init also in admin panel
//then git add server then git commit and push