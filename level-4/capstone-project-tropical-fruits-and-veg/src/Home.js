import React, {useContext, useEffect} from "react"
import {PlantContext} from "./PlantContext"
import PlantCardSmall from "./PlantCardSmall"
import {Link} from "react-router-dom"

function Home() {
    const {plants, getPlants, theme} = useContext(PlantContext)

    useEffect(() => {
        document.body.style.backgroundColor = "#FFDFA3";
        getPlants()
    }, [])
    
    const smallPlantCards = plants.map(plant => <Link to={`${plant.tfvname}`} key={plant.tfvname} onClick={() => getPlants("tfvitem", plant.tfvname)} style={{ textDecoration: "none"}}><PlantCardSmall key={plant.tfvname} searchTerm={"tfvitem"} name={plant.tfvname} imageurl={plant.imageurl} /></Link>)

    return (
        <div className="maxWidthContainer">
            <h1 className={`${theme} homeHeader`}>Tropical Fruits and Vegetables</h1>
            <p className={`${theme} homeContent`}>Welcome to the Tropical Fruits and Vegetables app!</p>
            <p className={`${theme} homeContent`}>Here, you will find a list of many different plants that grow in a tropical climate, complete with information that will help you grow your own.</p>
            <p className={`${theme} homeContent`}><span className="boldText">Click on one of the plants</span> in the list to be taken to a separate page that contains more information about the plant.</p>
            <div className="smallCardContainer">
                {smallPlantCards}
            </div>
        </div>
    )
}

export default Home