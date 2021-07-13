import React from "react"

function Pet(props) {
    return (
        <li>{props.name} - {props.breed}</li>
    )
}

export default Pet;