// controllers/admin.controller.js

const Admin = require("../models/Admin");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { PRODUCTION } = require("../utils/config");

//=================================== SIGNIN ===================================
exports.adminLogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    // 1. check admin
    const admin = await Admin.findOne({ email });
    if (!admin) {
      return res.status(404).json({ message: "Admin not found"});
    }

    // 2. check password
    const isMatch = await bcrypt.compare(password, admin.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid password" });
    }

    // 3. generate token
    const token = jwt.sign(
      { _id: admin._id },          // only admin ID
      process.env.JWT_KEY,         // secret key
      { expiresIn: "1d" }          // token valid for 1 day
    );

    // 4. set cookie ✅
    res.cookie("ADMIN", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production", // false for dev
      sameSite: "lax",                               // allow sending cookies cross-origin
      maxAge: 1000 * 60 * 60 * 24                    // 1 day
    });

    // 5. response
    res.status(200).json({ message: "Login Successfull" });

  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server Error" });
  }
};

//=================================== SIGNOUT ===================================
exports.signoutAdmin = async (req, res) => {
  try {
    res.clearCookie("ADMIN");
    res.status(200).json({ message: "signout success" });
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: "unable to signout admin" });
  }
}