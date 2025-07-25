

// const express = require("express");
// const router = express.Router();
// const Order = require("../models/Order");
// const authenticateToken = require("../middleware/auth");


// router.post("/create", authenticateToken, async (req, res) => {
//   try {
//     const { items, shippingAddress } = req.body;
//     const userId = req.user.userId;

//     console.log("Items received:", items);  // Debug: Log the items to check their structure

//     // Calculate total amount
//     const totalAmount = items.reduce((total, item) => {
//       if (!item.productId || !item.productId.price || !item.quantity) {
//         console.error("Missing price or quantity for item:", item);
//         return total;  // Skip this item if there's an issue
//       }
      
//       console.log("Item details:", item.productId.name, "Price:", item.productId.price, "Quantity:", item.quantity);  // Debug

//       return total + (item.productId.price * item.quantity);
//     }, 0);

//     console.log("Total amount calculated:", totalAmount);  // Debug: Log the calculated total amount

//     const newOrder = new Order({
//       userId,
//       items,
//       totalAmount,
//       shippingAddress,
//       status: 'Pending',
//     });

//     const savedOrder = await newOrder.save();
//     res.json({ order: savedOrder });
//   } catch (error) {
//     console.error("❌ Error creating order:", error);
//     res.status(500).json({ message: "Error creating order" });
//   }
// });


// router.get("/admin/orders", async (req, res) => {
//   console.log("Fetching orders for admin...");
//   try {
//     const orders = await Order.find()
//       .populate('userId') // Populate the userId field with user data
//       .populate('items.productId'); // Populate the productId in the items array

//     if (!orders || orders.length === 0) {
//       return res.status(404).json({ message: "No orders found" });
//     }

//     res.json({ orders });
//   } catch (error) {
//     console.error("❌ Error fetching orders:", error);
//     res.status(500).json({ message: "Error fetching orders" });
//   }
// });
// // Example Express route for deleting an order
// router.delete('/admin/orders/:orderId', async (req, res) => {
//   const { orderId } = req.params;
//   try {
//     const order = await Order.findByIdAndDelete(orderId);
//     if (!order) {
//       return res.status(404).json({ error: "Order not found" });
//     }
//     res.status(200).json({ message: "Order removed successfully" });
//   } catch (error) {
//     res.status(500).json({ error: "Failed to remove order" });
//   }
// });

// // Update order status by admin
// router.put('/admin/orders/:orderId/status', async (req, res) => {
//   const { orderId } = req.params;
//   const { status } = req.body;

//   try {
//     const order = await Order.findByIdAndUpdate(
//       orderId,
//       { status },
//       { new: true }
//     );
//     if (!order) {
//       return res.status(404).json({ error: "Order not found" });
//     }
//     res.status(200).json({ message: "Order status updated", order });
//   } catch (error) {
//     console.error("Error updating order status:", error);
//     res.status(500).json({ error: "Failed to update order status" });
//   }
// });


// // Route to get order history
// router.get("/history", authenticateToken, async (req, res) => {
//   try {
//     const userId = req.user.userId;

//     const orders = await Order.find({ userId })
//       .populate({
//         path: 'items.productId',
//         select: 'name price image description',
//       });

//     if (!orders || orders.length === 0) {
//       return res.status(404).json({ message: "No orders found" });
//     }

//     // Ensure image URL is complete
//     const ordersWithFullImageURL = orders.map(order => ({
//       ...order.toObject(),
//       items: order.items.map(item => ({
//         ...item.toObject(),
//         productId: item.productId ? {
//           ...item.productId.toObject(),
//           image: item.productId.image ? `http://localhost:5000${item.productId.image}` : null,
//         } : null,
//       })),
//     }));

//     res.json({ orders: ordersWithFullImageURL });
//   } catch (error) {
//     console.error("❌ Error fetching orders:", error);
//     res.status(500).json({ message: "Error fetching orders" });
//   }
// });



// module.exports = router;



const express = require("express");
const router = express.Router();
const Order = require("../models/Order");
const authenticateToken = require("../middleware/auth");
const nodemailer = require("nodemailer");

// ✅ Create Nodemailer Transporter
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "kingamaan14@gmail.com",  // Store in .env
    pass: "yhkx jybh ezri gciy",  // Store in .env
  },
});

// ✅ Function to Send Email
const sendCompletionEmail = (order, customerEmail, customerName) => {
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: customerEmail,
    subject: `Order #${order._id} Marked as Complete`,
    text: `Hello ${customerName},\n\nYour order with ID ${order._id} has been successfully Delivered To Your Address.\n\nThank you for shopping with us!\n\nBest Regards,\nGrocry Store Team`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("❌ Error sending email:", error);
    } else {
      console.log("📧 Email sent:", info.response);
    }
  });
};

// 📌 Route to Create Order
router.post("/create", authenticateToken, async (req, res) => {
  try {
    const { items, shippingAddress } = req.body;
    const userId = req.user.userId;

    const totalAmount = items.reduce((total, item) => {
      if (!item.productId || !item.productId.price || !item.quantity) {
        console.error("Missing price or quantity for item:", item);
        return total;
      }
      return total + (item.productId.price * item.quantity);
    }, 0);

    const newOrder = new Order({
      userId,
      items,
      totalAmount,
      shippingAddress,
      status: 'Pending',
    });

    const savedOrder = await newOrder.save();
    res.json({ order: savedOrder });
  } catch (error) {
    console.error("❌ Error creating order:", error);
    res.status(500).json({ message: "Error creating order" });
  }
});

// 📌 Route to Get All Orders (Admin)
router.get("/admin/orders", async (req, res) => {
  try {
    const orders = await Order.find()
      .populate('userId') // Populate user details
      .populate('items.productId'); // Populate product details

    if (!orders || orders.length === 0) {
      return res.status(404).json({ message: "No orders found" });
    }

    res.json({ orders });
  } catch (error) {
    console.error("❌ Error fetching orders:", error);
    res.status(500).json({ message: "Error fetching orders" });
  }
});

// 📌 Route to Delete Order (Admin)
router.delete('/admin/orders/:orderId', async (req, res) => {
  const { orderId } = req.params;
  try {
    const order = await Order.findByIdAndDelete(orderId);
    if (!order) {
      return res.status(404).json({ error: "Order not found" });
    }
    res.status(200).json({ message: "Order removed successfully" });
  } catch (error) {
    console.error("❌ Error removing order:", error);
    res.status(500).json({ error: "Failed to remove order" });
  }
});

// 📌 Route to Update Order Status and Send Email
router.put('/admin/orders/:orderId/status', async (req, res) => {
  const { orderId } = req.params;
  const { status } = req.body;

  try {
    const order = await Order.findById(orderId).populate('userId');
    if (!order) {
      return res.status(404).json({ error: "Order not found" });
    }

    order.status = status;
    await order.save();

    // ✅ Send Email if status is 'Complete'
    if (status === "Complete" && order.userId && order.userId.email) {
      sendCompletionEmail(order, order.userId.email, order.userId.name);
    }

    res.status(200).json({ message: "Order status updated", order });
  } catch (error) {
    console.error("❌ Error updating order status:", error);
    res.status(500).json({ error: "Failed to update order status" });
  }
});

// 📌 Route to Get User's Order History
router.get("/history", authenticateToken, async (req, res) => {
  try {
    const userId = req.user.userId;

    const orders = await Order.find({ userId })
      .populate({
        path: 'items.productId',
        select: 'name price image description',
      });

    if (!orders || orders.length === 0) {
      return res.status(404).json({ message: "No orders found" });
    }

    // Attach full image URL
    const ordersWithFullImageURL = orders.map(order => ({
      ...order.toObject(),
      items: order.items.map(item => ({
        ...item.toObject(),
        productId: item.productId ? {
          ...item.productId.toObject(),
          image: item.productId.image ? `http://localhost:5000${item.productId.image}` : null,
        } : null,
      })),
    }));

    res.json({ orders: ordersWithFullImageURL });
  } catch (error) {
    console.error("❌ Error fetching order history:", error);
    res.status(500).json({ message: "Error fetching order history" });
  }
});

module.exports = router;
