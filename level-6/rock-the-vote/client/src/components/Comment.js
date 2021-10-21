import React from "react"

export default function Comment(props) {
    const { user: {username}, content} = props

    return (
        <>
            <p>{content}</p>
            <p>Submitted by {username}</p>
        </>
    )
}