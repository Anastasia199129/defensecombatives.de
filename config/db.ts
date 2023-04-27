import {createPool} from 'mysql2/promise'

const password = process.env.PASSWORD

const pool = createPool({
  host: 'localhost',
  user: 'root',
  password,
  port: 3306,
  database: 'defensecombatives'
})

export default pool