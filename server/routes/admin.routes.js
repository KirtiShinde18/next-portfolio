const { createProfile, readProfile, updateProfile, createProject, readProject, updateProject, deleteProject, createSkill, readSkill, updateSkill, deleteSkill, readExperience, createExperience, updateExperience, deleteExperience, createContact, } = require("../controllers/admin.controller")
const { profileUpload, projectUpload } = require("../utils/upload")


// const router = require("express").Router()
const router = require("express").Router()

router

    .post("/createProfile", profileUpload, createProfile)
    .get("/readProfile", readProfile)
    .put("/updateProfile", updateProfile)
    // .delete("/deleteProfile", deleteProfile)

    // 🚀 PROJECT 
    .post("/createProject", createProject)
    .get("/readProject", readProject)
    .put("/updateProject/:eid", projectUpload , updateProject)
    .delete("/deleteProject/:eid", deleteProject)

    // ✅ SKILL
    .post("/createSkill", createSkill)
    .get("/readSkill", readSkill)
    .put("/updateSkill/:eid", updateSkill)
    .delete("/deleteSkill/:eid", deleteSkill)

    // 💼 EXP
    .post("/createExperience", createExperience )
    .get("/readExperience", readExperience)
    .put("/updateExperience/:eid", updateExperience)
    .delete("/deleteExperience/:eid", deleteExperience)

    // contact
    .post("/createContact", createContact)

module.exports = router
