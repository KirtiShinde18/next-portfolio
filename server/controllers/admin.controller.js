const Profile = require("../models/Profile.js")
const { profileUpload, projectUpload } = require("../utils/upload")
const cloud = require("../utils/cloud.js");
const Project = require("../models/Project.js");
const Skills = require("../models/Skill.js");
const Skill = require("../models/Skill.js");
const Experience = require("../models/Experience.js");
const Contact = require("../models/Contact.js");
const { sendEmail } = require("../utils/email.js");
const { adminTemplate, userTemplate } = require("../utils/ emailTemplates.js");

// ✅ Create Profile

exports.createProfile = async (req, res) => {
  try {
    console.log("BODY:", req.body);  // 🔍 debug
    console.log("FILE:", req.file);

    let data = { ...req.body };

    // ✅ image upload
    if (req.file) {
      const uploadRes = await cloud.uploader.upload(req.file.path);
      data.profileImage = uploadRes.secure_url;
    }

    const existing = await Profile.findOne();

    // 👉 if already exists → update
    if (existing) {
      const updated = await Profile.findByIdAndUpdate(
        existing._id,
        data,
        { new: true }
      );

      return res.status(200).json({
        message: "Profile updated successfully",
        result: updated
      });
    }

    // 👉 create new
    const newProfile = await Profile.create(data);

    return res.status(201).json({
      message: "Profile created successfully",
      result: newProfile
    });

  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: error.message
    });
  }
};

// 👀 READ Profile
exports.readProfile = async (req, res) => {
    try {
        const result = await Profile.find()
        res.status(200).json({ message: "Profile read success", result })

    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "unable to read success" })
    }
}

// 🔄 UPDATE PROFILE
exports.updateProfile = (req, res) => {
  profileUpload(req, res, async (err) => {
    try {
      if (err) {
        return res.status(500).json({ message: err.message });
      }

      // 👉 get existing profile (single profile system)
      const profile = await Profile.findOne();

      if (!profile) {
        return res.status(404).json({
          message: "Profile not found. Please create profile first.",
        });
      }

      // 👉 form data copy
      let updateData = { ...req.body };

      // 🗑️ Cloudinary Image Delete
      if(profile.profilePic){
        const p = path.basename(profile.profilePic ).split(".")[0]
        await cloud.uploader.destroy(p )
      }

      // 👉 if new image uploaded
      if (req.file) {
        const uploadRes = await cloud.uploader.upload(req.file.path);

        updateData.profileImage = uploadRes.secure_url;
      }

      // 👉 update profile
      const updatedProfile = await Profile.findByIdAndUpdate(
        profile._id,
        updateData,
        { new: true }
      );

    
      return res.status(200).json({
        message: "Profile updated successfully",
        result: updatedProfile,
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        message: error.message,
      });
    }
  });
};


// ================================================ PROJECTS ================================================

// ADD PROJECT 🚀
exports.createProject = async (req, res) => {
  try {
    // 📤 Handle file upload using multer middleware
    projectUpload(req, res, async (err) => {

      // ❌ If upload error occurs
      if (err) {
        console.log(err);
        return res.status(500).json({ message: err.message });
      }

      // 📁 If file is uploaded from frontend
      if (req.file) {

        // ☁️ Upload image to Cloudinary
        const { secure_url } = await cloud.uploader.upload(req.file.path);

        // 💾 Save project data in DB with image URL
        await Project.create({
          ...req.body,
          hero: secure_url, // project banner/image
        });

        // ✅ Success response
        return res.status(201).json({ message: "Project created with image success", });

      } else {

        // ⚠️ If image is not provided
        return res.status(400).json({ message: "Project image is required",});
      }
    });

  } catch (error) {
    // ❌ Server error handling
    console.log(error);

    return res.status(500).json({ message: error.message, });
  }
};

// READ PROJECT
exports.readProject = async (req, res) => {
    try {
        const result = await Project.find()
        res.status(200).json({ message: "Projects read success", result })

    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "unable to read success" })
    }
}

// UPDATE PROJECT 
exports.updateProject = async (req, res) => {
    try {
        const { eid } = req.params
        await Project.findByIdAndUpdate(eid, req.body)
        res.status(200).json({ message: "Projects update success" })

    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "unable to update success" })
    }
}

// DELETE PROJECT 
exports.deleteProject = async (req, res) => {
    try {
        const { eid } = req.params
        await Project.findByIdAndDelete(eid)
        res.status(200).json({ message: "Projects delete success" })

    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "unable to delete success" })
    }
}

// ================================================ SKILLS ================================================

// ✚ ADD SKILL
exports.createSkill = async (req, res) => {
  try {
    const { skill } = req.body
    await Skill.create({ skill })
    res.status(201).json({message: "Skill Create Success"})
  } catch (error) {
    console.log(error);
    res.status(500).json({message: "Unable To Create Skill"})
    
  }
}

// 👀 READ SKILL
exports.readSkill = async (req, res) => {
  try {
    const result = await Skill.find()
    res.status(200).json({message: "Skill Fetch Success", result})
  } catch (error) {
    console.log(error);
    res.status(500).json({message: "Unable To Fetch Skill"})
    
  }
}

// ✏️ UPDATE SKILL
exports.updateSkill = async (req, res) => {
  try {
    const {eid} = req.params
    await Skill.findByIdAndUpdate(eid, req.body)
    res.status(200).json({message: "Skill Update Success"})
  } catch (error) {
    console.log(error);
    res.status(500).json({message: "Unable To Update Skill"})
    
  }
}

// ❌ DELETE SKILL
exports.deleteSkill = async (req, res) => {
  try {
    const {eid} = req.params
    await Skill.findByIdAndDelete(eid)
    res.status(200).json({message: "Skill Delete Success"})
  } catch (error) {
    console.log(error);
    res.status(500).json({message: "Unable To Delete Skill"})
    
  }
}

// ================================================ EXPERIENCE ================================================

// ✚ ADD EXP
exports.createExperience = async (req, res) => {
    try {
        const { companyName, role, desc, workingDate } = req.body
        await Experience.create({ companyName, role, desc, workingDate })
        res.status(200).json({ message: "Experience create success" })

    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "unable to create success" })
    }
}

// 👀 READ EXP
exports.readExperience = async (req, res) => {
    try {
        const result = await Experience.find()
        res.status(200).json({ message: "Experience read success", result })

    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "unable to read success" })
    }
}

// ✏️ UPDATE EXP
exports.updateExperience = async (req, res) => {
    try {
        const { eid } = req.params
        await Experience.findByIdAndUpdate(eid, req.body)
        res.status(200).json({ message: "Experience update success" })

    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "unable to update success" })
    }
}

// ❌ DELETE EXP 
exports.deleteExperience = async (req, res) => {
    try {
        const { eid } = req.params
        await Experience.findByIdAndDelete(eid)
        res.status(200).json({ message: "Experience delete success" })

    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "unable to delete success" })
    }
}

// ================================================ CONTACT ================================================


// 💬 CONTACT
exports.createContact = async (req , res) => {
  try {
    const { name, email, message } = req.body
    await Contact.create({name , email, message})

    // 📩 Admin email
    await sendEmail({
      email: process.env.EMAIL,
      subject: "New Contact Message",
      message: adminTemplate({ name, email, message })
    })

    // 📩 User email
    await sendEmail({
      email: email,
      subject: "Thanks for contacting",
      message: userTemplate({ name, message })
    })


    res.status(201).json({message: "Contact Created Successfully 🎉"})
  } catch (error) {
    console.log(error);
    res.status(500).json({message: "Unable to Createe Contact"})
    
  }
}