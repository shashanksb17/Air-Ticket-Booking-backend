const jwt=require("jsonwebtoken")
const{userModel}=require("../models/user.model")

require("dotenv").config()

const authenticate=(req,res,next)=>{
    const token=req.headers.authentication?.split(" ")[1]
    if(!token){
        res.send("Please login first")
    }
    jwt.verify(token,"secret",(err,decoded)=>{
        if(err){
            res.send("plz login")
        }
        else{
            next()
        }
    })
}

module.exports={authenticate}