const express = require('express');
const app = express();
const auth_routes = require('./router/auth-routes');
const form_routes = require('./router/form-routes');
const services_routes = require('./router/services-routes');
const connectDB = require('./utils/db');
const errorMiddleware = require('./middleware/error-middleware');
const cors = require('cors');

const corsOptions = {
    origin: "http://localhost:8000",
    methods: "GET, POST, PUT, DELETE,  PATCH, HEAD",
    credentials: true,
};

app.use(cors(corsOptions))
app.use(express.json());         // filters json data recieved in requests
app.use("/api/auth", auth_routes);    // utilizing the router file
app.use("/api/forms", form_routes);
app.use("/api/services", services_routes);  // api/services/all

app.use(errorMiddleware);

const port = 3000;
connectDB().then(() => {
    app.listen(port, () => { console.log("I am server listening at port: localhost:3000/api/auth/") })
})




// In very beginnings or after cloning the project donot git init or e.t.c in server just npm init in server
///Go back to admin panel do npm install in admin panel and git init also in admin panel
//then git add server then git commit and push