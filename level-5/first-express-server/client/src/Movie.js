import React, { useState } from "react"
import AddMovieForm from "./AddMovieForm.js"

export default function Movie(props) {
    const { title, genre, _id, deleteMovie, editMovie } = props
    const [editToggle, setEditToggle] = useState(false)
    return (
        <div className="movie">
            { !editToggle ?
                <>
                    <h1>Title: {title}</h1>
                    <p>Genre: {genre}</p>
                    <button className="edit-btn" onClick={() => setEditToggle(prevToggle => !prevToggle)}>Edit</button>
                    <button className="delete-btn" onClick={() => deleteMovie(_id)}>Delete</button>
                </>
                :
                <>
                    <AddMovieForm title={title} genre={genre} btnText="Submit Edit" submit={editMovie} _id={_id} />
                    <button onClick={() => setEditToggle(prevToggle => !prevToggle)}>Close</button>
                </>
            }
        </div>
    )
}