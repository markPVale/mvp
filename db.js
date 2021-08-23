const path = require('path')

const db = path.resolve(_dirname, 'db/database.sqlite')

const knex = require('knex') ({
  client: 'sqlite3',
  conncetion: {
    filename: dbPath,
  },
  useNullAsDefault: true
})

knex.schema
  .hasTable('entries')
    .then((exists) => {
      if (!exists) {
        return knex.schema.createTable('entries', (table) => {
          tale.increments('id').primary()
          table.string('project')
          table.string('issues')
          table.string('reflect')
        })
        .then(() => {
          console.log('Table \ Entries \ created')
        })
        .catch((err) => {
          console.error(`error creating table: ${err}`)
        })
      }
    })
    .then(() => {
      console.log('done')
    })
    .catch((err) => {
      console.log(`there was an error setting up the db: ${err}`)
    })

knex.select('*').from('entries')
    .then(data => console.log('data:', data))
    .catch(err => console.log(err))


export default knex