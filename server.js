const express = require('express')
const fs = require('fs');
const app = express();
const { v4: uuidv4 } = require("uuid");
const PORT = process.env.PORT || 3000;

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//HTML Routes
 app.get("/api/notes", (request, response) => {
     response.sendFile(path.join(__dirname, './public/notes.html')); 
     fs.readFile(__dirname + '/db/db.json', 'utf8', (err, data) => { 
    if (err) throw err; 
    response.json(JSON.parse(data));
 }); 
});
//API Route
 app.post('/api/notes', (req, res) => {
     const newNote = req.body; fs.readFile(__dirname + '/db/db.json', 'utf8', 
     (err, data) => { if (err) throw err; 
        const notes = JSON.parse(data);
         newNote.id = notes.length + 1;
          notes.push(newNote);
          fs.writeFile(__dirname + '/db/db.json', JSON.stringify(notes), (err) => {
             if (err) throw err; res.json(newNote); });
             }); 
            });