import {createPool} from 'mysql2/promise'

const password = process.env.PASSWORD
const host = process.env.DB_HOST

const pool = createPool({
  host: host,
  user: 'root',
  password,
  port: 3306,
  database: 'defensecombatives'
})

export default pool