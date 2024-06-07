import express from "express";
import models from "../models/portfolio.model.js";

const { Intro, About, Experience, Project, Contact } = models;

const router = express.Router();

router.get("/get-portfolio-data", async (req, res) => {
  try {
    const intros = await Intro.find({});
    const abouts = await About.find({});
    const experiences = await Experience.find({});
    const projects = await Project.find({});
    const contacts = await Contact.find({});

    res.status(200).send({
      intro: intros[0],
      about: abouts[0],
      contact: contacts[0],
      experiences: experiences,
      projects: projects,
    });
  } catch (error) {
    res.send(500).send(error);
  }
});

router.post("/update-intro", async (req, res) => {
  try {
    const intro = await Intro.findOneAndUpdate(
      {
        _id: req.body._id,
      },
      req.body
    );

    res.status(200).send({
      data: intro,
      success: true,
      message: "Intro Updated successfully",
    });
  } catch (error) {
    res.status(500).send(error);
  }
});

router.post("/update-about", async (req, res) => {
  try {
    const about = await About.findByIdAndUpdate(
      {
        _id: req.body._id,
      },
      req.body
    );
    res.status(200).send({
      data: about,
      success: true,
      message: "About Updated successfully",
    });
  } catch (error) {
    res.status(500).send(error);
  }
});



export default router;
