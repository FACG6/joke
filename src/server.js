const http = require('http');
const router = require('./router');

const port = process.env.PORT || 8000;

const server = http.createServer(router);

server.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`work on port ${port}`);
});
