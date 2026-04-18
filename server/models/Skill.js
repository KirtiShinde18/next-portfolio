const mongoose = require("mongoose")
module.exports = mongoose.model("skill", new mongoose.Schema({
    skill: { type: String, required: true },
}, { timestamps: true }))