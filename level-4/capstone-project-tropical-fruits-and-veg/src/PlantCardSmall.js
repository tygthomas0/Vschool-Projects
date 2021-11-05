import React, {useContext} from "react"
import {PlantContext} from "./PlantContext"

function PlantCardSmall(props) {
    const {theme} = useContext(PlantContext)

    return (
        <div className={`${theme} smallCard`}>
            <h1 className={`${theme} smallCardHeader`}>{props.name}</h1>
            
            <img src={props.imageurl} alt={props.name} />
        </div>
    )
}

export default PlantCardSmall