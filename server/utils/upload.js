const multer = require("multer")
const profileUpload = multer({ storage: multer.diskStorage({}) }).single("profilePic")
const resumeUpload = multer({ storage: multer.diskStorage({}) }).single("resume")
const projectUpload = multer({ storage: multer.diskStorage({}) }).single("hero")

module.exports = { profileUpload, resumeUpload, projectUpload }
