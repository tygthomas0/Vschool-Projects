import React from "react"

class Square extends React.Component {
    initializeStyling() {
        const style = {
            width: "150px",
            height: "150px",
            border: "1px solid black",
            backgroundColor: this.props.color
        }
        return style
    }
    
    render() {
        return (
            <div className="square" style={this.initializeStyling()}></div>
        )
    }
}

export default Square