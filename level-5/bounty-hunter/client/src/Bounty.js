import React, { useState } from "react"
import BountyForm from "./BountyForm.js"

export default function Bounty(props) {
    const { firstName, lastName, living, bounty, affiliation, _id, deleteBounty, editBounty } = props
    const [editToggle, setEditToggle] = useState(false)

    return (
        <div className="bounty">
            { !editToggle ?
                <>
                    <h1>{firstName} {lastName}</h1>
                    <h3>Affiliation: {affiliation}</h3>
                    <p>Status: {living === true ? "Alive" : "Dead"}</p>
                    <p>Value: ${bounty}</p>
                    <button className="edit-btn" onClick={() => setEditToggle(prevToggle => !prevToggle)} >Edit</button>
                    <button className="delete-btn" onClick={() => deleteBounty(_id)} >Delete</button>
                </>
                :
                <>
                    <BountyForm firstName={firstName} lastName={lastName} living={living} bounty={bounty} affiliation={affiliation} btnText="Submit Edit" submit={editBounty} _id={_id} />
                    <button onClick={() => setEditToggle(prevToggle => !prevToggle)} >Close</button>
                </>
            }
        </div>
    )
}