import React, {useContext} from "react"
import {PlantContext} from "./PlantContext"
import PlantCardSmall from "./PlantCardSmall"
import {Link} from "react-router-dom"

function Home() {
    const {plants, getPlants, theme/*, savedPlants, handleSave*/} = useContext(PlantContext)
    
    const smallPlantCards = plants.map(plant => <Link to={`${plant.tfvname}`} key={plant.tfvname} onClick={() => getPlants("tfvitem", plant.tfvname)} style={{ textDecoration: "none"}}><PlantCardSmall key={plant.tfvname} searchTerm={"tfvitem"} name={plant.tfvname} imageurl={plant.imageurl} /></Link>)


    /*
    const smallPlantCards = plants.map(plant => {
        if (savedPlants.length > 0) {
            var checked = false;
            for (let i = 0; i < savedPlants.length; i++) {
                if (savedPlants[i].name === plant.tfvname) {
                    var checked = true
                    break;
                }
            }
        }
        <Link to={`${plant.tfvname}`} key={plant.tfvname} onClick={() => getPlants("tfvitem", plant.tfvname)} style={{ textDecoration: "none", color: "rgb(8, 92, 117)" }}><PlantCardSmall key={plant.tfvname} searchTerm={"tfvitem"} name={plant.tfvname} imageurl={plant.imageurl} checked={checked} /></Link>
    })
    

    var smallPlantCards = [];
    for (let i = 0; i < plants.length; i++) {
        if (savedPlants.length > 0) { //this might need to go on the outside of the top for loop
            var checked = false;
            for (let i = 0; i < savedPlants.length; i++) {
                if (savedPlants[i].name === plants[i].tfvname) {
                    checked = true
                    break;
                }
            }
        }
        smallPlantCards.push(<label key={plants[i].tfvname}>{plants[i].tfvname}<label>Save Plant: <input id={`${plants[i].tfvname}Checkbox`} type="checkbox" onChange={() => handleSave(document.getElementById(`${plants[i].tfvname}Checkbox`).checked ? true : false, { tfvname: plants[i].tfvname, imageurl: plants[i].imageurl })}></input></label><Link to={`${plants[i].tfvname}`} key={plants[i].tfvname} onClick={() => getPlants("tfvitem", plants[i].tfvname)} style={{ textDecoration: "none", color: "rgb(8, 92, 117)" }}><PlantCardSmall key={plants[i].tfvname} searchTerm={"tfvitem"} name={plants[i].tfvname} imageurl={plants[i].imageurl} checked={checked} /></Link></label>)
    }
    */

    return (
        <div>
            <h1 className={`${theme} homeHeader`}>Tropical Fruits and Vegetables</h1>
            <p className={`${theme} homeContent`}>Welcome to the Tropical Fruits and Vegetables app!</p>
            <p className={`${theme} homeContent`}>Here, you will find a list of many different plants that grow in a tropical climate, complete with information that will help you grow your own.</p>
            <p className={`${theme} homeContent`}>Click on one of the plants in the list to be taken to a separate page that contains more information about the plant.</p>
            <div className="smallCardContainer">
                {smallPlantCards}
            </div>
        </div>
    )
}

export default Home