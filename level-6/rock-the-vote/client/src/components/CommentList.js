import React, {useContext, useState} from "react"
import {UserContext} from "../context/UserProvider"
import Comment from './Comment.js'

export default function CommentList(props) {
    const { poemId } = props //poemID
    const { allComments } = useContext(UserContext)

    const initState = {
        poemComments: allComments.filter(function(comment) {
            console.log(comment.parent === poemId)
            return comment.parent === poemId
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

    console.log("allComments: ", allComments)
    

    const {poemComments, viewingComments} = commentListState
    console.log("poemComments: ", poemComments)
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
