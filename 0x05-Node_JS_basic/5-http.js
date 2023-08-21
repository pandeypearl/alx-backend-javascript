/**
 * More complex http server using node HTTP module
 */
const http = require('http');
const countStudents = require('./3-read_file_async.js');

const hostname = '127.0.0.1';
const port = 1245;

const app = http.createServer(async (req, res) => {
  res.setHeader('Content-Type', 'text/plain');
  if (req.url === '/') {
    res.write('Hello Holberton School!');
  } else if (req.url === '/students') {
    res.write('This is the list of our students\n');
    const database = process.argv.length > 2 ? process.argv[2] : '';
    try {
      const content = await countStudents(database);
      res.write(content);
    } catch (err) {
      res.write(err.message);
    }
  }
  res.end();
});

app.listen(port, hostname);

module.exports = app;
