import { createSendGrMsg } from '@/helpers/createSendGrMsg'

import type { NextApiRequest, NextApiResponse } from 'next'

const sgMail = require('@sendgrid/mail')

const API_KEY = process.env.API_KEY_SENDGRID

sgMail.setApiKey(API_KEY)

const handler = async (
  req: NextApiRequest
  // {
  //   method: string
  //   body: {
  //     name: string
  //     email: string
  //     number: any
  //     message: string
  //   }
  // }
  ,
  res:NextApiResponse
  // {
  //   status: (arg0: number) => {
  //     (): any
  //     new (): any
  //     json: { (arg0: { message: string }): any; new (): any }
  //   }
  // }
) => {
  try {
    if (req.method === 'POST') {
      const data = req.body
      if (!data?.name || !data.email || !data.number) {
        return res.status(400).json({ message: 'Bad request' })
      }
      const msg = createSendGrMsg(data)
      await sgMail.send(msg)
    }
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

export default handler