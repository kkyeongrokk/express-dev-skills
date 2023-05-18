const Skills = require("../models/skill");

module.exports = {
  index,
  new: newSkill,
  create,
  show,
  delete: deleteSkill
};

function index(req, res) {
  res.render("skills/index", {
    skills: Skills.getAll(),
    title: "Skills"
  });
}

function newSkill(req, res) {
  res.render("skills/new", {
    title: "Add New Skills"
  });
}

function create(req, res) {
  console.log(req.body, "this is line 25");
  Skills.create(req.body);
  console.log(req.body, "this is line 26");
  res.redirect("/skills");
}

function show(req, res) {
  res.render('skills/show', {
    title: 'Skill Details',
    skill: Skills.getOne(req.params.id)
  });
}

function deleteSkill(req, res) {
  Skills.deleteOne(req.params.id);
  res.redirect("/skills");
}