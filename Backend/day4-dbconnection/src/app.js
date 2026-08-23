const express = require("express")
const connectDB = require("./config/db");
const NotesModel = require("./models/note.model");

const app = express();
app.use(express.json());

connectDB()

app.get('/', (req, res) =>{
    res.send("Done")
});


app.post('/create', async (req,res) => {
    let {title, des} = req.body;

    const  newNote  = await NotesModel.create({
        title, 
        des,
    });

    res.send({
        sucess: true,
        message: "Note Created",
        data: newNote
    })
});

module.exports = app;