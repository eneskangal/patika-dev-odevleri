const fs = require('fs');
fs.unlink('employees.json', (err) => {
    if (err) console.log(err);
});