const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
require("dotenv").config();

const Admin = require("../models/Admin");

const seedAdmin = async () => {
    try {
        // DB Connect
        await mongoose.connect(process.env.MONGO_URL);
        console.log("DB Connected");

        const email = process.env.ADMIN_EMAIL;
        const password = process.env.ADMIN_PASSWORD;

        // Check Already exists
        const existingAdmin = await Admin.findOne({email});
        
        if(!existingAdmin){
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

seedAdmin();