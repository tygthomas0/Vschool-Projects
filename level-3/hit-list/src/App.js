import axios from "axios"
import React from "react"
import Profile from "./Profile"
import Header from "./Header"

class App extends React.Component {
  constructor() {
    super()
    this.state = {
        loading: false,
        targetData: [],
        targetProfiles: []
    }

  }
  
  componentDidMount() {
      this.setState( {loading: true} )
      axios.get("https://raw.githubusercontent.com/VSchool/vschool-api/master/static/hitlist.json")
        .then(data => {
            this.setState({
                loading: false,
                targetData: data.data,
                targetProfiles: data.data.map(target => <Profile key={target.name} name={target.name} src={target.image}/>)
            })
        })
        .catch(err => console.log(err))
  }

  render() {
    if (this.state.loading) {
      return (
          <div>
              <Header />
              <h1>Loading Target Profiles...</h1>
          </div>
      )
    }
    else {
      return (
        <div>
            <Header />
            <div id="profileContainer">
              {this.state.targetProfiles}
            </div>
        </div>
      )
    }
    
  }
  
}

export default App;