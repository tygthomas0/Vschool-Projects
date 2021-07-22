import React from 'react';
const axios = require("axios")

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      color: ""
    }
    //this.randomColor = this.randomColor.bind(this)
  }

  randomColor = () => {
      axios.get(`https://www.colr.org/json/color/random?timestamp=${new Date().getTime()}`)
        .then(data => {
          this.setState({
            color: "#" + data.data.colors[0].hex
          })
          console.log(this.state.color)
        })
        .catch(err => console.log(err))
  }
  
  render() {
    const styles = {
      backgroundColor: this.state.color
    }

    return (
      <div id="container">
          <div id="color" style={styles}></div>
          <button onClick={this.randomColor}>Generate Random Color</button>
      </div>
    );
  }
}

export default App;