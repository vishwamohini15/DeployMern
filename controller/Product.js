const fs=require('fs');

const { json } = require('stream/consumers');
const model=require('../model/product');
const { default: mongoose } = require('mongoose');
const product=model.product
const ejs=require('ejs')
const path=require('path')

//view
exports.getAllproductsSSR=async(req, res)=>{
    const Produtt=await product.find()
    ejs.renderFile(path.resolve(__dirname,'../pages/index.ejs'), {products:Produtt}, function(err, str){
        res.send(str)
    });
    
   }

   exports.getAddForm=async(req, res)=>{
    const Produtt=await product.find()
    ejs.renderFile(path.resolve(__dirname,'../pages/add.ejs'), function(err, str){
        res.send(str)
    });
    
   }


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