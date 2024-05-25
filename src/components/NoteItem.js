import React, { useContext } from 'react'
import noteContext from '../contexts/notes/noteContext'

const NoteItem = (props) => {
    const context = useContext(noteContext)
    const { deleteNote } = context
    const { notes, updateNote } = props

    return (
        <div className='col-md-3'>
            <div className="card my-3" >
                <div className="card-body">
                    <h5 className="card-title">{notes.title}</h5>
                    <p className="card-text">{notes.description}</p>
                    <i className="far fa-trash-alt mx-2" onClick={() => {
                        deleteNote(notes._id)
                        props.showAlert("Deleted Successfully", "success")
                    }} ></i>
                    <i className="far fa-edit mx-2" onClick={() => {
                        updateNote(notes)
                    }}></i>

                </div>
            </div>
        </div>
    )
}

export default NoteItem