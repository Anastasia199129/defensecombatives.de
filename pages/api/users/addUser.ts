import type { NextApiRequest, NextApiResponse } from 'next'
import db from '../../../config/db'

export default async function handler(req: any, res: any) {
  try {
    if (req.method === 'POST') {
      const { name, nachname, number, email, nachricht } = req.body
      console.log('body', req.body, req.method)
      const values = [name, nachname, email, number, nachricht]

      const resp = await db.query(
        'INSERT INTO user(name, nachname, email, telefon, nachricht) VALUES (?)',
        [values]
      )
      if (resp) {
        return res.status(200).json('user added')
      } else return res.status(500).json('error')

      // (err: any, data: any) => {
      //   if (err) return res.status(500).json(err)
      //   return res.status(200).json(data)
      // }
      // const result = await db.query('INSERT INTO user(name, nachname, number, email, nachricht) values ($1, $2, $3, $4, $5) RETURNING *',
      //   [name, nachname, number, email, nachricht]
      // );
      // console.log('eeeeee', result)
      // return res.status(200).json(result)
      // const result = await pool.query('INCERT IMTO user SET ?', {
      //   name,
      //   nachname,
      //   number,
      //   email,
      //   nachricht,
      // });
      // console.log(result);
    }
    // if (req.method === 'GET') {
    //   await db.query('SELECT * FROM user', () => {
    //     (err, data) => {
    //       if (err) return res.status(500).json(err)
    //       return res.status(200).json(data)
    //     }
    //   })
    //   return
    // }
  } catch (error) {
    res.status(400).json(error)
  }
}