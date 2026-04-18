// const express = require("express");
// const router = express.Router();
// const { adminLogin, signoutAdmin } = require("../controllers/auth.controller");


const { loginAdmin, signoutAdmin } = require("../controllers/auth.controller.js")

const router = require("express").Router()



router
.post("/signin", loginAdmin ) // LOGIN
.post("/signout", signoutAdmin) // LOGOUT

module.exports = router

