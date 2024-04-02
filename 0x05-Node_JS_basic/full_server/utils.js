import fs from 'fs';

const readDatabase = (path) => new Promise((resolve, reject) => {
  fs.readFile(path, 'utf8', (error, data) => {
    if (error) reject(Error('Cannot load the database'));
    else {
      const studentsPerField = {};
      const lines = data.split('\n');
      let students = -1;
      for (const line of lines) {
        if (line.trim() !== '') {
          const columns = line.split(',');
          const field = columns[3];
          const firstName = columns[0];
          if (students >= 0) {
            if (!Object.hasOwnProperty.call(studentsPerField, field)) {
              studentsPerField[field] = [];
            }
            studentsPerField[field] = [...studentsPerField[field], firstName];
          }
          students += 1;
        }
      }
      resolve(studentsPerField);
    }
  });
});

export default readDatabase;
module.exports = readDatabase;
