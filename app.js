const http = require('http');

// Define the hostname and port
const hostname = '0.0.0.0'; // Listen on all network interfaces
const port = 3000;

// Create the HTTP server
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');

  // Simple HTML response with your brand name
  res.end(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>My Clothing Brand</title>
        <style>
            body {
                font-family: Arial, sans-serif;
                background-color: #f4f4f4;
                display: flex;
                justify-content: center;
                align-items: center;
                height: 100vh;
                margin: 0;
            }
            .container {
                text-align: center;
                padding: 50px;
                background-color: #fff;
                border-radius: 10px;
                box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            }
            h1 {
                color: #333;
                font-size: 3em;
                margin-bottom: 0.5em;
            }
            p {
                color: #666;
                font-size: 1.2em;
            }
        </style>
    </head>
    <body>
        <div class="container">
            <h1>Rama6302 Clothing</h1>
            <p>Welcome to our official application!</p>
        </div>
    </body>
    </html>
  `);
});

// Start the server and listen on the specified port
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
