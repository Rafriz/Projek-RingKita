const http = require('http');
const { createApp } = require('./app');

const app = createApp();
const port = process.env.PORT || 4000;

const server = http.createServer((request, response) => {
  if (request.url === '/health') {
    response.writeHead(200, { 'Content-Type': 'application/json' });
    response.end(JSON.stringify(app.health()));
    return;
  }

  response.writeHead(200, { 'Content-Type': 'application/json' });
  response.end(
    JSON.stringify({
      message: 'RINGKITA backend is running',
      endpoints: ['/health'],
    })
  );
});

server.listen(port, () => {
  // Keep startup logging minimal for local development.
  console.log(`RINGKITA backend listening on port ${port}`);
});
