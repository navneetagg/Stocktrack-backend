const asynchandler = require('express-async-handler');
const Product = require('../models/productmodels')

const createProduct = asynchandler(async(req,res)=>{
    const {name,quantity,price,description} =req.body;
    if(!name||!quantity||!price){
        res.status(400);
        throw new Error("please provide name quantity and price");
    }
    const product = await Product.create({
        name,quantity,price,description
    })
    if(product){
        res.status(200).json(product);
    }
    
    }
)
const getProducts = asynchandler(async(req,res)=>{
 const products = await Product.find({});
 if(products){
    res.status(200).json(products);
 }

})
const getproductbyID = asynchandler(async(req,res)=>{
const product = await Product.findById(req.params.id);
if(product){
    res.status(200).json(product);
}
else{
    res.status(404);
    throw new Error("Product Not found");
}
})
const updateproductbyID = asynchandler(async(req,res)=>{
    const {name,quantity,price,description}= req.body;
    const product = await Product.findById(req.params.id);
    if(product){
        product.name = name||product.name;
        product.quantity = quantity||product.quantity;
        product.price = price||product.price;
        product.description = description||product.description;
        const updatedproduct = await product.save();
        res.status(200).json(updatedproduct);
    }
    else{
        res.status(404);
        throw new Error("Product not found");
    }
    
})
const deleteproductbyID = asynchandler(async(req,res)=>{
    const product = await Product.findById(req.params.id);
    if(product){
       await product.deleteOne();
       res.status(201).json({
        "message":"user deleted successfuly"
       })
       
    }
    else{
        res.status(404)
        throw new Error("User not found with given id");
    }
})
module.exports={createProduct,getProducts,getproductbyID,updateproductbyID,deleteproductbyID};
