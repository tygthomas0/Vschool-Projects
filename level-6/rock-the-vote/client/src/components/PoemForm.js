import React, { useState } from 'react'

export default function PoemForm(props){
  const initInputs = {
    title: props.title,
    description: props.description
  }

  const [inputs, setInputs] = useState(initInputs)
  const {addPoem, editPoem} = props

  function handleChange(e){
    const {name, value} = e.target
    setInputs(prevInputs => ({
      ...prevInputs,
      [name]: value
    }))
  }

  function handleSubmit(e){
    e.preventDefault()
    props.editing ? editPoem(props.poemID, inputs) : addPoem(inputs)
    setInputs(initInputs)
    props.editing ? window.location.reload(false) : console.log()
  }

  const { title, description } = inputs
  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        name="title" 
        value={title} 
        onChange={handleChange} 
        placeholder="Poem Title"/>
      <input 
        type="text" 
        name="description" 
        value={description} 
        onChange={handleChange} 
        placeholder="Poem Body"/>
      {props.editing ? <button>Edit Poem</button> : <button>Add Poem</button>}
    </form>
  )
}