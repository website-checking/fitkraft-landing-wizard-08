import http from 'http';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = 8080;
const DIST_DIR = path.join(__dirname, 'dist');
const INDEX_HTML = path.join(DIST_DIR, 'index.html');

// Create a simple HTTP server
const server = http.createServer((req, res) => {
  console.log(`${new Date().toISOString()} - ${req.method} ${req.url}`);
  
  // Get the file path based on the URL
  let filePath = path.join(DIST_DIR, req.url === '/' ? 'index.html' : req.url);
  
  // Check if the file exists
  fs.stat(filePath, (err, stats) => {
    if (err || !stats.isFile()) {
      // If the file doesn't exist, serve index.html for client-side routing
      console.log(`File not found: ${filePath}, serving index.html instead`);
      filePath = INDEX_HTML;
    }
    
    // Read the file and send it as the response
    fs.readFile(filePath, (err, data) => {
      if (err) {
        res.writeHead(500);
        res.end(`Error loading ${filePath}`);
        return;
      }
      
      // Set the content type based on the file extension
      const ext = path.extname(filePath);
      let contentType = 'text/html';
      
      switch (ext) {
        case '.js':
          contentType = 'text/javascript';
          break;
        case '.css':
          contentType = 'text/css';
          break;
        case '.json':
          contentType = 'application/json';
          break;
        case '.png':
          contentType = 'image/png';
          break;
        case '.jpg':
        case '.jpeg':
          contentType = 'image/jpeg';
          break;
        case '.svg':
          contentType = 'image/svg+xml';
          break;
      }
      
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(data);
    });
  });
});

// Start the server
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
  console.log(`Open your browser and navigate to http://localhost:${PORT}`);
  console.log(`For the admin page, go to http://localhost:${PORT}/admin`);
});
