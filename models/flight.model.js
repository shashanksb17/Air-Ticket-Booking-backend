const mongoose=require("mongoose")

const FlightSchema=mongoose.Schema({      
    airline: {type:String},
    flightNo: {type:String},
    departure: {type:String},
    arrival: {type:String},
    departureTime: {type:Date},
    arrivalTime: {type:Date},
    seats: {type:Number},
    price: {type:Number}
},{
    versionKey:false
})

const FlightModel=mongoose.model("Flight",FlightSchema)

module.exports={FlightModel}