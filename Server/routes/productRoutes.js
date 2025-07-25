// const express = require("express");
// const Product = require("../models/Product");
// const router = express.Router();

// // Create a new product
// router.post("/add", async (req, res) => {
//   try {
//     const newProduct = new Product(req.body);
//     await newProduct.save();
//     res.status(201).json({ message: "Product added successfully" });
//   } catch (error) {
//     res.status(500).json({ message: "Error adding product", error });
//   }
// });

// // Get all products
// router.get("/all", async (req, res) => {
//   try {
//     const products = await Product.find();
//     res.json(products);
//   } catch (error) {
//     res.status(500).json({ message: "Error fetching products", error });
//   }
// });

// // Update a product
// router.put("/update/:id", async (req, res) => {
//   try {
//     await Product.findByIdAndUpdate(req.params.id, req.body);
//     res.json({ message: "Product updated successfully" });
//   } catch (error) {
//     res.status(500).json({ message: "Error updating product", error });
//   }
// });

// // Delete a product
// router.delete("/delete/:id", async (req, res) => {
//   try {
//     await Product.findByIdAndDelete(req.params.id);
//     res.json({ message: "Product deleted successfully" });
//   } catch (error) {
//     res.status(500).json({ message: "Error deleting product", error });
//   }
// });

// module.exports = router;

const express = require("express");
const Product = require("../models/Product");
const upload = require("../middleware/upload");
const router = express.Router();
const path = require("path");

// Serve uploaded images statically
router.use("/uploads", express.static(path.join(__dirname, "../uploads")));

// Create a new product with image upload
router.post("/add", upload.single("image"), async (req, res) => {
  try {
    const imagePath = req.file ? `/api/products/uploads/${req.file.filename}` : "";
    const newProduct = new Product({ ...req.body, image: imagePath });
    await newProduct.save();
    res.status(201).json({ message: "Product added successfully", product: newProduct });
  } catch (error) {
    res.status(500).json({ message: "Error adding product", error });
  }
});

// Get all products
router.get("/all", async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: "Error fetching products", error });
  }
});

// Update product with image
router.put("/update/:id", upload.single("image"), async (req, res) => {
  try {
    let updatedData = { ...req.body };
    if (req.file) updatedData.image = `/api/products/uploads/${req.file.filename}`;
    await Product.findByIdAndUpdate(req.params.id, updatedData);
    res.json({ message: "Product updated successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error updating product", error });
  }
});

// Delete a product
router.delete("/delete/:id", async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);
    res.json({ message: "Product deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting product", error });
  }
});

module.exports = router;


