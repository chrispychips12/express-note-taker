const fs = require('fs');
const path = require('path');
const router = require('express').Router();
const { v4: uuidv4 } = require('uuid');

// GET /api/notes - Retrieve all notes
router.get('/notes', (req, res) => {
    fs.readFile(path.join(__dirname, '../Develop/db/db.json'), 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: 'Failed to read notes data' });
        }
        res.json(JSON.parse(data));
    });
});

// POST /api/notes - Save a new note
router.post('/notes', (req, res) => {
    const newNote = { id: uuidv4(), ...req.body };
    fs.readFile(path.join(__dirname, '../Develop/db/db.json'), 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: 'Failed to save new note' });
        }
        const notes = JSON.parse(data);
        notes.push(newNote);
        fs.writeFile(path.join(__dirname, '../Develop/db/db.json'), JSON.stringify(notes, null, 2), (err) => {
            if (err) {
                console.error(err);
                return res.status(500).json({ error: 'Failed to write note to database' });
            }
            res.json(newNote);
        });
    });
});

// DELETE /api/notes/:id - Delete a note by ID
router.delete('/notes/:id', (req, res) => {
    fs.readFile(path.join(__dirname, '../Develop/db/db.json'), 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: 'Failed to read notes data' });
        }
        let notes = JSON.parse(data);
        notes = notes.filter(note => note.id !== req.params.id);
        fs.writeFile(path.join(__dirname, '../Develop/db/db.json'), JSON.stringify(notes, null, 2), (err) => {
            if (err) {
                console.error(err);
                return res.status(500).json({ error: 'Failed to delete note' });
            }
            res.json({ success: true });
        });
    });
});

module.exports = router;