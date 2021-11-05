import React, { useState, useEffect } from "react"
import axios from "axios"
import BountyForm from "./BountyForm"
import Bounty from "./Bounty"

function App() {
  const [bounties, setBounties] = useState([])

  function getBounties() {
    axios.get("/bounties") 
      .then(res => {
        setBounties(res.data)
      })
      .catch(err => console.log(err.response.data.errMsg))
  }

  function addBounty(newBounty) {
    axios.post("/bounties", newBounty)
      .then(res => {
        setBounties(prevBounties => [...prevBounties, res.data])
      })
      .catch(err => console.log(err))
  }

  function deleteBounty(bountyID) {
    axios.delete(`/bounties/${bountyID}`)
      .then(res => {
        setBounties(prevBounties => prevBounties.filter(bounty => bounty._id !== bountyID))
      })
      .catch(err => console.log(err))
  }

  function editBounty(updates, bountyID) {
    axios.put(`/bounties/${bountyID}`, updates) 
      .then(res => {
        setBounties(prevBounties => prevBounties.map(bounty => bounty._id !== bountyID ? bounty : res.data))
      })
      .catch(err => console.log(err))
  }

  useEffect(() => {
    getBounties()
  }, [])

  return (
    <div id="container">
      <h1 id="pageHeader">Bounty Board</h1>
      <div id="outerBountyForm">
        <BountyForm submit={addBounty} btnText="Add Bounty" />
      </div>
      
      <div className="bountyContainer">
         {bounties.map(bounty => <Bounty {...bounty} key={bounty._id} deleteBounty={deleteBounty} editBounty={editBounty} />) }
      </div>
    </div>
  );
}

export default App;