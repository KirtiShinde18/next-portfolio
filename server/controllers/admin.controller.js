// controllers/admin.controller.js

const Admin = require("../models/Admin");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

exports.adminLogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    // validation
    if (!email || !password) {
      return res.status(400).json({ message: "Email & Password required" });
    }

    // find admin
    const admin = await Admin.findOne({ email });

    if (!admin) {
      return res.status(401).json({ message: "Admin not found" });
    }

    // password check
    const isMatch = await bcrypt.compare(password, admin.password);

    if (!isMatch) {
      return res.status(401).json({ message: "Invalid password" });
    }

    // token
    const token = jwt.sign(
      { _id: admin._id },
      process.env.JWT_KEY,
      { expiresIn: "1d" }
    );

    // cookie set
    res.cookie("ADMIN", token, {
      httpOnly: true,
      secure: false, // production madhe true
      maxAge: 1000 * 60 * 60 * 24,
    });

    res.status(200).json({
      message: "Admin login success",
    });

  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Login error" });
  }
};