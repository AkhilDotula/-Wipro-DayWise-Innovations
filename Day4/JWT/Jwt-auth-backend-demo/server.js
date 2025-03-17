//initializing the variables

require("dotenv").config();//it helps in managing sensitive configuration(API keys, database URLS via .env file)

const express = require("express"); //minimal and flexible framework for NodeJs Ideally used for creating APIs and handling HTTP Requests

const cors = require("cors"); // CORS allow the frontend (react) to communicate with the backend without getting blocked API request as they are different origins(by default)

const jwt = require("jsonwebtoken");// used to generate and verify jsonweb tokens for user authentication and authorization

const bodyParser = require("body-parser");// it helps express to process incoming requests bodies(Json, URL-encoded data)

const app = express();
app.use(cors());
app.use(bodyParser.json());

const users = [{username:"admin", password:"Login@123" }];
const SECRET_KEY = process.env.JWT_SECRET || "mysecretKey";

app.post("/login",(req, res) => {
    const{username,password} = req.body;
    const user = users.find((u) => u.username == username && u.password == password);
    if(user){
        const token = jwt.sign({username}, SECRET_KEY, {expiresIn:"1h"});
        res.json({token});
    }else{
        res.status(401).json({message:"Invalid Credentials"});
    }
});

//Protected route

app.get("/dashboard", (req, res)=>{
    const token = req.headers.authorization?.split(" ")[1];
    if(!token) return res.status(403).json({message:"Token Required"});

    try{
        const decoded = jwt.verify(token, SECRET_KEY);
        res.json({message: `Welcome, ${decoded.username}` });
    }
    catch(err){
    res.status(403).json({message: "Invalid Token"});
    }
});

app.listen(5000,()=> console.log("Server running on port 5000"));