import React from "react"
import Square from "./Square"

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            colors: ["white", "white", "white", "white"]
        }
        this.smallTimeDJ = this.smallTimeDJ.bind(this)
        this.partyDJ = this.partyDJ.bind(this)
        this.leftBottomBlue = this.leftBottomBlue.bind(this)
        this.rightBottomBlue = this.rightBottomBlue.bind(this)
        this.changeTopLeft = this.changeTopLeft.bind(this)
        this.changeTopRight = this.changeTopRight.bind(this)
        this.changeBottomLeft = this.changeBottomLeft.bind(this)
        this.changeBottomRight = this.changeBottomRight.bind(this)
    }

    smallTimeDJ() {
        if (this.state.colors[0] === "white") {
            let colors = [...this.state.colors]
            for (let i = 0; i < this.state.colors.length; i++) {
                let color = "black"
                colors[i] = color
            }
            this.setState({colors})
        }
        
        else {
            let colors = [...this.state.colors]
            for (let i = 0; i < this.state.colors.length; i++) {
                let color = "white"
                colors[i] = color
            }
            this.setState({colors})
        }
    }
    
    partyDJ() {
      if (this.state.colors[0] !== "purple") {
          let colors = [...this.state.colors]
          for (let i = 0; i < this.state.colors.length / 2; i++) {
              let color = "purple"
              colors[i] = color
          }
          this.setState({colors})
      }
      
      else {
          let colors = [...this.state.colors]
          for (let i = 0; i < this.state.colors.length / 2; i++) {
              let color = colors[i + 2];
              colors[i] = color
          }
          this.setState({colors})
      }
    }

    leftBottomBlue() {
      if (this.state.colors[2] !== "blue") {
          let colors = [...this.state.colors]
          colors[2] = "blue"
          this.setState({colors})
      }
      
      else {
          let colors = [...this.state.colors]
          colors[2] = colors[0]
          this.setState({colors})
      }
    }

    rightBottomBlue() {
      if (this.state.colors[3] !== "blue") {
          let colors = [...this.state.colors]
          colors[3] = "blue"
          this.setState({colors})
      }
      
      else {
          let colors = [...this.state.colors]
          colors[3] = colors[0]
          this.setState({colors})
      }
    }

    changeTopLeft() {
      if (this.state.colors[0] !== "orange") {
          let colors = [...this.state.colors]
          colors[0] = "orange"
          this.setState({colors})
      }
      
      else {
          let colors = [...this.state.colors]
          colors[0] = colors[1]
          this.setState({colors})
      }
    }

    changeTopRight() {
      if (this.state.colors[1] !== "green") {
          let colors = [...this.state.colors]
          colors[1] = "green"
          this.setState({colors})
      }
      
      else {
          let colors = [...this.state.colors]
          colors[1] = colors[2]
          this.setState({colors})
      }
    }

    changeBottomLeft() {
      if (this.state.colors[2] !== "yellow") {
          let colors = [...this.state.colors]
          colors[2] = "yellow"
          this.setState({colors})
      }
      
      else {
          let colors = [...this.state.colors]
          colors[2] = colors[3]
          this.setState({colors})
      }
    }

    changeBottomRight() {
      if (this.state.colors[3] !== "pink") {
          let colors = [...this.state.colors]
          colors[3] = "pink"
          this.setState({colors})
      }
      
      else {
          let colors = [...this.state.colors]
          colors[3] = colors[0]
          this.setState({colors})
      }
    }

    render() {
        return (
          <div id="container">
              <div id="grid">
                  <Square color={this.state.colors[0]} />
                  <Square color={this.state.colors[1]} />
                  <Square color={this.state.colors[2]} />
                  <Square color={this.state.colors[3]} />
              </div>
              <button className="button" onClick={this.smallTimeDJ}>White/Black</button>
              <button className="button" onClick={this.partyDJ}>Purple Top</button>
              <button className="button" onClick={this.leftBottomBlue}>Left Bottom Blue</button>
              <button className="button" onClick={this.rightBottomBlue}>Right Bottom Blue</button>
              <button className="button" onClick={this.changeTopLeft}>Change Top Left</button>
              <button className="button" onClick={this.changeTopRight}>Change Top Right</button>
              <button className="button" onClick={this.changeBottomLeft}>Change Bottom Left</button>
              <button className="button" onClick={this.changeBottomRight}>Change Bottom Right</button>
          </div>
            
        )
    }

}

export default App;