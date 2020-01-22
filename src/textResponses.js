const hello = 'Hello World';

const getTimeString = () => {
  const d = new Date();
  const dateString = `${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`;
  return dateString;
};

const getTime = (req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.write(getTimeString());
  res.end();
};

const getHello = (req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.write(hello);
  res.end();
};

module.exports.hello = hello;
module.exports.getTimeString = getTimeString;
module.exports.getHello = getHello;
module.exports.getTime = getTime;
