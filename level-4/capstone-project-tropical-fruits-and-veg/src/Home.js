import React, {useContext} from "react"
import {PlantContext} from "./PlantContext"
import PlantCardSmall from "./PlantCardSmall"
import {Link} from "react-router-dom"

function Home() {
    const {plants} = useContext(PlantContext)
    const smallPlantCards = plants.map(plant => <Link to={`${plant.tfvname}`} key={plant.tfvname}><PlantCardSmall key={plant.tfvname} searchTerm={"tfvitem"} name={plant.tfvname} imageurl={plant.imageurl} /></Link>)

    return (
        <div>
            <h1>Home Page</h1>
            <p>Lorem ipsum</p>
            <div>
                {smallPlantCards}
            </div>
        </div>
    )
}

export default Home