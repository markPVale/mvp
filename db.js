const {Pool} = require('pg')

exports.pool = new Pool({
  user: 'markvale',
  host: 'localhost',
  database: 'focus',
  post: '5432'
})

exports.newPost = (title, issues, body) => {
  pool.query(`INSERT INTO page (title, issues, body) VALUES
  ${title}, ${issues}, ${body}`)
}

// module.exports = pool;
// module.exports = newPost;


