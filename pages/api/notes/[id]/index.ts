import { NextApiRequest, NextApiResponse } from 'next';
import { Note } from '../../../Models/Note';
import { Notes } from '../../../Models/Notes';

const notas = new Notes();

export default function (req: NextApiRequest, res: NextApiResponse) {

    const { id } = req.query;
    console.log(id);
    if (!id) {
        return (res.status(400).json({
            msg: 'Bad Request, not idNote in the query'
        }))
    }
    try {
        const nota = notas.getNote(id);
        return (res.status(200).json({ nota }))
    }
    catch (err) {
        return (res.status(401).json({
            msg: 'Cant Get Note from List'
        }))
    }
}