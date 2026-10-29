// Import the Express framework
const express = require("express");

// Initialize the Express application
const app = express();

// Define the port number (using Render/cloud environment variable or fallback to 3000 locally)
const PORT = process.env.PORT || 3000;

// 1. GET / - Home Route
// Returns a clear welcome message with HTTP 200 OK
app.get("/", (request, response) => {
    response.status(200).send("Welcome to my Lab 1 Express server!");
});

// 2. GET /about - About Route
// Returns JSON containing student name and section placeholder with HTTP 200 OK
app.get("/about", (request, response) => {
    response.status(200).json({
        name: "K V Chetan Kumar",
        registrationNumber: "252U1R9049",
        section: "[Enter your section]"
    });
});

// 3. GET /time - Time Route
// Returns the current date and time using new Date() with HTTP 200 OK
app.get("/time", (request, response) => {
    response.status(200).json({
        currentDateTime: new Date()
    });
});

// 4. Unknown routes handler (Catch-all)
// Returns a useful 404 message with HTTP status 404 Not Found
app.use((request, response) => {
    response.status(404).send("404 - Page Not Found. The requested route does not exist.");
});

// Start the Express server and listen on port 3000
app.listen(PORT, () => {
    console.log(`Express server running at http://localhost:${PORT}`);
});
