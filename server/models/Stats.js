const mongoose = require("mongoose")
module.exports = mongoose.model("stats", new mongoose.Schema({
    YearExp: { type: String, required: true },
    ProjectsCompleted: { type: String, required: true },
    Technologies: { type: String, required: true },
    HappyClients: { type: String, required: true },
}, { timestamps: true }))