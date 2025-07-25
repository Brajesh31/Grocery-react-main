


const express = require("express");
const router = express.Router();
const Cart = require("../models/Cart");
const Product = require("../models/Product");
const authenticateToken = require("../middleware/auth"); // ✅ Import auth middleware


router.post("/add", authenticateToken, async (req, res) => {
    const { productId, quantity } = req.body;

    try {
        console.log("Received request to add product:", productId, "Quantity:", quantity, "User:", req.user);

        // ✅ Fetch product from DB
        const product = await Product.findById(productId);
        if (!product) {
            return res.status(404).json({ message: "Product not found" });
        }

        // ✅ Get User's Cart
        let cart = await Cart.findOne({ userId: req.user.userId });
        if (!cart) {
            cart = new Cart({ userId: req.user.userId, items: [] });
        }

        // ✅ Check if Product Exists in Cart
        const productIndex = cart.items.findIndex(item => item.productId.toString() === productId);
        if (productIndex !== -1) {
            cart.items[productIndex].quantity += quantity;
        } else {
            cart.items.push({
                productId,  // ✅ Only store productId, don't manually add name, image, price
                quantity,
            });
        }

        // ✅ Save Cart
        await cart.save();

        // ✅ Return Updated Cart
        const updatedCart = await Cart.findOne({ userId: req.user.userId })
            .populate({
                path: "items.productId",
                select: "name price image description category stock",  // ✅ Fetch product details
            });

        res.status(200).json({ message: "Product added to cart", cart: updatedCart });
    } catch (error) {
        console.error("❌ Error adding to cart:", error);
        res.status(500).json({ message: "Internal Server Error", error: error.message });
    }
});



router.get("/cartshow", authenticateToken, async (req, res) => {
  try {
    const userId = req.user.userId;

    const cart = await Cart.findOne({ userId }).populate({
      path: "items.productId",
      select: "name price image description category stock",
    });

    if (!cart) {
      return res.status(200).json({ items: [] });
    }

    // ✅ Image Path ko Full URL me Convert Karein
    const itemsWithFullImageURL = cart.items.map(item => ({
      ...item.toObject(),
      productId: {
        ...item.productId.toObject(),
        image: `http://localhost:5000${item.productId.image}`, // 🔥 Full URL
      }
    }));

    res.status(200).json({ items: itemsWithFullImageURL });

  } catch (error) {
    console.error("❌ Error fetching cart:", error);
    res.status(500).json({ error: error.message });
  }
});



// Backend route: DELETE
router.delete("/cart/delete/:id", authenticateToken, async (req, res) => {
  try {
    const productId = req.params.id;  // Get the productId from params
    const userId = req.user.userId;  // Get userId from the token

    console.log("Product ID to delete:", productId);  // Log product ID
    console.log("User ID:", userId);  // Log user ID

    const cart = await Cart.findOne({ userId });
    if (!cart) return res.status(404).json({ message: "Cart not found" });

    // Log cart details
    console.log("Cart found:", cart);

    // Remove the item from the cart based on the productId
    cart.items = cart.items.filter((item) => item.productId.toString() !== productId);
    await cart.save();

    res.status(200).json({ message: "Item removed", cart });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});




// ✅ Update Quantity
router.patch("/:id", authenticateToken, async (req, res) => {
  try {
      const userId = req.user.id;
      const productId = req.params.id;
      const { quantity } = req.body;

      const cart = await Cart.findOne({ userId });
      if (!cart) return res.status(404).json({ message: "Cart not found" });

      const item = cart.items.find((item) => item.productId.toString() === productId);
      if (item) {
          item.quantity = quantity;
      }

      await cart.save();
      res.status(200).json({ message: "Quantity updated", cart });
  } catch (error) {
      res.status(500).json({ error: error.message });
  }
});



module.exports = router;
