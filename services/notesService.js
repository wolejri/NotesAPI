const {validateTitle} = require("../utils/validation");

const {v4 : uuidv4} = require("uuid");

const notes = [];

const getAllNotes = () => notes;

const createNote = (title, content = "") => {
    validateTitle(title);

    const newNote = {
        id: uuidv4(),
        title,
        content,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
    };

    notes.push(newNote);

    return newNote;
}

const getNoteById = (id) => {
    const note = notes.find((note) => note.id === id);
    if(!note) throw new Error("Note not found.");
    return note;
}

const updateNote = (id, title, content) => {
    const note = getNoteById(id);

    if(title){
        validateTitle(title);
        note.title = title;
    }

    if(content !== undefined){
        note.content = content;
    }

    note.updatedAt = new Date().toISOString();

    return note;
}

const deleteNote = (id) => {
    const noteIndex = notes.findIndex((note) => note.id === id);
    if (noteIndex === -1) throw new Error("Note not found.");
    notes.splice(noteIndex, 1);
};

module.exports = {
    getAllNotes,
    createNote,
    getNoteById,
    updateNote,
    deleteNote,
};