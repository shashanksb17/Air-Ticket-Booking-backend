const express=require("express")

require("dotenv").config()

const {FlightModel}=require("../models/flight.model")

const flightRouter=express.Router()

flightRouter.get("/flights",async(req,res)=>{
    try{
        const flights=await FlightModel.find()
        res.status(200).send({flights})
    }
    catch(err){
        return res.status(404).send({error:"failed to fetch flights",message:err.message})
    }
})


flightRouter.get("/flights/:id",async(req,res)=>{
    try{
        const flight=await FlightModel.findById(req.params.id)
        if(!flight){
            return res.status(404).send({error:"flight not found"})
        }
        res.status(200).send({flight})
    }
    catch(err){
        return res.status(404).send({error:"failed to fetch flights",message:err.message})
    }
})

flightRouter.post("/flights",async(req,res)=>{
    try{
        const{airline,flightNo,departure,arrival,departureTime,arrivalTime,seats,price}=req.body
        const flight=new FlightModel({airline,flightNo,departure,arrival,departureTime,arrivalTime,seats,price})
        await flight.save()
        
        res.status(201).send({message:"flight added successfully"})
    }
    catch(err){
        return res.status(404).send({error:"failed to add flight",message:err.message})
    }
})

flightRouter.patch("/flights/:id",async(req,res)=>{
    let id=req.params.id
    try{
        await FlightModel.findByIdAndUpdate({"_id":id},req.body)
        res.send({message:"flight updated successfully"})
    }
    catch(err){
        return res.status(404).send({error:"failed to update flight",message:err.message})
    }
})

flightRouter.delete("/flights/:id",async(req,res)=>{
    let id=req.params.id
    try{
        await FlightModel.findByIdAndDelete({"_id":id})     
        res.status(202).send({message:"flight deleted successfully"})
    }
    catch(err){
        return res.status(404).send({error:"failed to delete flight",message:err.message})
    }
})

module.exports={flightRouter}