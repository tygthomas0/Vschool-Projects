import React, { useState } from "react"
import BountyForm from "./BountyForm.js"

export default function Bounty(props) {
    const { firstName, lastName, living, bounty, affiliation, _id, deleteBounty, editBounty } = props
    const [editToggle, setEditToggle] = useState(false)

    function editAndSave(updates, bountyID) {
        editBounty(updates, bountyID)
        setEditToggle(prevToggle => !prevToggle)
    }

    return (
        <div className="bounty">
            { !editToggle ?
                <div id="completeBounty">
                    <h1 className="bountyHeader">{firstName} {lastName}</h1>
                    <h3 className="bountyAffiliation">Affiliation <span className="fontWorkaround">:</span> {affiliation}</h3>
                    <p className="bountyP">Status<span className="fontWorkaround">:</span> {living === true ? "Alive" : "Dead"}</p>
                    <p className="bountyP">Worth {bounty} dollars</p>
                    <button className="formButton" onClick={() => setEditToggle(prevToggle => !prevToggle)} >Edit</button>
                    <button className="formButton" onClick={() => deleteBounty(_id)} >Cash In</button>
                </div>
                :
                <div>
                    <BountyForm firstName={firstName} lastName={lastName} living={living} bounty={bounty} affiliation={affiliation} btnText="Submit Edit" submit={editAndSave} _id={_id} />
                    <button onClick={() => setEditToggle(prevToggle => !prevToggle)} className="formButton">Close</button>
                </div>
            }
        </div>
    )
}