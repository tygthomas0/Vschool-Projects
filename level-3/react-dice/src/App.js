import React from "react"
import DiceBox from "./DiceBox"

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            num1: 1,
            num2: 1,
            num3: 1,
            num4: 1,
            num5: 1,
            numRolls: 0
        }
        console.log(this.state)
        this.rollDice = this.rollDice.bind(this)
    }

    rollDice() {
        var newState = this.state
        newState.num1 = Math.floor(Math.random() * 6) + 1
        newState.num2 = Math.floor(Math.random() * 6) + 1
        newState.num3 = Math.floor(Math.random() * 6) + 1
        newState.num4 = Math.floor(Math.random() * 6) + 1
        newState.num5 = Math.floor(Math.random() * 6) + 1
        
        this.setState(newState)
    }

    render() {
        return (
            <div>
                <h1 id="header">React Dice Roller</h1>
                <DiceBox die1={this.state.num1} die2={this.state.num2} die3={this.state.num3} die4={this.state.num4} die5={this.state.num5}/>
                <button onClick={this.rollDice}>Re-roll Dice</button>
            </div>
        );
    }
}

export default App;