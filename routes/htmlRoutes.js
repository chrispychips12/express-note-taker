const path = require('path');
const router = require('express').Router();

// Route to serve notes.html
router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../Develop/public/notes.html'));
});

// Default route to serve index.html
router.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../Develop/public/index.html'));
});

module.exports = router;
