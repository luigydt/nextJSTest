import { NextApiRequest, NextApiResponse } from 'next';
import { Note } from '../../Models/Note';
import { Notes } from '../../Models/Notes';

const notas = new Notes();

export default function (req: NextApiRequest, res: NextApiResponse) {
    if (req.method == 'POST') {
        const { note } = req.body;
        if (!note) {
            return (res.status(400).json({
                msg: 'Bad Request, not note in the Body'
            }))
        }
        try {
            const i = notas.getTotal;
            notas.addNote(new Note(note, i));
            return (res.status(200).json({
                msg: `${note} Añadida`
            }))
        }
        catch (err) {
            console.log(err);
            return (res.status(401).json({
                msg: 'Cant Insert Note on List'
            }))
        }
    }

}