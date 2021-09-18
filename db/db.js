const {Pool} = require('pg')

const pool = new Pool({
  user: 'markvale',
  host: 'localhost',
  database: 'focus',
  post: '5432'
})

const newPost = (title1, issues1, body1) => {
  pool.query(`INSERT INTO page (title, issues, body) VALUES
  ('${title1}', '${issues1}', '${body1}')`);
}

const retrievePages = () => {
  return pool.query('SELECT * FROM page');
}

module.exports.pool = pool;
module.exports.newPost = newPost;
module.exports.retrievePages = retrievePages;


