import React, {useContext} from "react"
import {PlantContext} from "./PlantContext"
import {Link, Switch, Route} from "react-router-dom"
import {BrowserRouter as Router} from "react-router-dom"
import Home from "./Home"
import MyList from "./MyList"
import PlantCard from "./PlantCard"

function App() {
  const {getPlants} = useContext(PlantContext)

  return (
    <Router>  
      <div className="navbar maxWidthContainer">
          <Link to="/" onClick={() => getPlants()} style={{ textDecoration: "none" }}>Home</Link>
          <Link to="/themePicker" style={{ textDecoration: "none" }}>Pick a Theme</Link>
      </div>
      <div>
          <Switch>
              <Route exact path="/"><Home /></Route>
              <Route path="/themePicker"><MyList /></Route>
              <Route exact path="/:plantID"><PlantCard /></Route>
          </Switch>
      </div>
    </Router>
  );
}

export default App;