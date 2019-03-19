const mongoose = require('mongoose')
const Schema = mongoose.Schema


const SkiAreaSchema = new Schema
({

    name:String,
    openHours:String,
    easyRoute:Number,
    mediumRoute:Number,
    hardRoute:Number,
    freeRide:Number

})

const AreasSchema = new Schema
({

    areas:[SkiAreaSchema],
    country:String

})

const Area = mongoose.model('area',AreasSchema)

module.exports = Area,