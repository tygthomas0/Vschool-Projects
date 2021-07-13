import React from "react"
import Pet from "./Pet"

function Friend(props) {
    const petArray = props.pets;
    const petComponents = petArray.map(pet => <Pet key={pet.name} name={pet.name} breed={pet.breed}/>)


    return (
        <div className="friendBox">
            <h1>{props.name}</h1>
            <h2>Age: {props.age}</h2>
            <h3>Pets:</h3>
            <ul>
                {petComponents}
            </ul>
        </div>
    )
}

export default Friend;