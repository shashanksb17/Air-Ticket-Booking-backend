const mongoose=require("mongoose")

const BookingSchema=mongoose.Schema({      
    user : { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
	flight : { type: mongoose.Schema.Types.ObjectId, ref: 'Flight' }   
},{
    versionKey:false
})

const BookingModel=mongoose.model("Booking",BookingSchema)

module.exports={BookingModel}