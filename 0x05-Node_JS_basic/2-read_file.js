/**
 * Reads read the database file synchronously
 */
const fs = require('fs');

function countStudents(filepath) {
  let content;

  try {
    content = fs.readFileSync(filepath, { encoding: 'utf8', flag: 'r' });
  } catch (error) {
    throw new Error('Cannot load the database');
  }

  records = content.split('\n');
  const cs = [];
  const swe = [];

  records.forEach((record) => {
    const field = record.split(',');

    if (field !== [] && field !== null) {
      if (field[3] === 'CS') {
        cs.push(field[0]);
      } else if (field[3] === 'SWE') {
        swe.push(field[0]);
      }
    }
  });

  console.log(`Number of students: ${cs.length + swe.length}`);
  console.log(`Number of students in CS: ${cs.length}. List: ${cs.join(', ')}`);
  console.log(`Number of students in SWE: ${swe.length}. List: ${swe.join(', ')}`);
}

module.exports = countStudents;
