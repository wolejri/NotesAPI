const express = require("express");
const {v4: uuidv4} = require("uuid");

const app = express();
const PORT = 3001;

app.use(express.json());

const notes = [];

//helper function
const findNoteById = (id) => notes.find((note) => note.id === id);


//GET
app.get("/notes", (req,res) => {
    res.json(notes);
});



//POST
app.post("/notes", (req, res) => {
    const {title, content} = req.body;

    if(!title){
        return res.status(400).json({error: "Title is required."});
    }

    if(title.length > 50){
        return res.status(400).json({error: "Title cannot exceed 50 characters."});
    }

    const newNote = {
        id: uuidv4(),
        title,
        content: content || "",
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
    };

    notes.push(newNote);
    res.status(201).json(newNote);

});

app.get("/notes/:id", (req, res) => {
    const {id} = req.params;
    const note = findNoteById(id);

    if(!note){
        return res.status(404).json({error: "Note not found."});
    }

    res.json(note);

});


app.patch("/notes/:id", (req,res) => {
    const {id} = req.params;
    const {title, content} = req.body;

    const note = findNoteById(id);

    if(!note){
        return res.status(404).json({error: "Note not found"});
    }

    if(title && title.length > 50){
        return res.status(400).json({error: "Title cannot exceed 50 characters."});
    }

    if(title) note.title = title;
    if(content !== undefined) note.content = content;
    note.updatedAt = new Date().toISOString();

    res.json(note);

});


app.delete("/notes/:id", (req,res) => {
    const {id} = req.params;
    const noteIndex = notes.findIndex((note) => note.id === id);

    if(noteIndex === -1){
        return res.status(404).json({error: "Note not found."});
    }

    notes.splice(noteIndex,1);
    res.status(200).json({ message: `Note with ID ${id} has been successfully deleted.` });
});


app.listen(PORT, () => {
    console.log(`Notes API is running on http://localhost:${PORT}`);
});

