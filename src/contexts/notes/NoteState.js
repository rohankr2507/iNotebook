import NoteContext from "./noteContext";
import React, { useState } from "react";

const NoteState = (props) => {
    // const s1 = {
    //     "name": "Rohan",
    //     "class": "5b"
    // }

    // const [state, setState] = useState(s1)

    // const update = () => {
    //     setTimeout(() => {
    //         setState({
    //             "name": "Rohan Kumar",
    //             "class": "10b"
    //         })
    //     }, 1000);
    // }

    const host = "http://localhost:5000"

    const notesInitial = []

    const [notes, setNotes] = useState(notesInitial)

    // Get a Note
    const getAllNotes = async () => {
        // API Call
        const response = await fetch(`${host}/api/notes/fetchAllNotes`, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                'auth-token': localStorage.getItem('token')
            }
        })

        const json = await response.json()
        console.log(json);

        setNotes(json)
    }

    // Add a Note
    const addNote = async (title, description, tag) => {
        // API Call
        const response = await fetch(`${host}/api/notes/addNote`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'auth-token': localStorage.getItem('token')
            },
            body: JSON.stringify({ title, description, tag })
        })

        const json = await response.json()
        console.log(json);

        console.log("Adding a new note");
        const note = json
        setNotes(notes.concat(note))
    }

    // Delete a Note
    const deleteNote = async (id) => {
        // API Call
        const response = await fetch(`${host}/api/notes/deleteNote/${id}`, {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json',
                'auth-token': localStorage.getItem('token')
            }
        })

        const json = await response.json()
        console.log(json);

        console.log("Deleting the node with id : " + id);
        const newNotes = notes.filter((notes) => { return notes._id !== id })
        setNotes(newNotes)
    }

    // Edit a Note
    const editNote = async (id, title, description, tag) => {
        // API Call
        const response = await fetch(`${host}/api/notes/updateNote/${id}`, {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json',
                'auth-token': localStorage.getItem('token')
            },
            body: JSON.stringify({ title, description, tag })
        })

        const json = await response.json()
        console.log(json);

        let newNotes = JSON.parse(JSON.stringify(notes))

        // Logic to edit in client
        for (let index = 0; index < newNotes.length; index++) {
            const element = newNotes[index];
            if (element._id === id) {
                newNotes[index].title = title
                newNotes[index].description = description
                newNotes[index].tag = tag
                break;
            }
        }

        setNotes(newNotes)
    }


    return (
        // <NoteContext.Provider value={{state, update}}>
        //     {props.children}
        // </NoteContext.Provider>

        <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote, getAllNotes }}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState