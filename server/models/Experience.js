const mongoose = require("mongoose")
module.exports = mongoose.model("exprience", new mongoose.Schema({
    companyName: { type: String, required: true },
    role: { type: String, required: true },
    desc: { type: String, required: true, },
    workingDate: { type: String, required: true },

}, { timestamps: true }))