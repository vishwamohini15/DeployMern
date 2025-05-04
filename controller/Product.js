const fs=require('fs');

const { json } = require('stream/consumers');
const model=require('../model/product');
const { default: mongoose } = require('mongoose');
const product=model.product

exports.createproduct=async(req, res)=>{
    const Product=new product(req.body)

    await Product.save();
    console.log(Product);
    
 res.status(201).json(Product)
 }

exports.getAllproducts=async(req, res)=>{
     const Produtt=await product.find()
     res.json(Produtt)
    }
 
exports.getproduct=async(req, res)=>{
     const id=req.params.id
     const Produtt=await product.findById(id)

     
     res.json(Produtt)
    }
exports.replaceproduct=async(req, res)=>{
     const id=req.params.id
     const doc=await product.findOneAndReplace({_id:id}, req.body, {new:true})
     res.status(201).json(doc)
    }
    exports.updateproduct=async(req, res)=>{
     const id=req.params.id
     const doc=await product.findOneAndUpdate({_id:id}, req.body, {new:true})
    
     res.status(201).json(doc)
    }
    exports.deleteproducts=async(req, res)=>{
        const id=req.params.id
        const doc=await product.findOneAndDelete({_id:id})
   
       
        res.status(201).json(doc)
    }