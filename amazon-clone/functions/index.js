const { onRequest } = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");

const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const stripe = require("stripe")(process.env.STRIPE_KEY);

const app = express();

app.use(cors({ origin: true }));
app.use(express.json());

/* =========================
   TEST ROUTE
========================= */
app.get("/", (req, res) => {
  res.status(200).json({
    message: "API working successfully 🚀",
  });
});

/* =========================
   PAYMENT ROUTE
========================= */
app.post("/payments/create", async (req, res) => {
  try {
    const total = req.query.total;

    const paymentIntent = await stripe.paymentIntents.create({
      amount: total,
      currency: "usd",
    });

    res.status(201).send({
      clientSecret: paymentIntent.client_secret,
    });
  } catch (error) {
    logger.error(error);
    res.status(500).send(error.message);
  }
});

/* =========================
   EXPORT
========================= */
exports.api = onRequest(app);