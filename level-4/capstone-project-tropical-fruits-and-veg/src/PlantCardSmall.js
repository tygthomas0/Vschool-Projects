import React, {useContext} from "react"
import {PlantContext} from "./PlantContext"

function PlantCardSmall(props) {
    //const {handleSave} = useContext(PlantContext)
    const {theme} = useContext(PlantContext)

    return (
        <div className={`${theme} smallCard`}>
            <h1 className={`${theme} smallCardHeader`}>{props.name}</h1>
            
            <img src={props.imageurl} alt={props.name} />
        </div>
    )
}

export default PlantCardSmall

//<h1 className="smallCardHeader">{props.name}</h1>
//<label>Save Plant: <input id={`${props.name}Checkbox`} type="checkbox" onChange={() => handleSave(document.getElementById(`${props.name}Checkbox`).checked ? true : false, { name: props.name, imageurl: props.imageurl })}></input></label>