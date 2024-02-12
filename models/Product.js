const mongoose = require('mongoose')

const ProductSchema = mongoose.Schema({
    name:{
        type: String,
    },
    description:{
        type:String
    },
    price:{
        type:Number
    },
    quantity:{
        type:Number
    },
    category:{
        type:String
    }
})

module.exports = mongoose.model('Product', ProductSchema);