const express = require("express");
const notesRoutes = require("./routes/noteRoutes");
const app = express();



app.use(express.json());
app.use("/notes", notesRoutes);
module.exports = app;