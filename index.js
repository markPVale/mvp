const express = require('express');
const app = express();
const {pool, newPost} = require('./db');

const port = 3000||port.env.PORT;

// app.use('/',express.static(__dirname + '/dist'));

app.get('/', (req, res) => {
  console.log('hello')
  res.send('Hello World');
});

// app.get("/", function (req, res) {

//   console.log("Hello");

//   const car = "read";

//   res.send("Hello, world");

// });

app.post('/newPost', (req, res) => {
  console.log('post made');
  res.send('post')
});

app.listen(port, () => {
  console.log(`listening at http://localhost:${port}`);
});