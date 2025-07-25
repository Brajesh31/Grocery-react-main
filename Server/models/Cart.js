 const mongoose = require("mongoose");



const CartSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  items: [
    {
      productId: { type: mongoose.Schema.Types.ObjectId, ref: "Product", required: true }, // ✅ Make sure it's an ObjectId
      quantity: { type: Number, default: 1 }
    }
  ]
});
const Cart = mongoose.model("Cart", CartSchema);
module.exports = Cart;