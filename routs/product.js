const express=require('express');
const productController=require('../controller/Product')
const router=express.Router();


router
.post('/', productController.createproduct)
.get('/ssr', productController.getAllproductsSSR)
.get('/add', productController.getAddForm)


.get('/', productController.getAllproducts)
.get('/:id', productController.getproduct)
.put('/:id', productController.replaceproduct)
.patch('/:id', productController.updateproduct)
  .delete('/:id', productController.deleteproducts)


  exports.router=router