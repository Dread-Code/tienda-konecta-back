const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");
const { Schema } = mongoose;

const ProductSchema = new Schema({
  name: { 
    type: String, 
    required: true 
  },
  ref:{
    type: String,
    required: true,
    unique: true
  },
  precio: { 
    type: Number, 
    required: true 
  },
  peso: { 
    type: Number, 
    required: true 
  },
  categoria:{
    type:String,
    required: true
  },
  stock:{
    type: Number,
    required: true
  },
  date:{
    type: Date,
    required: true
  },
  sellDate:{
    type: Date,
    required: true
  }
});


ProductSchema.plug in(uniqueValidator,{
  message: "{PATH} should be unique"
});


module.exports = mongoose.model("Product", ProductSchema);