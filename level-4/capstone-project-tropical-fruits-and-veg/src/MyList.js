import React, {useContext} from "react"
import {PlantContext} from "./PlantContext"
import {Link} from "react-router-dom"
import PlantCardSmall from "./PlantCardSmall"


function MyList() {
    /*
    const {getPlants, savedPlants} = useContext(PlantContext)

    var smallPlantCards = [];
    for (let i = 0; i < savedPlants.length; i++) {
        smallPlantCards.push(<label key={savedPlants[i].tfvname}>{savedPlants[i].tfvname}<Link to={`${savedPlants[i].tfvname}`} key={savedPlants[i].tfvname} onClick={() => getPlants("tfvitem", savedPlants[i].tfvname)} style={{ textDecoration: "none", color: "rgb(8, 92, 117)" }}><PlantCardSmall key={savedPlants[i].tfvname} searchTerm={"tfvitem"} name={savedPlants[i].tfvname} imageurl={savedPlants[i].imageurl} /></Link></label>)
    }
    

    console.log("smallplantcards: ", smallPlantCards)
    return (
        <div>
            {smallPlantCards}
        </div>
    )
    */

    const {changeTheme} = useContext(PlantContext)

    return (
        <div className="smallCardContainer" style={{margin: "10%"}}>
            <div className="default smallCard" onClick={() => changeTheme("default")} style={{ backgroundColor: "#FFDFA3" }}>
                <h1 className="smallCardHeader">Almond</h1>
                <img src="http://tropicalfruitandveg.com/images/almondfruit.jpg" alt="Almond" />
            </div>
            <div className="blue smallCard" onClick={() => changeTheme("blue")} style={{ backgroundColor: "#1B97BD" }}>
                <h1 className="smallCardHeader">Almond</h1>
                <img src="http://tropicalfruitandveg.com/images/almondfruit.jpg" alt="Almond" />
            </div>
            <div className="green smallCard" onClick={() => changeTheme("green")} style={{ backgroundColor: "#1B9761" }}>
                <h1 className="smallCardHeader">Almond</h1>
                <img src="http://tropicalfruitandveg.com/images/almondfruit.jpg" alt="Almond" />
            </div>
            <div className="brown smallCard" onClick={() => changeTheme("brown")} style={{ backgroundColor: "#BA6800" }}>
                <h1 className="smallCardHeader">Almond</h1>
                <img src="http://tropicalfruitandveg.com/images/almondfruit.jpg" alt="Almond" />
            </div>
            <div className="pink smallCard" onClick={() => changeTheme("pink")} style={{ backgroundColor: "#D83A80" }}>
                <h1 className="smallCardHeader">Almond</h1>
                <img src="http://tropicalfruitandveg.com/images/almondfruit.jpg" alt="Almond" />
            </div>
            <div className="purple smallCard" onClick={() => changeTheme("purple")} style={{ backgroundColor: "#8223FF" }}>
                <h1 className="smallCardHeader">Almond</h1>
                <img src="http://tropicalfruitandveg.com/images/almondfruit.jpg" alt="Almond" />
            </div>
        </div>
    )
}

export default MyList