const http = require('http');
const app = require('./app');

const port = process.env.PORT || 5500;

const server = http.createServer(app);

// Server activate
server.listen(port, () => {
    console.log(`Server-applikation lytter på http://localhost:${port}`)
  })