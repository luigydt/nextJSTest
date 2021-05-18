import { NextApiRequest, NextApiResponse } from 'next';
import { Note } from '../../../Models/Note';
import { Notes } from '../../../Models/Notes';

const notas = new Notes();

export function getFavorites(req: NextApiRequest, res: NextApiResponse) {
    try {
        const favorites = notas.getFavorites();
        return (res.status(200).json({
            favorites
        }));
    }
    catch (err) {
        return (res.status(401).json({
            msg: 'Cant Get Notes Favorites'
        }))
    }
}
