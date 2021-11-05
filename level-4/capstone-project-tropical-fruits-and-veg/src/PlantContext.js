import React, {useState, useEffect} from "react"
const axios = require("axios")
const PlantContext = React.createContext()

function PlantContextProvider(props) {
    const [plants, setPlants] = useState([])

    const [theme, setTheme] = useState("default")

    const [loading, setLoading] = useState(true)


    function getPlants(searchArea = "search", searchTerm = "all") {
        //searchArea should only be either "search" or "tfvitem"

        axios.get(`https://vschool-cors.herokuapp.com?url=https://tropicalfruitandveg.com/api/tfvjsonapi.php?${searchArea}=${searchTerm}`)
            .then(res => {
                console.log(res)
                var tempData = res.data.results
                if (searchArea === "search") {
                    for (let i = 0; i < tempData.length; i++) {
                        var url = tempData[i].imageurl.slice(0, 31)
                        var extension = tempData[i].imageurl.slice(47, tempData[i].imageurl.length)
                        var combined = url.concat(extension)
                        tempData[i].imageurl = combined
                    }
                }
                setPlants(plants => plants = res.data.results)
                setLoading(false)
            })
            .catch(err => console.log(err))
    }

    function changeTheme(newTheme) {
        console.log("new theme: ", newTheme)
        if (newTheme === "default") {
            document.body.style.backgroundColor = "#FFDFA3"
        }
        else if (newTheme === "blue") {
            document.body.style.backgroundColor = "#1B97BD"
        }
        else if (newTheme === "green") {
            document.body.style.backgroundColor = "#1B9761"
        }
        else if (newTheme === "brown") {
            document.body.style.backgroundColor = "#BA6800"
        }
        else if (newTheme === "pink") {
            document.body.style.backgroundColor = "#D83A80"
        }
        else {
            document.body.style.backgroundColor = "#8223FF"
        }
        setTheme(theme => theme = newTheme)
        console.log("theme in state after changing: ", theme)
    }

    useEffect(() => {
        document.body.style.backgroundColor = "#FFDFA3";
        getPlants()
    }, [])

    return (
        <PlantContext.Provider value={{plants, getPlants, theme, changeTheme, loading, setLoading}}>
            {props.children}
        </PlantContext.Provider>
    )
}

export {PlantContextProvider, PlantContext}