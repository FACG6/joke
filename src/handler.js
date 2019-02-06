const fs = require('fs');
const path = require('path');
const requestApi = require('request');

exports.homeHandle = (request, response) => {
  const filePath = path.join(__dirname, '..', 'public', 'index.html');
  fs.readFile(filePath, (err, file) => {
    if (err) {
      response.writeHead(500, { 'content-type': 'text/html' });
      response.end('<h2>server error</h2>');
    } else {
      response.writeHead(200, { 'content-type': 'text/html' });
      response.end(file);
    }
  });
};

exports.handelResult = (request, respone) => {
  const option = {
    url: 'https://official-joke-api.appspot.com/jokes/random',
    methdod: 'GET',
    headers: { Accept: 'application/json', 'Accept-Charset': 'utf-8' },
  };

  requestApi(option, (err, res, body) => {
    if (err) {
      const responseSend = { error: err };
      respone.writeHead(500, { 'content-type': 'application/json' });
      respone.end(JSON.stringify(responseSend));
    } else {
      const responseSend = { error: null, result: body };
      respone.writeHead(200, { 'content-type': 'application/json' });
      respone.end(JSON.stringify(responseSend));
    }
  });
};

exports.staticHandle = (request, response) => {
  const endPoint = request.url;
  const extention = endPoint.split('.')[1];
  const contentType = {
    html: 'text/html',
    css: 'text/css',
    js: 'application/javascript',
    jpg: 'image/jpg',
  };
  const filePath = path.join(__dirname, '..', endPoint);

  fs.readFile(filePath, (err, file) => {
    if (err) {
      response.writeHead(500, { 'content-type': 'text/html' });
      response.end('<h2>server error</h2>');
    } else {
      response.writeHead(200, { 'content-type': contentType[extention] });
      response.end(file);
    }
  });
};

exports.notFoundHandle = (request, response) => {
  const filePath = path.join(__dirname, '..', 'public', 'html', 'notFound.html');
  fs.readFile(filePath, (err, file) => {
    if (err) {
      response.writeHead(500, { 'content-type': 'text/html' });
      response.end('<h2>Internal Server Error</h2>');
    } else {
      response.writeHead(404, { 'content-type': 'text/html' });
      response.end(file);
    }
  });
};
