const express=require("express")
const { connection } = require("./config/db")
const {userRouter}=require("./routes/user.route")
const { flightRouter } = require("./routes/flight.route")
const {BookingRouter}= require("./routes/booking.route")
const {authenticate}=require("./middleware/autheticate.middleware")

require("dotenv").config()

app=express()
app.use(express.json())
app.use("/api",userRouter)
app.use("/api",flightRouter)
app.use("/api",BookingRouter)

app.get("/api/",(req,res)=>{
    res.send("HOME PAGE")
})

app.listen(process.env.port,async()=>{
    try{
        await connection
        console.log("connected to the DataBase")

    }
    catch(err){
        console.log("con not connect the DataBase")
        console.log(err)
    }
    console.log(`server is running at port ${process.env.port}`)
})