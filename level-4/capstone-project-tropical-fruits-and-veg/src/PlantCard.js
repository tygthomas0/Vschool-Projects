//import axios from "axios"
import React, {useContext} from "react"
//import {useParams} from "react-router-dom"
import {PlantContext} from "./PlantContext"

function PlantCard(props) {
    const {plants, theme} = useContext(PlantContext)
    //const {plantID} = useParams()
    //getPlants(props.searchTerm, plantID)
    


    return (
        <div>
            <h1 className={`${theme} largeCardHeader`}>{plants[0].tfvname} - <span className="italics">{plants[0].botname}</span></h1>
            <h3 className={`${theme} largeCardText`}>Other Names: {plants[0].othname}</h3>
            <img src={plants[0].imageurl} alt={plants[0].tfvname} className="largeCardImage"/>
            <p className={`${theme} largeCardText`}>Description: {plants[0].description !== "" ? plants[0].description : "Not Specified"}</p>
            <p className={`${theme} largeCardText`}>Uses: {plants[0].uses !== "" ? plants[0].uses : "Not Specified"}</p>
            <p className={`${theme} largeCardText`}>Propagation: {plants[0].propagation !== "" ? plants[0].propagation : "Not Specified"}</p>
            <p className={`${theme} largeCardText`}>Soil types: {plants[0].soil !== "" ? plants[0].soil : "Not Specified"}</p>
            <p className={`${theme} largeCardText`}>Ideal climate: {plants[0].climate !== "" ? plants[0].climate : "Not Specified"}</p>
            <p className={`${theme} largeCardText`}>Health benefits: {plants[0].health !== "" ? plants[0].health : "Not Specified"}</p>
        </div>
    )
}

export default PlantCard