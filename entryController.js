const knex = require('./db')

entriesAll = async (req, res) => {
  knex
    .select('*')
    .from('entries')
    .then(userData => {
      res.json(userData)
    })
    .catch(err => {
      res.json({message: `error extracting entries ${err}`})
    })
}

entriesCreate = async (req, res) => {
  knex('books')
    .insert({
      'project': 'project',
      'issues': 'issues',
      'reflect': 'reflect'
    })
    .then(() => {
      res.json({ message: `Entry created`})
    })
    .catch(err => {
      res.json({ message: `${err}`})
    })
}

export default entriesCreate