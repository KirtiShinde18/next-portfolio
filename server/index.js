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
app.use(express.json()); //👈 body parser middleware
app.use(cookieParser()); 

// -----------------------------
// Routes
// -----------------------------

// login & signout routes inside this router
// existing
app.use("/api/auth", require("./routes/auth.routes.js"))
app.use("/api/admin", require("./routes/admin.routes.js"))

// Test route
app.get("/", (req, res) => {
  res.status(200).json({ message: `Portfolio API Running in ${process.env.NODE_ENV} mode` });
});

// test 
app.get("/api/admin/profile", (req, res) => {
  res.json({ message: "Profile route works!" });
});

// Start server
app.listen(process.env.PORT, () => {
  console.log(`🚀 Server running on ${process.env.PORT}`);
  console.log(`mode : ${process.env.NODE_ENV}`);
});

module.exports = app;