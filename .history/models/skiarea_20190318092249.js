const mongoose = require('mongoose')
const Schema = mongoose.Schema


const SkiAreaSchema = new Schema
({
    country:String,
    name:String,
    openHours:String,
    easyRoute:Number,
    mediumRoute:Number,
    hardRoute:Number,
    freeRide:Number

})



const SkiArea = mongoose.model('area',SkiAreaSchema)

module.exports = Area