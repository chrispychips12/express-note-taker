// Import the Express module
const express = require('express');
// Added the following line to import the htmlRoutes.js file
const htmlRoutes = require('./routes/htmlRoutes');
// Added the following line to import the apiRoutes.js file
const apiRoutes = require('./routes/apiRoutes');

// Create an instance of an Express server
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON and urlencoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files from the 'public' directory
app.use(express.static('public'));

// Added the following line to use the htmlRoutes.js file
app.use('/', htmlRoutes);

// Added the following line to use the apiRoutes.js file
app.use('/api', apiRoutes);

// Start the server and listen on the specified port
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
