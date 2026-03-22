// middleware/adminProtect.js

const jwt = require("jsonwebtoken");
const Admin = require("../models/Admin");

exports.adminProtect = async (req, res, next) => {
  try {
    const token = req.cookies.ADMIN;

    if (!token) {
      return res.status(401).json({ message: "No token" });
    }

    const decoded = jwt.verify(token, process.env.JWT_KEY);

    const admin = await Admin.findById(decoded._id);

    if (!admin) {
      return res.status(401).json({ message: "Invalid admin" });
    }

    req.admin = admin;
    next();

  } catch (error) {
    res.status(401).json({ message: "Unauthorized" });
  }
};