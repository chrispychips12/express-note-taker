// Import the Express module
const express = require('express');

// Import the htmlRoutes.js file
const htmlRoutes = require('./routes/htmlRoutes');

// Import the apiRoutes.js file
const apiRoutes = require('./routes/apiRoutes');

// Create an instance of an Express server
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON and urlencoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files from the 'public' directory
app.use(express.static('public'));

// Use the API routes for all requests to /api
app.use('/api', apiRoutes);

// Use the HTML routes for all other requests
app.use('/', htmlRoutes);

// Start the server and listen on the specified port
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
