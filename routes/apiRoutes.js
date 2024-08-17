const fs = require('fs');
const path = require('path');
const router = require('express').Router();
const { v4: uuidv4 } = require('uuid');

// GET /api/notes - Retrieve all notes
router.get('/api/notes', (req, res) => {
    fs.readFile(path.join(__dirname, '../Develop/db/db.json'), 'utf8', (err, data) => {
        if (err) throw err;
        res.json(JSON.parse(data));
    });
});

// POST /api/notes - Save a new note
router.post('/api/notes', (req, res) => {
    const newNote = { id: uuidv4(), ...req.body };
    fs.readFile(path.join(__dirname, '../Develop/db/db.json'), 'utf8', (err, data) => {
        if (err) throw err;
        const notes = JSON.parse(data);
        notes.push(newNote);
        fs.writeFile(path.join(__dirname, '../Develop/db/db.json'), JSON.stringify(notes, null, 2), (err) => {
            if (err) throw err;
            res.json(newNote);
        });
    });
});

// DELETE /api/notes/:id - Delete a note by ID
router.delete('/api/notes/:id', (req, res) => {
    fs.readFile(path.join(__dirname, '../Develop/db/db.json'), 'utf8', (err, data) => {
        if (err) throw err;
        let notes = JSON.parse(data);
        notes = notes.filter(note => note.id !== req.params.id);
        fs.writeFile(path.join(__dirname, '../Develop/db/db.json'), JSON.stringify(notes, null, 2), (err) => {
            if (err) throw err;
            res.json({ success: true });
        });
    });
});

module.exports = router;
