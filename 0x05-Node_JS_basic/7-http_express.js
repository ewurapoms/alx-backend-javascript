const express = require('express');
const fs = require('fs').promises;

const app = express();
const port = 1245;

async function countStudents(path) {
  try {
    const data = await fs.readFile(path, 'utf-8');
    const lines = data.split('\n').filter((line) => line.trim() !== '');
    const fields = lines[0].split(',');
    const counts = {};
    const fieldLists = {};

    for (let i = 1; i < lines.length; i += 1) {
      const values = lines[i].split(',');
      const fieldIndex = fields.indexOf('field');
      const fieldValue = values[fieldIndex];

      if (!counts[fieldValue]) {
        counts[fieldValue] = 0;
        fieldLists[fieldValue] = [];
      }
      counts[fieldValue] += 1;
      fieldLists[fieldValue].push(values[0]);
    }

    let output = `This is the list of our students\nNumber of students: ${lines.length - 1}\n`;

    Object.keys(counts).forEach((field) => {
      output += `Number of students in ${field}: ${counts[field]}. List: ${fieldLists[field].join(', ')}\n`;
    });

    return output;
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  countStudents(process.argv[2])
    .then((data) => {
      res.send(`This is the list of our students\n${data}`);
    })
    .catch((error) => {
      res.status(404).send(`This is the list of our students\n${error.message}`);
    });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

module.exports = app;
