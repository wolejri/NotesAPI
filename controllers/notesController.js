const notesService = require("../services/notesService");

const getAllNotes = (req, res) => {
    
    res.json(notesService.getAllNotes());
};

const createNote = (req, res) => {
    const { title, content } = req.body;

    console.log(`The ${content} and ${title} of the note`)
    try {
        const newNote = notesService.createNote(title, content);
        res.status(201).json(newNote);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const getNoteById = (req, res) => {
    const { id } = req.params;
    try {
        const note = notesService.getNoteById(id);
        console.log("This method got called")
        res.json(note);
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
};

const updateNote = (req, res) => {
    const { id } = req.params;
    const { title, content } = req.body;
    try {
        const updatedNote = notesService.updateNote(id, title, content);
        res.json(updatedNote);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const deleteNote = (req, res) => {
    const { id } = req.params;
    try {
        notesService.deleteNote(id);
        res.status(204).send();
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
};

module.exports = {
    getAllNotes,
    createNote,
    getNoteById,
    updateNote,
    deleteNote,
};
