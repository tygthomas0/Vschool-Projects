import React, {useContext, useEffect} from "react"
import {PlantContext} from "./PlantContext"

function PlantCard(props) {
    const {plants, theme, getPlants, loading, setLoading} = useContext(PlantContext)

    useEffect(() => {
        document.body.style.backgroundColor = "#FFDFA3";
        var path = window.location.pathname.toString()
        var pathWithoutSlash = path.slice(1, path.length)
        getPlants("tfvitem", pathWithoutSlash)
    }, [loading])
    
    
    if (loading) {
        return (
            <div>Loading...</div>
        )
    }
    else {
        return (
            <div className="maxWidthContainer">
                <h1 className={`${theme} largeCardHeader`}>{plants[0].tfvname} - <span className="italics">{plants[0].botname}</span></h1>
                <h3 className={`${theme} largeCardText`}>Other Names: {plants[0].othname}</h3>
                <img src={plants[0].imageurl} alt={plants[0].tfvname} className="largeCardImage"/>
                <div className={`${theme} largeCardText`}><h1>Description:</h1> <p>{plants[0].description !== "" ? plants[0].description : "Not Specified"}</p></div>
                <div className={`${theme} largeCardText`}><h1>Uses:</h1> <p>{plants[0].uses !== "" ? plants[0].uses : "Not Specified"}</p></div>
                <div className={`${theme} largeCardText`}><h1>Propagation:</h1> <p>{plants[0].propagation !== "" ? plants[0].propagation : "Not Specified"}</p></div>
                <div className={`${theme} largeCardText`}><h1>Soil types:</h1> <p>{plants[0].soil !== "" ? plants[0].soil : "Not Specified"}</p></div>
                <div className={`${theme} largeCardText`}><h1>Ideal climate:</h1> <p>{plants[0].climate !== "" ? plants[0].climate : "Not Specified"}</p></div>
                <div className={`${theme} largeCardText`}><h1>Health benefits:</h1> <p>{plants[0].health !== "" ? plants[0].health : "Not Specified"}</p></div>
            </div>
        )
    }
    
}

export default PlantCard