const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");
const { Schema } = mongoose;

const ProductSchema = new Schema({
  productTitle: { 
    type: String, 
    required: true 
  },
  ref:{
    type: String,
    required: true,
    unique: true
  },
  price: { 
    type: Number, 
    required: true 
  },
  weight: { 
    type: Number, 
    required: true 
  },
  category:{
    type:String,
    required: true
  },
  stock:{
    type: Number,
    required: true
  },
  date:{
    type: Date
  },
  sellDate:{
    type: Date
  }
});


ProductSchema.plug in(uniqueValidator,{
  message: "{PATH} should be unique"
});


module.exports = mongoose.model("Product", ProductSchema);