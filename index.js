const express = require('express');
const app = express();
const {pool, newPost, retrievePages} = require('./db/db');

const port = 3000||port.env.PORT;

app.use('/',express.static(__dirname + '/dist'));
app.use(express.json());

app.get('/allEntries', (req, res) => {

  retrievePages()
  .then((response) => {
    // console.log('response', response);
    res.status(200).json(response)
  })
  .catch((err) => {
    console.log(err);
    res.status(500)
  })
});


app.post('/newPost', (req, res) => {

  const {title, issues, body} = req.body;
  newPost(title, issues, body);
  res.send('post')
});

app.listen(port, () => {
  console.log(`listening at http://localhost:${port}`);
});