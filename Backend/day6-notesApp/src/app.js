const express = require('express');
const NotesModel = require('./models/notes.model');
const connectDB = require('./config/db');

connectDB()

const app = express();

app.use(express.json)

app.get("/", (req,res) => {
    res.send("Sb Mst hai")
})

app.post("/create",  async (req,res) => {
    try {
        let {title, description} = req.body;

        let newNote = await NotesModel.create({
            title,
            description,
        })

        return res.status(201).json({
            message: "Note Created Successfully",
            data: newNote,
        })
    } catch (error) {
        console.log("Error MSG" , error)
    }
})

module.exports = app;
