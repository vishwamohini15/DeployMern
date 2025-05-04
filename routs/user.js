const express=require('express');
const userController=require('../controller/User')
const router=express.Router();


router
.post('/', userController.createuser)
.get('/', userController.getAlluser)
.get('/:id', userController.getuser)
.put('/:id', userController.replaceuser)
.patch('/:id', userController.updateuser)
  .delete('/:id', userController.deleteuser)

  exports.router=router