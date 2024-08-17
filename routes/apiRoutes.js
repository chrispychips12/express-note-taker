const fs = require('fs');
const path = require('path');
const router = require('express').Router();
const { v4: uuidv4 } = require('uuid');

// GET 
router.get('/notes', (req, res) => {
    fs.readFile(path.join(__dirname, '../db/db.json'), 'utf8', (err, data) => {
        if (err) {
            console.error(err); // Log the error
            return res.status(500).json({ error: 'Failed to read notes data' }); // Return 500 error
        }
        res.json(JSON.parse(data)); // Send back the parsed notes data
    });
});

// POST 
router.post('/notes', (req, res) => {
    const newNote = { id: uuidv4(), ...req.body }; // Create a new note with a unique ID
    fs.readFile(path.join(__dirname, '../db/db.json'), 'utf8', (err, data) => {
        if (err) {
            console.error(err); // Log the error
            return res.status(500).json({ error: 'Failed to save new note' }); // Return 500 error
        }
        const notes = JSON.parse(data); // Parse existing notes
        notes.push(newNote); // Add the new note
        fs.writeFile(path.join(__dirname, '../Develop/db/db.json'), JSON.stringify(notes, null, 2), (err) => {
            if (err) {
                console.error(err); // Log the error
                return res.status(500).json({ error: 'Failed to write note to database' }); // Return 500 error
            }
            res.json(newNote); // Send back the newly created note
        });
    });
});

// DELETE 
router.delete('/notes/:id', (req, res) => {
    fs.readFile(path.join(__dirname, '../db/db.json'), 'utf8', (err, data) => {
        if (err) {
            console.error(err); // Log the error
            return res.status(500).json({ error: 'Failed to read notes data' }); // Return 500 error
        }
        let notes = JSON.parse(data); // Parse existing notes
        notes = notes.filter(note => note.id !== req.params.id); // Filter out the note with the given ID
        fs.writeFile(path.join(__dirname, '../Develop/db/db.json'), JSON.stringify(notes, null, 2), (err) => {
            if (err) {
                console.error(err); // Log the error
                return res.status(500).json({ error: 'Failed to delete note' }); // Return 500 error
            }
            res.json({ success: true }); // Send success message
        });
    });
});
module.exports = router;

