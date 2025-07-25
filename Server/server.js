
const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const cors = require('cors');
const dotenv = require('dotenv');
const User = require('./models/User');
const productRoutes = require("./routes/productRoutes");
const cartRoutes = require("./routes/cartRoutes")
const Cart = require('./models/Cart')
const orderRouter = require("./routes/order");
const orderRoutes = require("./routes/orderRoutes");
const stripeRoutes = require("./routes/stripe");
const categoryRoutes = require("./routes/categoryRoutes");
 // Load environment variables
require("dotenv").config();
const nodemailer = require("nodemailer");
const app = express();
const twilio = require("twilio")
const port = process.env.PORT || 5000;
const Skey = "amaanglamourheroboyissomuchgaandu"; // Secret Key

// Middleware
app.use(express.json()); // Parse JSON requests
// app.use(cors({
//   origin: "http://localhost:3000", // Allow frontend requests
//   methods: ["GET", "POST", "PUT", "DELETE"],
//   allowedHeaders: ["Content-Type", "Authorization"],
//   credentials: true,
// })); 

app.use(cors({
  origin: ["http://localhost:3000", "http://localhost:8081"], // Allow requests from both origins
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true,
}));


app.use("/api", cartRoutes); // Add this line to use cart routes

app.use("/api/products", productRoutes); // Product routes
app.use("/api/order", orderRouter);
app.use("/api/orders", orderRoutes)
app.use("/api/order", orderRoutes); 
app.use("/api/stripe", stripeRoutes);
app.use("/api/categories", categoryRoutes);


// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/GROCERY_STORE', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log('✅ MongoDB connected'))
  .catch(err => console.error('❌ MongoDB connection error:', err));

// ===========================
//  🔹 User Authentication 🔹
// ===========================

// 🔹 Register User 






app.post('/api/register', async (req, res) => {
 

  try {
    const { name, email, password, role } = req.body;

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ name, email, password: hashedPassword, role: role || "user" });
    await newUser.save();

    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error("❌ Registration error:", error);
    res.status(500).json({ message: 'Error registering user' });
  }
});

// 🔹 Login User
// app.post('/api/login', async (req, res) => {
//   try {
//     const { email, password } = req.body;

//     const user = await User.findOne({ email });
//     if (!user) return res.status(400).json({ message: 'User not found' });

//     const isMatch = await bcrypt.compare(password, user.password);
//     if (!isMatch) return res.status(400).json({ message: 'Invalid credentials' });

//     const token = jwt.sign(
//       { userId: user._id, role: user.role },
//       process.env.JWT_SECRET || 'your_jwt_secret',
//       { expiresIn: '1h' }
//     );

//     res.status(200).json({ token, role: user.role });
//   } catch (error) {
//     console.error("❌ Login error:", error);
//     res.status(500).json({ message: 'Error logging in user' });
//   }
// }); 





app.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ email });
        if (!user) return res.status(400).json({ message: "User not found" });

        // Check if the password is correct
        const isMatch = user.password ? await bcrypt.compare(password, user.password) : false;
        if (!isMatch) return res.status(400).json({ message: "Invalid credentials" });

        // Generate token
        const token = jwt.sign(
            { userId: user._id, role: user.role }, // ✅ Store user ID & role in token
            Skey, // ✅ Use same secret key
            { expiresIn: "1h" }
        );

        res.status(200).json({ token, role: user.role, user: { name: user.name } });
    } catch (error) {
        console.error("❌ Login error:", error);
        res.status(500).json({ message: "Error logging in user" });
    }
});





// ==========================
//  🔹 User CRUD Operations 🔹
// ==========================

// 🔹 Get All Users
app.get("/api/getUser", async (req, res) => {
  try {
    const users = await User.find({}, "name email");
    res.status(200).json({ message: "Users fetched successfully", data: users });
  } catch (error) {
    console.error("❌ Error fetching users:", error);
    res.status(500).json({ message: "Failed to fetch users" });
  }
});




const transport = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.Email_User,
    pass: process.env.Pass,
  },
});

// 🔹 Add New User
app.post("/api/addUser", async (req, res) => {
  try {
    const mailOptions = {
      from: process.env.Email_User,
      to: req.body.email,
      subject: "Welcome to our system",
      text: `Hello ${req.body.name}, welcome to our platform`,
    };

    try {
      await transport.sendMail(mailOptions);
      console.log("Email sent successfully");
    } catch (error) {
      console.error("Email sending error", error);
    }

    const { name, email } = req.body;
    const newUser = new User({ name, email });
    await newUser.save();
    res.status(201).json({ message: "User added successfully", user: newUser });
  } catch (error) {
    console.error("❌ Error adding user:", error);
    res.status(500).json({ message: "Failed to add user" });
    
  }
});

// router.use((err,req,res,next) => {
//   if(err.name == 'ValidationError'){
//     const firstError  = Object.values(err.errors)[0];
//     return res.status(400).json({status:0,error:firstError})
//   }
//   console.error('Error:',err);
//   res.status(500).json({error:'Internal Serever error'})
// });

// 🔹 Update User
app.put("/api/updateUser/:id", async (req, res) => {
  try {
    const { name, email } = req.body;
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      { name, email },
      { new: true }
    );

    if (!updatedUser) return res.status(404).json({ message: "User not found" });

    res.status(200).json({ message: "User updated successfully", user: updatedUser });
  } catch (error) {
    console.error("❌ Error updating user:", error);
    res.status(500).json({ message: "Failed to update user" });
  }
});

// 🔹 Delete User
app.delete("/api/deleteUser/:id", async (req, res) => {
  try {
    const deletedUser = await User.findByIdAndDelete(req.params.id);
    if (!deletedUser) return res.status(404).json({ message: "User not found" });

    res.status(200).json({ message: "User deleted successfully" });
  } catch (error) {
    console.error("❌ Error deleting user:", error);
    res.status(500).json({ message: "Failed to delete user" });
  }
});



// =======================
//  🔹 Start the Server 🔹
// =======================
app.listen(port, () => {
  console.log(`🚀 Server is running on http://localhost:${port}`);
});


