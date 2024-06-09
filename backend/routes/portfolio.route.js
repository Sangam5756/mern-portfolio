import express from "express";

import {
  addExperience,
  addProjects,
  adminLogin,
  deleteExperience,
  deleteProject,
  getportfolioData,
  updateAbout,
  updateContact,
  updateExperience,
  updateIntro,
  updateProject,
} from "../controllers/portfolio.controller.js";
const router = express.Router();

router.get("/get-portfolio-data", getportfolioData);

// update intro
router.post("/update-intro", updateIntro);

// Update about
router.post("/update-about", updateAbout);

// add Experience
router.post("/add-experience", addExperience);

// Update experience
router.post("/update-experience", updateExperience);
// Delete Experience
router.post("/delete-experience", deleteExperience);

// add Projects
router.post("/add-projects", addProjects);

router.post("/update-projects", updateProject);

router.post("/delete-projects", deleteProject);

// update Contact
router.post("/update-contact", updateContact);

// Admin Login

router.post("/admin-login", adminLogin);
export default router;
