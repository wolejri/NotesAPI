const express = require("express");
const notesController = require("../controllers/notesController");

const router = express.Router();

router.get("/", notesController.getAllNotes);
router.post("/", notesController.createNote);
router.get("/:id", notesController.getNoteById);
router.patch("/:id", notesController.updateNote);
router.delete("/:id", notesController.deleteNote);


module.exports = router;