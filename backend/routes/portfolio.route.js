import express from "express";
import models from '../models/portfolio.model.js';

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

export default  router;
