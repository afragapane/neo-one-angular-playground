
const fs = require('fs');
const file = 'node_modules/@angular-devkit/build-angular/src/angular-cli-files/models/webpack-configs/browser.js';

fs.readFile(file, 'utf8', (err, data) => {
  if (err) {
    return console.log(err);
  }
  const result = data.replace(/node: false/g, `node: {fs: 'empty', buffer: true}`);

  fs.writeFile(file, result, 'utf8', (subErr) => {
    if (err) {
      return console.log(subErr);
    }
  });
});
