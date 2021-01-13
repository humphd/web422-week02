const fs = require('fs');
const { charCount } = require('./src/version-04');

fs.readFile('great-gatsby.txt', 'utf8', (err, text) => {
  if(err) {
    console.warn('Unable to open great-gatsby.txt');
    process.exit(1);
  }

  const counts = charCount(text);
  console.log(counts);
  process.exit(0);
});
