// Create web server
// Create a web server that listens for requests on port 3000 and responds with "Hello, world!" when a request is received. 
// The server should respond to all requests with a status code of 200 and a content type of text/plain.

// This is a simple server that listens for requests on port 3000 and responds with "Hello, world!" when a request is received.

// Import the http module
const http = require('http');

// Create a server object
const server = http.createServer((req, res) => {
  // Set the status code and content type
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  // Send the response
  res.end('Hello, world!\n');
});

// Start the server
server.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});