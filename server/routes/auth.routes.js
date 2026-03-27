const express = require("express");
const router = express.Router();
const { adminProtect } = require("../middlewares/adminProtect");
const { adminLogin, signoutAdmin } = require("../controllers/auth.controller");


// LOGIN (POST /admin) - public
router.post("/", adminLogin);

// DASHBOARD (GET /admin/dashboard) - protected
router.get("/dashboard", adminProtect, (req, res) => {
  res.json({ message: `Welcome Admin 🔥`, email: req.admin.email });
});

// LOGOUT (POST /admin/signout) - protected
router.post("/signout", adminProtect, signoutAdmin);
module.exports = router;