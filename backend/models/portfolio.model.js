import mongoose, { model, mongo } from "mongoose";

const introSchema = new mongoose.Schema({
  welcomeText: {
    type: String,
    required: true,
  },
  firstName: {
    type: String,
    require: true,
  },
  lastName: {
    type: String,
    require: true,
  },
  caption: {
    type: String,
    require: true,
  },
  description: {
    type: String,
    require: true,
  },
});

const aboutSchema = new mongoose.Schema({
  lottieURL: {
    type: String,
    require: true,
  },
  description1: {
    type: String,
    require: true,
  },
  description2: {
    type: String,
    require: true,
  },

  skills: {
    type: Array,
    require: true,
  },
});

const experienceSchema = new mongoose.Schema({
  title: {
    type: String,
    require: true,
  },
  period: {
    type: String,
    require: true,
  },
  company: {
    type: String,
    require: true,
  },
  description: {
    type: String,
    require: true,
  },
});

const projectSchema = new mongoose.Schema({
  title: {
    type: String,
    require: true,
  },

  description: {
    type: String,
    require: true,
  },
  image: {
    type: String,
    require: true,
  },
  link: {
    type: String,
    require: true,
  },
  technologies: {
    type: Array,
    require: true,
  },
  githubrepo:{
    type:String
  }
});

const contactSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  gender: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
  mobile: {
    type: String,
    require: true,
  },
  age: {
    type: String,
    require: true,
  },
  address: {
    type: String,
    require: true,
  },
});

export default  {
  Intro: mongoose.model("intros", introSchema),
  About: mongoose.model("abouts", aboutSchema),
  Experience: mongoose.model("experiences", experienceSchema),
  Project: mongoose.model("projects", projectSchema),
  Contact: mongoose.model("contacts", contactSchema),
};
