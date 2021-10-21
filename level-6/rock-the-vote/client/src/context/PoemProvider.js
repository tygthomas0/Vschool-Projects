import React, { useState } from 'react'
import axios from 'axios'

export const PoemContext = React.createContext()



export default function PoemProvider(props) {
    const initState = {
        createdByUser: props.user,
        upVoters: props.upVoters || [],
        downVoters: props.downVoters || [],
        points: props.points || 0,
        _id: props._id
        //add something for comments
    }

    const [poemState, setPoemState] = useState(initState)

    function upvote(voterId) {
        if (poemState.upVoters.indexOf(voterId) !== -1) {
            setPoemState(prevPoemState => ({
                ...prevPoemState,
                upVoters: prevPoemState.upVoters.splice(prevPoemState.upVoters.indexOf(voterId), 1),
                points: prevPoemState.points - 1
            }))
        }
        else if (poemState.downVoters.indexOf(voterId) !== -1) {
            setPoemState(prevPoemState => ({
                ...prevPoemState,
                downVoters: prevPoemState.downVoters.splice(prevPoemState.downVoters.indexOf(voterId), 1),
                upVoters: [...prevPoemState.upVoters, voterId],
                points: prevPoemState.points + 2 
            }))
        }
        else {
            setPoemState(prevPoemState => ({
                ...prevPoemState,
                upVoters: [...prevPoemState.upVoters, voterId],
                points: prevPoemState.points + 1
            }))
        }
    }

    function downvote(voterId) {
        if (poemState.downVoters.indexOf(voterId) !== -1) {
            setPoemState(prevPoemState => ({
                ...prevPoemState,
                downVoters: prevPoemState.downVoters.splice(prevPoemState.downVoters.indexOf(voterId), 1),
                points: prevPoemState.points + 1
            }))
        }
        else if (poemState.upVoters.indexOf(voterId) !== -1) {
            setPoemState(prevPoemState => ({
                ...prevPoemState,
                upVoters: prevPoemState.upVoters.splice(prevPoemState.upVoters.indexOf(voterId), 1),
                downVoters: [...prevPoemState.downVoters, voterId],
                points: prevPoemState.points - 2 
            }))
        }
        else {
            setPoemState(prevPoemState => ({
                ...prevPoemState,
                downVoters: [...prevPoemState.downVoters, voterId],
                points: prevPoemState.points - 1
            }))
        }
    }

    return (
        <PoemContext.Provider value={{...poemState, upvote, downvote}} >
            { props.children }
        </PoemContext.Provider>
    )
}