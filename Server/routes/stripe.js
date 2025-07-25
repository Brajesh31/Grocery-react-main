// routes/stripeRoutes.js
const express = require("express");
const Stripe = require("stripe");
const router = express.Router();

// Initialize Stripe with your secret key
//const stripe = new Stripe("sk_test_51Qrsb5CS7MAi8hTOqaBq9LvBp1q447QyxiM0RktB8sjIluzCRie3dmy2MRk1sApTga2QymukrTIryfaSrhpsP7r100D8ovcwc2");

router.post("/create-payment-intent", async (req, res) => {
  try {
    const { amount } = req.body;

    if (!amount) {
      return res.status(400).json({ message: "Amount is required" });
    }

    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: "usd",
      payment_method_types: ["card"],
    });

    res.status(200).json({ clientSecret: paymentIntent.client_secret });
  } catch (error) {
    console.error("Stripe error:", error);
    res.status(500).json({ message: "Payment failed", error: error.message });
  }
});

module.exports = router;
