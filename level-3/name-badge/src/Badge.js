import React from "react"

class Badge extends React.Component {
    render() {
        var randomColor = Math.floor(Math.random()*16777215).toString(16);
        const styles = { backgroundColor: ("#" + randomColor) }

        return (
            <div className="badgeContainer">
                <div id="badgeHeaderContainer" style={styles}>
                    <h1>HELLO! My Name is: {this.props.firstName} {this.props.lastName}</h1>
                </div>
                <div id="infoContainer">
                    <p>Email: {this.props.email}</p>
                    <p>Phone #: {this.props.phone}</p>
                </div>
                    <h3 id="aboutHeader">About Me:</h3>
                <div id="aboutContainer">
                    <p>Place of Birth: {this.props.birthPlace}</p>
                    <p>Favorite Food: {this.props.favFood}</p>
                </div>    
                <p id="description">{this.props.desc}</p>
            </div>
        )
    }
}

export default Badge