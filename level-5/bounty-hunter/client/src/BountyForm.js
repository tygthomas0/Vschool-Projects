import React, { useState } from "react"

export default function BountyForm(props) {
    const initInputs = { firstName: props.firstName || "", lastName: props.lastName || "", living: props.living ? true : false, bounty: props.bounty || "", affiliation: props.affiliation || "" }
    const [inputs, setInputs] = useState(initInputs)

    function handleChange(e) {
        const { name, value } = e.target
        setInputs(prevInputs => ({...prevInputs, [name]: value}))
    }

    function handleSubmit(e) {
        e.preventDefault()
        props.submit(inputs, props._id)
        setInputs(initInputs)
    }

    function handleCheckbox() {
        setInputs(prevInputs => ({...prevInputs, living: !prevInputs.living}))
    }

    return (
        <div>
            <form onSubmit={handleSubmit} className="bountyForm">
                <input type="text" name="firstName" value={inputs.firstName} onChange={handleChange} placeholder="First Name" />
                <input type="text" name="lastName" value={inputs.lastName} onChange={handleChange} placeholder="Last Name" />
                <input type="text" name="bounty" value={inputs.bounty} onChange={handleChange} placeholder="Bounty Value" />
                <input type="text" name="affiliation" value={inputs.affiliation} onChange={handleChange} placeholder="Affiliation" />
                <label>Living? <input type="checkbox" name="living" onChange={handleCheckbox} checked={inputs.living} id="livingInput" /></label>
                <button id="formButton"><span className="buttonText">{props.btnText}</span></button>
            </form> 
        </div>
        
    )
}