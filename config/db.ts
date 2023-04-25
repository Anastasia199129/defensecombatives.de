import {createPool} from 'mysql2/promise'

const password = process.env.PASSWORD

const pool = createPool({
  host: 'defensecombatives-de.vercel.app',
  user: 'root',
  password,
  port: 3306,
  database: 'defensecombativesde'
})

export default pool