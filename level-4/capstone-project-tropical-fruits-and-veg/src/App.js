import React, {useContext} from "react"
import {Link, Switch, Route} from "react-router-dom"
import {BrowserRouter as Router} from "react-router-dom"
import Home from "./Home"
import SearchForm from "./SearchForm"
import PlantCard from "./PlantCard"

function App() {


  return (
    <Router>  
      <div className="App">
          <Link to="/">Home</Link>
          <Link to="/search">Search</Link>
      </div>
      <div>
          <Switch>
              <Route exact path="/"><Home /></Route>
              <Route path="/search"><SearchForm /></Route>
              <Route exact path="/:plantID"><PlantCard /></Route>
          </Switch>
      </div>
    </Router>
  );
}

export default App;