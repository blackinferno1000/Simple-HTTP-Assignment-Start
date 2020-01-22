const text = require('./textResponses');

const getHelloJSON = (req, res) => {
  const helloJSON = {
    message: text.hello,
  };
  const stringMessage = JSON.stringify(helloJSON);

  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.write(stringMessage);
  res.end();
};

const getTimeJSON = (req, res) => {
  const timeJSON = {
    message: text.getTimeString(),
  };
  const stringMessage = JSON.stringify(timeJSON);

  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.write(stringMessage);
  res.end();
};

module.exports.getHelloJSON = getHelloJSON;
module.exports.getTimeJSON = getTimeJSON;
