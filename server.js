const express = require('express')
const app = express()
const port = 3000
const path = require('path');


// Render Html File
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'templates/index.html'));
});

//I am changing a file
app.listen(port, () => {
  // Code.....
})