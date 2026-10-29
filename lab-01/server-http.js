// Import the built-in HTTP module provided by Node.js
const http = require("http");

// Port on which the server will listen
const PORT = 3000;

// Create an HTTP server instance using Node's built-in http module
const server = http.createServer((request, response) => {
    // Set HTTP 200 OK status header with Content-Type as plain text
    response.writeHead(200, {
        "Content-Type": "text/plain"
    });

    // Send the response message "Hello" and end the request
    response.end("Hello");
});

// Start the server and listen on port 3000
server.listen(PORT, () => {
    console.log(`HTTP server running at http://localhost:${PORT}`);
});
