const express= require('express');
const app= express();
const router=require('./router/auth-route');

app.use("/api/auth", router)

const port=3000;
app.listen(port, ()=>console.log("I am server listening at port: " + port));
