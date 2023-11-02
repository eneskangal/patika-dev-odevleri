const fs = require('fs');
fs.appendFile('employees.json', '\n{"name": "Employee 2 Name", "salary": 2000}', 'utf8', (err) => {
    if (err) console.log(err);
});
