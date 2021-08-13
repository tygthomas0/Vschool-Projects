import axios from "axios"
import React, {useContext} from "react"
import {useParams} from "react-router-dom"
import {PlantContext} from "./PlantContext"

function PlantCard(props) {
    const {plants, getPlants} = useContext(PlantContext)
    const {plantID} = useParams()
    
    getPlants(props.searchTerm, plantID)


    return (
        <div>
            <h1>{plants.tfvname}</h1>
            <h3>Other Names: {plants.othname}</h3>
            <img src={plants.imageurl} alt={plants.tfvname}/>

        </div>
    )
}

export default PlantCard