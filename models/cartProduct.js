const mongoose = require('mongoose')

const productSchema = mongoose.Schema({
    productId :"",

},{
    timestamps : true
})


const productModel = mongoose.model("addToCart",productSchema)

module.exports = productModel