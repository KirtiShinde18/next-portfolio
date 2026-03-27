const express = require("express");
const router = express.Router();
const { adminProtect } = require("../middlewares/adminProtect");
const { adminLogin, signoutAdmin } = require("../controllers/auth.controller");


// LOGIN (POST /admin)
router.post("/", adminLogin);

// GET /admin/dashboard (protected)
router.get("/admin/dashboard", adminProtect, (req, res) => {
  res.json({ message: `Welcome Admin 🔥`, email: req.admin.email });
});



// SIGNOUT (POST /admin/signout) - protected
router.post("/signout", signoutAdmin);


module.exports = router;