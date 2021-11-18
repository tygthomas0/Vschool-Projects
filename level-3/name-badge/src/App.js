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
        desc: "",
        navClosed: true
    }
    this.badgeKey = 0
    this.badges = []

    this.handleChange = this.handleChange.bind(this)
    this.createBadge = this.createBadge.bind(this)
    this.openNav = this.openNav.bind(this)
    this.closeNav = this.closeNav.bind(this)
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

  openNav() {
    document.getElementById("mySidenav").style.width = "300px";
    var hamburgers = document.getElementsByClassName("hamburger")
    for (let i = 0; i < hamburgers.length; i++) {
      hamburgers[i].style.backgroundColor = "white"
    }
    this.setState( {navClosed: false} )
  }
  
  closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    var hamburgers = document.getElementsByClassName("hamburger")
    for (let i = 0; i < hamburgers.length; i++) {
      hamburgers[i].style.backgroundColor = "black"
    }
    this.setState( {navClosed: true} )
  }

  render () {
    return (
      <>
        <div onClick={this.state.navClosed ? this.openNav : this.closeNav} id="navigation">
          <div className="hamburger"></div>
          <div className="hamburger"></div>
          <div className="hamburger"></div>
        </div>
        <div id="mySidenav" class="sidenav">
        <a href="https://www.tylergthomas.com">Home</a>
          <a href="https://artic.tylergthomas.com">ArtIC Digital Gallery</a>
          <a href="https://blog-props.tylergthomas.com">Blog Props</a>
          <a href="https://ugly-things.tylergthomas.com">Ugly Things Forum</a>
          <a href="https://tropicalfav.tylergthomas.com">Tropical Fruits and Veggies</a>
          <a href="https://meme-generator.tylergthomas.com">Meme Generator</a>
          <a href="https://name-badge.tylergthomas.com">Name Badge Creator</a>
        </div>
        
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
      </>
    )
  }
}

export default App;