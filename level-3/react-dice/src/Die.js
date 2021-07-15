import React from "react"
import die1 from "./die1.png"
import die2 from "./die2.png"
import die3 from "./die3.png"
import die4 from "./die4.png"
import die5 from "./die5.png"
import die6 from "./die6.png"

class Die extends React.Component {
    findSrc() {
        var info = {
            src: "",
            alt: ""
        }
        if (this.props.number === 1) {
            info.src = die1
            info.alt = "1 dot"
        }
        else if (this.props.number === 2) {
            info.src = die2
            info.alt = "2 dots"
        }
        else if (this.props.number === 3) {
            info.src = die3
            info.alt = "3 dots"
        }
        else if (this.props.number === 4) {
            info.src = die4
            info.alt = "4 dots"
        }
        else if (this.props.number === 5) {
            info.src = die5
            info.alt = "5 dots"
        }
        else if (this.props.number === 6) {
            info.src = die6
            info.alt = "6 dots"
        }
        return info
    }

    render() {
        return (
            <div>
                <img src={this.findSrc().src} alt={this.findSrc().alt} className="dice"/>
            </div>
        )
    }
}

export default Die