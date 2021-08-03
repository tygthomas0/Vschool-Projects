import React from "react"
import {ThemeContextConsumer} from "./ThemeContext"

function Navbar(props) {
    return (
        <ThemeContextConsumer>
            {context => (
                <div className={`${context.theme} navbar`}>
                    <h3>Home</h3>
                    <h3>About</h3>
                    <h3>Contact</h3>
                </div>
            )}
        </ThemeContextConsumer>
    )
}

export default Navbar