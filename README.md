# nodejs-progress-bar
A light weight customizable progress bar for node.js
### Example
```
progressBar = require(PATH_TO_MODULE);

let totalProcess = 6;
let barCharacter = "="
let progress = new progressBar(totalProcess, barCharacter); // progressBar(total: 6, barCharacter: "=")

for (var i = 0; i < totalProcess; i++) {
  twoHoursLater();   // process that took some time
  progress.update(); // update the progress
}

// this will be outputed to console
// Current progress: [====================================================================] | 100%
```
