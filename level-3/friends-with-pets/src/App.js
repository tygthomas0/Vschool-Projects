import React from "react"
import friends from "./friends"
import Friend from "./Friend"

function App() {
    const friendComponents = friends.map(friend => <Friend key={friend.name} name={friend.name} age={friend.age} pets={friend.pets}/>);

    return (
        <div>
            <h1>My Friends</h1>
            {friendComponents}
        </div>
    )
}

export default App;