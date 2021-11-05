import React, {useContext} from "react"
import {PlantContext} from "./PlantContext"

function PlantCard(props) {
    const {plants, theme} = useContext(PlantContext)
    return (
        <div className="maxWidthContainer">
            <h1 className={`${theme} largeCardHeader`}>{plants[0].tfvname} - <span className="italics">{plants[0].botname}</span></h1>
            <h3 className={`${theme} largeCardText`}>Other Names: {plants[0].othname}</h3>
            <img src={plants[0].imageurl} alt={plants[0].tfvname} className="largeCardImage"/>
            <p className={`${theme} largeCardText`}><h1>Description:</h1> {plants[0].description !== "" ? plants[0].description : "Not Specified"}</p>
            <p className={`${theme} largeCardText`}><h1>Uses:</h1> {plants[0].uses !== "" ? plants[0].uses : "Not Specified"}</p>
            <p className={`${theme} largeCardText`}><h1>Propagation:</h1> {plants[0].propagation !== "" ? plants[0].propagation : "Not Specified"}</p>
            <p className={`${theme} largeCardText`}><h1>Soil types:</h1> {plants[0].soil !== "" ? plants[0].soil : "Not Specified"}</p>
            <p className={`${theme} largeCardText`}><h1>Ideal climate:</h1> {plants[0].climate !== "" ? plants[0].climate : "Not Specified"}</p>
            <p className={`${theme} largeCardText`}><h1>Health benefits:</h1> {plants[0].health !== "" ? plants[0].health : "Not Specified"}</p>
        </div>
    )
}

export default PlantCard