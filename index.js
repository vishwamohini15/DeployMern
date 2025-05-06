const cors=require('cors')
require('dotenv').config()

const express=require('express');
const { type } = require('os');
const server=express()
const path=require('path')
const morgan=require('morgan')
const mongoose = require('mongoose');
const { Schema } = mongoose;
const productRouter=require('./routs/product')
const userRouter=require('./routs/user')

console.log('env', process.env.DB_password);

//db connection

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect(process.env.MONGO_URL);
  console.log('database connected');
  

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}


//bodyparse
server.use(cors())
server.use(express.json())
server.use(express.urlencoded())

server.use(morgan('default'))
server.use(express.static(path.resolve(__dirname,process.env.PUBLIC_DIR)))
server.use('/products', productRouter.router)
server.use('/users', userRouter.router)
server.use((req,res)=>{
  res.sendFile(path.resolve(__dirname,'build','index.html'))
})



server.listen(process.env.PORT, ()=>{
     console.log("server started");
     
})

