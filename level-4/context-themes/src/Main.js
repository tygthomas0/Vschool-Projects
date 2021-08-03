import React from "react"
import {ThemeContextConsumer} from "./ThemeContext"

function Main(props) {
    return (
        <ThemeContextConsumer>
            {context => (
                <div className={`${context.theme} main`}>
                    <h1>Click button to toggle the {context.theme === "light" ? "Dark" : "Light"} theme!</h1>
                    <button onClick={context.toggleTheme}>Change Theme</button>
                </div>
            )}
        </ThemeContextConsumer>
    )
}

export default Main