// const mongoose = require("mongoose");

// const adminSchema = new mongoose.Schema({
//     email : String,
//     password: String, 
// });
// module.exports = mongoose.model("Admin", adminSchema);


const mongoose = require("mongoose")

module.exports = mongoose.model("admin", new mongoose.Schema({
    email: { type: String, required: true },
    password: { type: String, required: true },
   
}, { timestamps: true }))