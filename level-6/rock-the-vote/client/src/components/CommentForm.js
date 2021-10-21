import React, {useContext, useState} from "react"
import {UserContext} from "../context/UserProvider"

export default function CommentForm(props) {
    const { poemId } = props //poem ID
    const { addComment, user: {username} } = useContext(UserContext)

    const initState = {
        submittingComment: false,
        content: ""
    }

    const [commentState, setCommentState] = useState(initState)

    function toggleForm() {
        setCommentState(prevCommentState => ({
            ...prevCommentState,
            submittingComment: !submittingComment
        }))
    }

    function handleChange(e){
        const {name, value} = e.target
        setCommentState(prevCommentState => ({
          ...prevCommentState,
          [name]: value
        }))
    }

    function handleSubmit(e){
        e.preventDefault()
        addComment({content: content, parent: poemId, username: username})
        setCommentState(initState)
      }

    const {content, submittingComment} = commentState
    return (
        <div>
            {submittingComment ?
                <form onSubmit={handleSubmit}>
                    <input type="text" name="content" value={content} onChange={handleChange} placeholder="Write something here" />
                    <button>Submit</button>
                    <button onClick={toggleForm}>Cancel</button>
                </form>
            :
                <button onClick={toggleForm}>Add A Comment</button>
            }
        </div>
    )
}