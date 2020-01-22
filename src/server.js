const http = require('http');

const htmlHandler = require('./htmlResponses');
const textHandler = require('./textResponses');
const jsonHandler = require('./jsonResponses');
const imageHandler = require('./imageResponse');

const port = process.env.PORT || process.env.NODE_PORT || 3000;

const onRequest = (req, res) => {
  console.log(req.url);

  switch (req.url) {
    case '/': htmlHandler.getIndex(req, res);
      break;
    case '/page2': htmlHandler.getPage2(req, res);
      break;
    case '/hello': textHandler.getHello(req, res);
      break;
    case '/time': textHandler.getTime(req, res);
      break;
    case '/helloJSON': jsonHandler.getHelloJSON(req, res);
      break;
    case '/timeJSON': jsonHandler.getTimeJSON(req, res);
      break;
    case '/dankmemes': imageHandler.getSpongegar(req, res);
      break;
    default: htmlHandler.getIndex(req, res);
      break;
  }
};

http.createServer(onRequest).listen(port);

console.log(`Listening on port: ${port}`);
