require("dotenv").config()
const mongoose = require("mongoose")
const bcrypt = require("bcryptjs");
const Admin = require("../models/Admin");


exports.seedAdmin = async () => {
   try {
           // DB Connect
           await mongoose.connect(process.env.MONGO_URL);
           console.log("DB Connected");
   
           const email = process.env.ADMIN_EMAIL;
           const password = process.env.ADMIN_PASSWORD;
   
           // Check Already exists
           const existingAdmin = await Admin.findOne({email});
           
           if(existingAdmin){
               console.log("⚠️ Admin Already exists");
               process.exit();
               
           }
   
           // Hash Password 
           const hashedPassword = await bcrypt.hash(password, 10);
           
           // Create Admin 
           await Admin.create({
               email,
               password: hashedPassword
           });
   
           console.log("✅ Admin Created Successfully");
           process.exit();
           
       } catch (error) {
           console.log("❌ Error",error);
           process.exit(1)
           
       }
}

const seedProfile = {
    name: "Alex Johnson",
    title: "Full Stack Developer",
    bio: "I build fast, accessible web apps and love solving product problems.",
    journey: "Started with HTML/CSS, moved to React and Node, now building full-stack products.",
    work: "Frontend, backend, and deployment for startups and agencies.",
    dob: "1994-06-12",
    location: "Bengaluru, India",
    email: "alex@example.com",
    mobile: "+91 90000 00000",
    language: "English, Hindi",
    image: "",
}