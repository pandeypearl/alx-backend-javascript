const express = require('express');
const countStudents = require('./3-read_file_async.js');

const app = express();
const port = 1245;

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', async (req, res) => {
  res.write('This is the list of our students\n');
  const database = process.argv.length > 2 ? process.argv[2] : '';
  try {
    const content = await countStudents(database);
    res.write(content);
  } catch (err) {
    res.write(err.messsage);
  }
  res.end();
});

app.listen(port);

module.exports = app;
