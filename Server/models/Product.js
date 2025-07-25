// const mongoose = require("mongoose");

// const ProductSchema = new mongoose.Schema({
//     name: { type: String, required: true },
//     price: { type: Number, required: true },
//     description: { type: String },
//     image: { type: String, required: true },
//     category: { type: String, required: true },
//     stock: { type: Number, default: 0 },
//   });

// module.exports = mongoose.model("Product", ProductSchema);


// models/Product.js
const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type: String },
  image: { type: String, required: true },
  category: { type: mongoose.Schema.Types.ObjectId, ref: "Category", required: true },
  stock: { type: Number, default: 0 },
});

module.exports = mongoose.model("Product", ProductSchema);
