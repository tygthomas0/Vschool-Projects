import React from "react"
import {ThemeContextConsumer} from "./context"

function Card(props) {
    return (
        <ThemeContextConsumer>
            {context => (
                <div className="card">
                    <h2>{props.title}</h2>
                    <p>{props.description}</p>
                    <img src={props.imgUrl} alt="ugly thing"></img>
                    <button onClick={() => context.editInfo(props.id)}>Edit</button>
                    <button onClick={() => context.deleteInfo(props.id)}>Delete</button>
                </div>
            )}
            
        </ThemeContextConsumer>
        
    )
}

export default Card