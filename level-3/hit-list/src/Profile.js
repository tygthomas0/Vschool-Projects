import React from "react"

class Profile extends React.Component {
    render() {
        return (
            <div className="profile">
                <img src={this.props.src} alt={this.props.name} className="targetImg"></img>
                <h3 className="targetName">{this.props.name}</h3>
            </div>
        )
    }
}

export default Profile