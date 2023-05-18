const skills = [
  { id: 123456, skill: "HTML", skillLevel: "Advanced" },
  { id: 123457, skill: "CSS", skillLevel: "Advanced" },
  { id: 123458, skill: "JS", skillLevel: "Intermediate" },
  { id: 123459, skill: "NodeJS", skillLevel: "Beginner" },
];

module.exports = {
  getAll,
  create,
  getOne,
  deleteOne
};

function getAll() {
  return skills;
}
 function create(skill) {
  skill.id = Date.now() % 1000000;
  skill.skillLevel = "Beginner";
  skills.push(skill);
 }

 function getOne(id) {
  id = parseInt(id);
  return skills.find(skill => skill.id === id);
 }

 function deleteOne(id) {
  id = parseInt(id);
  const idx = skills.find(skill => skill.id === id);
  skills.splice(idx, 1);
 }