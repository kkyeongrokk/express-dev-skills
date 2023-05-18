var express = require("express");
var router = express.Router();
const skillsCtrl = require("../controllers/skills");

/* GET users listing. */
router.get("/", skillsCtrl.index);
// add skill
router.get("/new", skillsCtrl.new);
// Redirect to the skills and show the newly added skill
router.post("/", skillsCtrl.create);
// show
router.get("/:id", skillsCtrl.show);
// delete
router.delete("/:id", skillsCtrl.delete);


module.exports = router;
