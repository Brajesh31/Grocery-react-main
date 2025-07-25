const express = require("express");
const authMiddleware = require("../middleware/auth");
const User = require("../models/User");

const router = express.Router();


// const transporter = nodemailer createTransporter({
//   host:"smtp.gmail.com",
//   port:465,
//   secure:true,
//   auth:{
//     user:process.env.Emil_USER,
//     pass:process.env.Email_password
//   },
// })

// Get Logged-in User Profile
router.get("/profile", authMiddleware, async (req, res) => {
  try {
    const user = await User.findById(req.user.userId).select("-password");
    if (!user) return res.status(404).json({ message: "User not found" });

    res.status(200).json({ user });
  } catch (error) {
    console.error("❌ Error fetching user profile:", error);
    res.status(500).json({ message: "Failed to fetch user profile" });
  }
});




module.exports = router;