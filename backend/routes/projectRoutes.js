const express = require("express");

const Project = require("../models/Project");

const router = express.Router();

const multer = require("multer");

const path = require("path");


// MULTER STORAGE
const storage = multer.diskStorage({

  destination: function (req, file, cb) {

    cb(null, "uploads/");
  },

  filename: function (req, file, cb) {

    cb(

      null,

      Date.now() +

      path.extname(file.originalname)
    );
  },

});

const upload = multer({

  storage: storage,
});


// CREATE PROJECT
router.post("/", async (req, res) => {

  try {

    const {

      clientId,
      clientName,
      serviceType,
      budget,
      deadline,
      description,
      priority,

    } = req.body;

    const newProject = new Project({

      clientId,
      clientName,
      serviceType,
      budget,
      deadline,
      description,
      priority,

    });

    await newProject.save();

    res.status(201).json({

      message: "Project Request Submitted",

    });

  } catch (error) {

    console.log(error);

    res.status(500).json({

      message: "Server Error",

    });

  }

});


// GET ALL PROJECTS
router.get("/", async (req, res) => {

  try {

    const projects = await Project.find().sort({

      createdAt: -1,

    });

    res.status(200).json(projects);

  } catch (error) {

    console.log(error);

    res.status(500).json({

      message: "Server Error",

    });

  }

});


// GET SINGLE PROJECT
router.get("/:id", async (req, res) => {

  try {

    const project = await Project.findById(

      req.params.id
    );

    if (!project) {

      return res.status(404).json({

        message: "Project Not Found",

      });
    }

    res.status(200).json(project);

  } catch (error) {

    console.log(error);

    res.status(500).json({

      message: "Server Error",

    });

  }

});


// UPDATE PROJECT
router.put("/:id", async (req, res) => {

  try {

    const updatedProject = await Project.findByIdAndUpdate(

      req.params.id,

      req.body,

      {
        returnDocument: "after",
      }

    );

    res.status(200).json(updatedProject);

  } catch (error) {

    console.log(error);

    res.status(500).json({

      message: "Server Error",

    });

  }

});


// FILE UPLOAD
router.put(

  "/upload/:id",

  upload.single("projectFile"),

  async (req, res) => {

    try {

      const updatedProject =

        await Project.findByIdAndUpdate(

          req.params.id,

          {

            projectFile: req.file.filename,
          },

          {
            returnDocument: "after",
          }
        );

      res.status(200).json(
        updatedProject
      );

    } catch (error) {

      console.log(error);

      res.status(500).json({

        message: "Upload Failed",
      });
    }
  }
);


// DELETE PROJECT
router.delete("/:id", async (req, res) => {

  try {

    await Project.findByIdAndDelete(

      req.params.id
    );

    res.status(200).json({

      message: "Project Deleted Successfully",

    });

  } catch (error) {

    console.log(error);

    res.status(500).json({

      message: "Server Error",

    });

  }

});


module.exports = router;