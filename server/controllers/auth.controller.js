// // controllers/admin.controller.js

const { isEmail } = require("validator")

const Admin = require("../models/Admin")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcryptjs")

//=================================== SIGNIN ===================================
exports.loginAdmin = async (req , res) => {
  try {
    const {email, password} = req.body

    // 1. Check Email and Password
    if(!email || !password){
      return res.status(400).json({message: "Email and Password are Required"})
    }
    
    // 2. Email Checking
    if(!isEmail(email)){
      return res.status(400).json({message: "Invalid Email"})

    }

    // 3. Check if user exists in database using email
    const result = await Admin.findOne({email})

    // If user not found, return error message
    if(!result) {
      return res.status(401).json({
        message: process.env.NODE_ENV === "production"
        ? "Invalid Credentials" // Production -> generic message
        : "Email Not Found" // Development -> exact issue
      })
     
    }

    // 4. Compare entered password with hashed password in DB
    const verify = await bcrypt.compare(password, result.password)

    // If password doesn't match, return error
    if(!verify){
      return res.status(401).json({
        message: process.env.NODE_ENV === "production"
        ? "Invalid Credentials"
        : "Invalid Password"
      })
    }

    // 5. Generate JWT token with user/admin ID
    const token = jwt.sign({_id: result._id}, process.env.JWT_KEY, { expiresIn: "1d" })

    // Send token in HTTP-only cookie
    res.cookie("ADMIN", token , {
      httpOnly: true, // Prevent access from js (🔐 security)
      secure: process.env.NODE_ENV === "production", // Only send cookie over HTTPS in production
      sameSite: "none",
      maxAge: 1000 * 60 * 60 * 24 // 24 hours
    })
    res.status(200).json({message: "Admin Signin Successful", result: {
      email: result.email,
      password: result.password,
    }})
  } catch (error) {
    console.log(error);
    res.status(500).json({message: "Unable signin"})
    
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

