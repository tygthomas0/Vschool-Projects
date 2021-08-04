import React from "react"
import {ThemeContextConsumer} from "./context"

function Form() {
    return (
        <ThemeContextConsumer>
            {context => (
                <div id="formContainer">
                    <h1>Ugly Things Forum</h1>
                    <h3>Post the things you hate to see</h3>
                    <input type={"text"} name={"title"} value={context.title} placeholder={"Title"} onChange={context.handleChange}></input>
                    <input type={"text"} name={"description"} value={context.description} placeholder={"Description"} onChange={context.handleChange}></input>
                    <input type={"text"} name={"imgUrl"} value={context.imgUrl} placeholder={"Img URL"} onChange={context.handleChange}></input>
                    <button onClick={() => context.submitInfo({title: context.title, description: context.description, imgUrl: context.imgUrl})}>Submit Ugly Thing</button>
                </div>
            )}                
        </ThemeContextConsumer>
    )
}

export default Form