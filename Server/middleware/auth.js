// router.post("/login", async (req, res) => {
//     try {
//       const { email, password } = req.body;
  
//       const user = await User.findOne({ email });
//       if (!user) return res.status(400).json({ message: "User not found" });
  
//       const isMatch = await bcrypt.compare(password, user.password);
//       if (!isMatch) return res.status(400).json({ message: "Invalid credentials" });
  
//       const token = jwt.sign(
//         { userId: user._id, role: user.role },
//         process.env.JWT_SECRET || "your_jwt_secret",
//         { expiresIn: "1h" }
//       );
  
//       res.status(200).json({ token, role: user.role, user: { name: user.name } }); // Include user name
//     } catch (error) {
//       console.error("❌ Login error:", error);
//       res.status(500).json({ message: "Error logging in user" });
//     }
//   });
  

// const jwt = require("jsonwebtoken");

// const Skey = "amaanglamourheroboyissomuchgaandu"; // Secret Key

// const authenticateToken = (req, res, next) => {
//     const token = req.headers["authorization"]?.split(" ")[1];

//     console.log("Token received in backend:", token); // Debugging

//     if (!token) {
//         console.log("No token provided");
//         return res.status(403).json({ message: "Access denied. No token provided." });
//     }

//     jwt.verify(token, Skey, (err, user) => {
//         if (err) {
//             console.log("Invalid token:", err.message);
//             return res.status(403).json({ message: "Invalid token" });
//         }
//         req.user = user;
//         next();
//     });
// };

// module.exports = authenticateToken; 


// const jwt = require("jsonwebtoken");

// const Skey = "amaanglamourheroboyissomuchgaandu"; // Secret Key

// const authenticateToken = (req, res, next) => {
//     const authHeader = req.headers["authorization"];
//     const token = authHeader && authHeader.split(" ")[1];

//     console.log("Token received in backend:", token); // Debugging

//     if (!token) {
//         console.log("❌ No token provided");
//         return res.status(403).json({ message: "Access denied. No token provided." });
//     }

//     jwt.verify(token, Skey, (err, decoded) => {
//         if (err) {
//             console.log("❌ Invalid token:", err.message);
//             return res.status(403).json({ message: "Invalid token" });
//         }
//         req.user = decoded; // ✅ Store the decoded user data
//         console.log("✅ Token verified successfully:", req.user);
//         next();
//     });
// };

// module.exports = authenticateToken;


const jwt = require("jsonwebtoken");
const Skey = "amaanglamourheroboyissomuchgaandu";

const authenticateToken = (req, res, next) => {
    const authHeader = req.header("Authorization"); // ✅ Check Authorization header
    if (!authHeader) return res.status(401).json({ error: "Access denied. No token provided." });

    const token = authHeader.split(" ")[1]; // ✅ Extract token
    if (!token) return res.status(401).json({ error: "Invalid token format." });

    try {
        const decoded = jwt.verify(token, Skey); // ✅ Verify token
        console.log("✅ Token decoded:", decoded); // 🔥 Debugging log

        if (!decoded.userId) {
            return res.status(401).json({ error: "Unauthorized. User ID missing in token." });
        }

        req.user = decoded; // ✅ Attach user details to `req.user`
        next();
    } catch (error) {
        console.error("❌ Token verification failed:", error);
        res.status(403).json({ error: "Invalid or expired token." });
    }
};

module.exports = authenticateToken;

