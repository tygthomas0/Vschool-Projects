import React from "react"
import Card from "./Card"
import {ThemeContextConsumer} from "./context"

function CardList() {
    return (
        <ThemeContextConsumer>
            {context => (
                <div id="cardContainer">
                    {context.uglyThings.map(thing => <Card key={thing._id} id={thing._id} title={thing.title} description={thing.description} imgUrl={thing.imgUrl} />)}
                </div>
            )}
        </ThemeContextConsumer>
    )
}

export default CardList