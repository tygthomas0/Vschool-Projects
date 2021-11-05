import React from 'react';
import Badge from "./Badge"

class App extends React.Component {
  constructor() {
    super()
    this.state = {
        firstName: "",
        lastName: "",
        email: "",
        birthPlace: "",
        phone: "",
        favFood: "",
        desc: ""
    }
    this.badgeKey = 0
    this.badges = []

    this.handleChange = this.handleChange.bind(this)
    this.createBadge = this.createBadge.bind(this)
  }

  handleChange(event) {
    const {name, value} = event.target
    this.setState({
      [name]: value
    })
  }

  createBadge(event) {
    event.preventDefault();
    var uncompletedAreas = [];

    for (const key in this.state) {
      if (this.state[key] === undefined || this.state[key].length < 3) {
        uncompletedAreas.push(key)
      }
    }


    if (uncompletedAreas.length > 0) {
      alert("Each input requires at least 3 characters.\nYou need to complete these areas before creating your badge: " + uncompletedAreas)
    }
    else {
      this.badgeKey++
      this.badges.push(<Badge key={this.badgeKey} firstName={this.state.firstName} lastName={this.state.lastName} email={this.state.email} birthPlace={this.state.birthPlace} phone={this.state.phone} favFood={this.state.favFood} desc={this.state.desc}/>)
      this.setState( {firstName: "", lastName: "", email: "", birthPlace: "", phone: "", favFood: "", desc: "" } )
    }
  }
  
  render () {
    return (
      <div id="mainContainer">
        <h1 id="pageHeader">Create a Badge</h1>
        <form id="badgeForm">
          <input type="text" name="firstName" value={this.state.firstName} placeholder="First Name" onChange={this.handleChange}/>
          <input type="text" name="lastName" value={this.state.lastName} placeholder="Last Name" onChange={this.handleChange}/>
          <input type="email" name="email" value={this.state.email} placeholder="Email" onChange={this.handleChange}/>
          <input type="text" name="birthPlace" value={this.state.birthPlace} placeholder="Place of Birth" onChange={this.handleChange}/>
          <input type="tel" name="phone" value={this.state.phone} placeholder="Phone Number" onChange={this.handleChange}/>
          <input type="text" name="favFood" value={this.state.favFood} placeholder="Favorite Food" onChange={this.handleChange}/>
          <textarea placeholder={"Tell us about yourself..."} value={this.state.desc} name="desc" onChange={this.handleChange}/>
          <button onClick={this.createBadge}>Create Badge</button>
        </form>
        <br></br><br></br>
        <label> <h1 id="badgeHeader">Badges</h1>
          <div>
            {this.badges}
          </div>
        </label>
      </div>
      
    )
  }
}

export default App;