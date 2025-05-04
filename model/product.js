//schema
const mongoose = require('mongoose');
const { Schema } = mongoose;
const productSchema = new Schema({
     title: {type:String, require:true, unique:true}, 
     description:String,
     category: {type:String, require:true},
     price: {type: Number, min:[0, 'wronge price'], require:true},
     discountPercentage:{type: Number, min:[0, 'wronge min discount'], max:[5, 'wronge max discount']},
     rating:{type: Number, min:[0, 'wronge min rating'], max:[5, 'wronge max rating'], default:0},
     thumbnail:String
   });
   exports.product = mongoose.model('product', productSchema);
