const mongoose = require('mongoose');
const productSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,"Please enter a product name"],
        trim:"true"

    },
    quantity:{
        type:Number,
        required:true,
        default:true
    },
    price:{
        type:Number,
        required:true,
        default:true
    }
},{
    timestamps:true
});
const Product = mongoose.model('Product',productSchema);
module.exports = Product;