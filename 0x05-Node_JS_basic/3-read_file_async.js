/**
 * Reads read the database file synchronously
 */
const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (error, stRecords) => {
      if (error) reject(new Error('Cannot load the database'));
      else {
        const content = stRecords.split('\n');
        const cs = [];
        const swe = [];

        content.forEach((stRecord) => {
          const field = stRecord.split(',');

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
        resolve();
      }
    });
  });
}

module.exports = countStudents;
