const mongoose = require("mongoose")

module.exports = mongoose.model("project", new mongoose.Schema({
    title: { type: String, required: true },
    desc: { type: String, required: true },
    category: { type: String, required: true },
    hero: { type: String, required: true }, // Cloudinary Image URL
    tech: { type: String, required: true },
    liveURL: { type: String, required: true },
    githubURL: { type: String, required: true },
}, { timestamps: true }))