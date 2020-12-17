const fs = require('fs');
const dataBuffer = fs.readFileSync('1-json.json');
const dataJSON = dataBuffer.toString();
const data = JSON.parse(dataJSON);

data.name = "Puru";
data.age = 21;

const dataStrignify = JSON.stringify(data);
fs.writeFileSync('1-json.json',dataStrignify);

// const dataBuffer = fs.readFileSync('1-json.json');
// const dataJSON = dataBuffer.toString();
// const data = JSON.parse(dataJSON);
// console.log(data.title);
// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday'
// };

// const bookJSON = JSON.stringify(book);
// fs.writeFileSync('1-json.json',bookJSON);
// console.log(bookJSON);

// const parseData = JSON.parse(bookJSON);
// console.log(parseData.author);