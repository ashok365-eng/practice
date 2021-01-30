var fs = require('fs');

fs.writeFile('mynewfile3.txt', 'ashokkumar!', function(err) {
    if (err) throw err;
    console.log('Saved!');
});