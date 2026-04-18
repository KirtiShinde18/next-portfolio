// // controllers/admin.controller.js

const { isEmail } = require("validator")

const Admin = require("../models/Admin")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcryptjs")

//=================================== SIGNIN ===================================
exports.signin = async (req, res) => {
    try {
        const { email, password } = req.body
        if (!email || !password) {
            return res.status(400).json({ message: "email and password are required" })
        }
        if (!isEmail(email)) {
            return res.status(400).json({ message: "invalid email" })
        }

        const result = await User.findOne({ email })
        if (!result) {
            return res.status(401).json({
                message: process.env.NODE_ENV === "production"
                    ? "Invalid Credentials"
                    : "Email Not Found"
            })
        }
        const verify = await bcrypt.compare(password, result.password)
        if (!verify) {
            return res.status(401).json({
                message: process.env.NODE_ENV === "production"
                    ? "Invalid Credentials"
                    : "Invalid Password"
            })
        }
        const token = jwt.sign({ _id: result._id }, process.env.JWT_KEY, { expiresIn: "1d" })
        res.cookie("ADMIN", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            maxAge: 1000 * 60 * 60 * 24
        })
        res.status(200).json({ message: "sign in success" })
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "unable sign in" })
    }
}

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

