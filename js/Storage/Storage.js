import {Note} from "../Note/Note.js";

class Storage {
    constructor(){
        this.notes = new Set();
        this.load();
    }

    add(note){
        this.notes.add(note);
        this.save();
    }

    remove(note){
        this.notes.delete(note);
        this.save();
    }

    save(){
        localStorage.setItem('notes', JSON.stringify([...this.notes]))
    }

    load(){
        let notes = JSON.parse(localStorage.getItem('notes'));
        if(notes !== null){
            for(let note of notes){
                this.notes.add(Note.createFromObject(note));
            }
        }
    }
}

export let storage = new Storage();