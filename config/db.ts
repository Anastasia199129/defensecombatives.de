import {createPool} from 'mysql2/promise'

const pool = createPool({
  host: 'https://defensecombatives-de.vercel.app',
  user: 'root',
  password: '000420ANa.',
  port: 3306,
  database: 'defensecombativesde'
})

export default pool