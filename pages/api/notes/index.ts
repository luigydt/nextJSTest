// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { NextApiRequest, NextApiResponse } from 'next';
import { Note } from '../../Models/Note';
import { Notes } from '../../Models/Notes';

const notas = new Notes();

export default function (req: NextApiRequest, res: NextApiResponse) {
  try {
    const notes = notas.getNotes();
    return (res.status(200).json({ notes }))
  }
  catch (err) {
    return (res.status(401).json({
      msg: 'Cant Get Notes'
    }))
  }
}










