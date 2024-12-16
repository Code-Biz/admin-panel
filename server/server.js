const express= require('express');
const app= express();
const router=require('./router/auth-route');
const connectDB = require('./utils/db');


app.use(express.json());         // filters json data recieved in requests
app.use("/api/auth", router)     // utilizing the router file

const port=3000;
connectDB().then(() => {
    app.listen(port, ()=>{console.log("I am server listening at port: " + port)})
})