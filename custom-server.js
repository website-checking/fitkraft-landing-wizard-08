import express from 'express';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();
const port = 8080;

// Serve static files from the dist directory
app.use(express.static(path.join(__dirname, 'dist')));

// Log all requests
app.use((req, res, next) => {
  console.log(`${new Date().toISOString()} - ${req.method} ${req.url}`);
  next();
});

// For any request that doesn't match a static file, send the index.html
app.get('*', (req, res) => {
  console.log(`Serving index.html for path: ${req.path}`);

  const indexPath = path.join(__dirname, 'dist', 'index.html');

  // Check if index.html exists
  if (fs.existsSync(indexPath)) {
    res.sendFile(indexPath);
  } else {
    res.status(404).send(`
      <h1>Error: index.html not found</h1>
      <p>Could not find the file at: ${indexPath}</p>
      <p>Current directory: ${__dirname}</p>
      <p>Files in dist directory:</p>
      <pre>${fs.existsSync(path.join(__dirname, 'dist')) ?
        fs.readdirSync(path.join(__dirname, 'dist')).join('\n') :
        'dist directory not found'}</pre>
    `);
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
  console.log(`Open your browser and navigate to http://localhost:${port}`);
  console.log(`For the admin page, go to http://localhost:${port}/admin`);
  console.log(`For the test routing page, go to http://localhost:${port}/test-routing.html`);
});
