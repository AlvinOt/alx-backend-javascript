const fs = require('fs');

fs.readFile('example.txt', 'utf-8', (error, data) => {
    if (error) {
        console.error('Error reading the file:', error.message);
        return;
    }
    console.log(data);
});

console.log('This line may be executed before file reading is complete.');
