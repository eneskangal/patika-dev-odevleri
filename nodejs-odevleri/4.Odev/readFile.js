const fs = require('fs');
fs.readFile('employees.json', 'utf8', (err, data) => {
    if (err) console.log(err);                         
    console.log(data);                                 
})
