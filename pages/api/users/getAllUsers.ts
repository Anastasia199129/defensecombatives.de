import db from '../../../config/db'

export default async function handler(req: { method: string }, res: { status: (arg0: number) => { (): any; new(): any; json: { (arg0: unknown): void; new(): any } } }) {
  if (req.method === 'GET') {
    try {
      const [result] = await db.query('SELECT * FROM user')
      // canst {data} = await result.
      // console.log(result);
  
      res.status(200).json(result)
      
        //  result.json(users.rows)
      // await db.query('SELECT * FROM user', () => {(err: any, data: any) => {
      //     if (err) return res.status(500).json(err)
      //     return res.status(200).json(data)
      //   }
      // })
      // return
    } catch (error) {
      res.status(500).json(error)
    }

  }
}
