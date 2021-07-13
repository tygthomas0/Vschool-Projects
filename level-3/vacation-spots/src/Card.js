import React from "react";

function Card(props) {
    var dollars = "";
    if (props.price <= 500) {
        dollars = "$";
    }
    else if (props.price <= 1000) {
        dollars = "$$";
    }
    else {
        dollars = "$$$";
    }

    const cardStyle = {
            border: "1px solid black",
            borderRadius: "10px",
            width: "30%",
            display: "inline-block",
            margin: "1%"
    }
    if (props.timeToGo === "Spring") {
        cardStyle.backgroundColor = "green";
    }
    else if (props.timeToGo === "Summer") {
        cardStyle.backgroundColor = "red";
    }
    else if (props.timeToGo === "Fall") {
        cardStyle.backgroundColor = "gold";
    }
    else {
        cardStyle.backgroundColor = "aliceblue";
    }
    
    const wordStyle = {
        textAlign: "center"
    }

    return (
        <div className="card" style={cardStyle}>
            <h1 className="cardHeader" style={wordStyle}>{props.place}</h1>
            <h3 className="timeHeader" style={wordStyle}>Best Time To Go: {props.timeToGo}</h3>
            <p className="price" style={wordStyle}>{dollars}</p>
        </div>
    )
}

export default Card;