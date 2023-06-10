// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

interface Data {
  message: string
}

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {

  const { method, body } = req
  const { personalInfo: { name, email, telephone } } = body

  if (method === "POST") {
    if (name && email && telephone) {
      res.status(200).json({ message: 'You have successfully submitted your details' })
    } else if (!name) {
      res.status(400).json({ message: "You did not provide a name" })
    } else if (!email) {
      res.status(400).json({ message: "You did not provide a email" })
    } else if (!telephone) {
      res.status(400).json({ message: "You did not provide a phone number" })
    } else {
      res.status(200).json({ message: "You did provide your name" })
    }
  }
}
