import React from "react";
import Card from "./Card";
import vacationSpots from "./vacationSpots";

function App() {
    const vacationComponents = vacationSpots.map(vac => <Card key={vac.place} place={vac.place} price={vac.price} timeToGo={vac.timeToGo} />);

    return (
        <div>
            <h1 className="header">Vacation Spots</h1>
            {vacationComponents}
        </div>
    )

}

export default App;