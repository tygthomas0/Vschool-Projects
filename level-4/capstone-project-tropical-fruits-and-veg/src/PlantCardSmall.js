import React from "react"

function PlantCardSmall(props) {
    return (
        <div>
            <h1>{props.name}</h1>
            <img src={props.imageurl} alt={props.name} />
        </div>
    )
}

export default PlantCardSmall