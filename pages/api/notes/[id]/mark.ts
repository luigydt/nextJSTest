import { NextApiRequest, NextApiResponse } from 'next';
import { Note } from '../../../Models/Note';
import { Notes } from '../../../Models/Notes';

const notas = new Notes();

export default function (req: NextApiRequest, res: NextApiResponse) {
    if (req.method == 'PUT') {
        const { idNote } = req.query;
        if (!idNote) {
            return (res.status(400).json({
                msg: 'Bad Request, not idNote in the query'
            }))
        }
        try {
            notas.markFavorite(idNote);
            return (res.status(200).json({
                msg: 'Marcada como Favorita'
            }))
        }
        catch (err) {
            return (res.status(401).json({
                msg: 'Cant Get Note from List'
            }))
        }
    }
}