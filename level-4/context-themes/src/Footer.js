import React from "react"
import {ThemeContextConsumer} from "./ThemeContext"

function Footer(props) {
    return (
        <ThemeContextConsumer>
            {context => (
                <div className={`${context.theme} footer`}>
                    <h3>A really awesome footer</h3>
                </div>
            )}
        </ThemeContextConsumer>
    )
}

export default Footer