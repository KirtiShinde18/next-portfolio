const mongoose = require("mongoose")

module.exports = mongoose.model("profile", new mongoose.Schema({
    name: { type: String, required: true },
    title: { type: String, required: true },
    bio: { type: String, required: true },
    journey: { type: String, required: true },
    work: { type: String, required: true },
    dob: { type: String, required: true },
    location: { type: String, required: true },
    email: { type: String, required: true },
    mobile: { type: String, required: true },
    language: { type: String, required: true },
    profileImage: { type: String }, // Cloudinary Image URL

    yearExp: { type: String, required: true },
    projectsCompleted: { type: String, required: true },
    technologies: { type: String, required: true },
    happyClients: { type: String, required: true },

}, { timestamps: true }))