// routes/admin.js

const express = require("express");
const { adminLogin } = require("../controllers/admin.controller");
const { adminProtect } = require("../middlewares/adminProtect");
const router = express.Router();



// login
router.post("/login", adminLogin);

// protected route
router.get("/dashboard", adminProtect, (req, res) => {
  res.json({ message: "Welcome Admin 🔥" });
});

module.exports = router;