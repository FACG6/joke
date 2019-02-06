const {
  homeHandle,
  staticHandle,
  notFoundHandle,
  handelResult,
} = require('./handler');

const router = (request, response) => {
  const endpoint = request.url;

  if (endpoint === '/') {
    homeHandle(request, response);
  } else if (endpoint.includes('/public/')) {
    staticHandle(request, response);
  } else if (endpoint === '/result') {
    handelResult(request, response);
  } else {
    notFoundHandle(request, response);
  }
};

module.exports = router;
