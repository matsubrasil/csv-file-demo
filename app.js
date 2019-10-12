const fs = require('fs');

const csv = require('csv-parser');
const createCsvWriter = require('csv-writer').createObjectCsvWriter;
const csvWriter = createCsvWriter({
  path: 'out.csv',
  header: [
    { id: 'name', title: 'Name' },
    { id: 'surname', title: 'Surname' },
    { id: 'age', title: 'Age' },
    { id: 'gender', title: 'Gender' },
  ],
});

const data = [
  {
    name: 'John',
    surname: 'Snow',
    age: 26,
    gender: 'M',
  },
  {
    name: 'Clair',
    surname: 'White',
    age: 30,
    gender: 'F',
  },
  {
    name: 'Fancy',
    surname: 'Brown',
    age: 78,
    gender: 'F',
  },
];

csvWriter
  .writeRecords(data)
  .then(() => console.log('The CSV file was written successfully'));

fs.ReadStream('./placas.csv')
  .pipe(csv())
  .on('data', row => {
    console.log('row', row);
  })
  .on('end', () => {
    console.log('csv file processed');
  });
