const express=require("express")

require("dotenv").config()

const {BookingModel}=require("../models/booking.model")
const {FlightModel}=require("../models/flight.model")
const { UserModel } = require("../models/user.model")

const BookingRouter=express.Router()

BookingRouter.get("/dashboard",async(req,res)=>{
    try{       
        const bookings=await BookingModel.find().populate("user flight")
        res.status(200).send({bookings})
    }
    catch(err){
        return res.status(404).send({error:"failed to fetch bookings",message:err.message})
    }
})

BookingRouter.post("/booking",async(req,res)=>{

    try{       
        const {userId,flightId}=req.body

        const user=await UserModel.findById(userId)
        const flight=await FlightModel.findById(flightId)

        if(!user || !flight){
            return res.status(404).send({error:"user or flight not found",message:err.message})
        }

        const booking=new BookingModel({user:userId,flight:flightId})
        await booking.save()

        res.status(201).send({message:"flight booked successfully"})
    }
    catch(err){
        return res.status(404).send({error:"failed to book flights",message:err.message})
    }
})
module.exports={BookingRouter}