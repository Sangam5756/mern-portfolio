import models from "../models/portfolio.model.js";
const { Intro, About, Experience, Project, Contact } = models;
import { projects } from "../../frontend/resources/projects.js";
import User from "../models/user.model.js";

export const getportfolioData = async (req, res) => {
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
};

export const updateIntro = async (req, res) => {
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
};

export const updateAbout = async (req, res) => {
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
};

export const addExperience = async (req, res) => {
  try {
    const experience = new Experience(req.body);
    await experience.save();
    res.status(200).send({
      data: experience,
      success: true,
      message: "Experience Added successfully",
    });
  } catch (error) {
    res.status(500).send(error);
  }
};

export const updateExperience = async (req, res) => {
  try {
    const experience = await Experience.findByIdAndUpdate(
      {
        _id: req.body._id,
      },
      req.body
    );
    res.status(200).send({
      data: experience,
      success: true,
      message: "Experience Updated successfully",
    });
  } catch (error) {
    res.status(500).send(error);
  }
};

export const deleteExperience = async (req, res) => {
  try {
    const experience = await Experience.findByIdAndDelete({
      _id: req.body._id,
    });
    res.status(200).send({
      data: experience,
      success: true,
      message: "Experience Deleted SuccessFully",
    });
  } catch (error) {
    res.status(500).send(error);
  }
};

export const addProjects = async (req, res) => {
  try {
    const project = await new Project(req.body);
    await project.save();
    res.status(200).send({
      data: project,
      success: true,
      message: "Project Added Successfully",
    });
  } catch (error) {
    res.status(500).send(error);
  }
};

export const updateProject = async (req, res) => {
  try {
    const project = await Project.findByIdAndUpdate(
      {
        _id: req.body._id,
      },
      req.body
    );
    res.status(200).send({
      data: project,
      success: true,
      message: "Project updated successfully",
    });
  } catch (error) {
    res.status(500).send(error);
  }
};

export const deleteProject = async (req, res) => {
  try {
    const project = await Project.findByIdAndDelete({ _id: req.body._id });

    res.status(200).send({
      data: project,
      success: true,
      message: "Project Deleted SuccessFully",
    });
  } catch (error) {
    res.status(500).send(error);
  }
};

export const updateContact = async (req, res) => {
  try {
    const intro = await Contact.findOneAndUpdate(
      {
        _id: req.body._id,
      },
      req.body
    );

    res.status(200).send({
      data: intro,
      success: true,
      message: "Contact Updated successfully",
    });
  } catch (error) {
    res.status(500).send(error);
  }
};

export const adminLogin = async (req, res) => {
  try {
    const admin = await User.findOne({
      username: req.body.username,
      password: req.body.password,
    });
    admin.password = "";

    if (admin) {
      res.status(200).send({
        data: admin,
        success: true,
        message: "Login Successfully",
      });
    } else {
      res.status(200).send({
        data: admin,
        success: false,
        message: "Invalid Username and Password",
      });
    }
  } catch (error) {
    res.status(500).send(error);
  }
};
