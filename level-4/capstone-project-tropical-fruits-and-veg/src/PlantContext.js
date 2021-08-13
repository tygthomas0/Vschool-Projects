import React, {useState, useEffect} from "react"
const axios = require("axios")
const PlantContext = React.createContext()

function PlantContextProvider(props) {
    const [plants, setPlants] = useState([])

    function getPlants(searchArea = "search", searchTerm = "all") {
        //searchArea should only be either "search" or "tfvitem"

        axios.get(`https://vschool-cors.herokuapp.com?url=https://tropicalfruitandveg.com/api/tfvjsonapi.php?${searchArea}=${searchTerm}`)
            .then(res => {
                console.log(res)
                setPlants(plants => plants = res.data.results)
            })
            .catch(err => console.log(err))
    }

    useEffect(() => {
        getPlants()
    }, [])

    return (
        <PlantContext.Provider value={{plants, getPlants}}>
            {props.children}
        </PlantContext.Provider>
    )
}

export {PlantContextProvider, PlantContext}