require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const { FRONTEND_URL } = require("./utils/config");
const { adminProtect } = require("./middlewares/adminProtect"); // ⚠️ import middleware

const app = express();

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URL);
mongoose.connection.once("open", () => console.log("✅ DB connected"));

// Middlewares
app.use(cors({ origin: FRONTEND_URL, credentials: true }));
app.use(express.json());
app.use(cookieParser());

// -----------------------------
// Routes
// -----------------------------

// Admin login route (public)
// app.use("/admin", require("./routes/auth.routes")); // login & signout routes inside this router

// Protected dashboard route
// app.get("/admin/dashboard", adminProtect, (req, res) => {
//   res.send(`Welcome Admin 🔥: ${req.admin.email}`);
// });


app.use("/admin", require("./routes/auth.routes.js"))

// Test route
app.get("/", (req, res) => {
  res.status(200).json({ message: `Portfolio API Running in ${process.env.NODE_ENV} mode` });
});

// Start server
app.listen(process.env.PORT, () => {
  console.log(`🚀 Server running on ${process.env.PORT}`);
  console.log(`mode : ${process.env.NODE_ENV}`);
});

module.exports = app;