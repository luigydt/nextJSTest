
export class Notes {
    constructor() {
        this.notes = [];
    }
    getNotes() {
        return this.notes;
    }
    addNote(note) {
        this.notes.push(note);
    };
    getTotal() {
        return this.notes.length;
    }
    getNote(id) {
        return this.notes.findIndex(id);
    }

    markFavorite(id) {
        const note = this.notes.findIndex(id);
        note.favorite = true;
    }
    getFavorites() {

        const favorites = this.notes.map(note => {
            if (note.favorite == true)
                return note;
        })

        return favorites;
    }
}