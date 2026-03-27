const express = require("express");
const router = express.Router();
const { adminLogin, signoutAdmin } = require("../controllers/auth.controller");


router
  .post("/", adminLogin) // LOGIN
  .post("/signout", signoutAdmin) // LOGOUT

module.exports = router;