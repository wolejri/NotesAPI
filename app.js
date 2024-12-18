const express = require("express");
const notesRoutes = require("./routes/noteRoutes");
const app = express();



app.use(express.json());
app.use("/notes", notesRoutes);

// app.listen(PORT, () => {
//     console.log(`Notes API is running on http:localhost:${PORT}`)
// });


module.exports = app;