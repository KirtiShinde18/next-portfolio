const express = require("express");
const router = express.Router();
const { adminProtect } = require("../middlewares/adminProtect");

// ✅ Protected route
router.get("/dashboard", adminProtect, (req, res) => {
  res.json({ message: "Welcome Admin" });
});

module.exports = router;