import React, {useContext, useState} from "react"
import {UserContext} from "../context/UserProvider"
import Comment from './Comment.js'

export default function CommentList(props) {
    const { poemId } = props //poemID
    const { allComments } = useContext(UserContext)

    const initState = {
        poemComments: allComments.filter(comment => {
            if (comment.parent === poemId) {
                return comment
            }
        }),
        viewingComments: false
    }

    const [commentListState, setCommentListState] = useState(initState)

    function toggleList() {
        setCommentListState(prevCommentListState => ({
            ...prevCommentListState,
            viewingComments: !viewingComments
        }))
    }

    const {poemComments, viewingComments} = commentListState
    return (
        <div>
            {poemComments.length > 0 ?
                <>
                    {viewingComments ?
                        <>
                        {poemComments.map(comment => <Comment key={`${poemId}-${poemComments.indexOf(comment)}`} {...comment} />)}
                        </>
                    :
                        <button onClick={toggleList}>View Comments</button>
                    }
                </>
            :
            <p>No comments yet</p>
            }
        </div>
    )
}
