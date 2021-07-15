import React from "react"
import Die from "./Die"

class DiceBox extends React.Component {
    render() {
        return (
            <div id="flex">
                <Die number={this.props.die1}/>
                <Die number={this.props.die2}/>
                <Die number={this.props.die3}/>
                <Die number={this.props.die4}/>
                <Die number={this.props.die5}/>
            </div> 
        )
    }
}

export default DiceBox