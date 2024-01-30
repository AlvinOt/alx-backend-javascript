const fs = require('fs');

try {
    const data = fs.readFileSync('example.txt', 'utf-8');
    console.log(data);
} catch (error) {
    console.error('Error reading the file:', error.message);
}
console.log('This line is executed after file reading.');
