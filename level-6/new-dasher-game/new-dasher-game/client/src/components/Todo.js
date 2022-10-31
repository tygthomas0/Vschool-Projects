import React from 'react'

export default function Todo(props){
  const { username, score } = props
  return (
    <div className="score">
      <h3>{ username }</h3>
      <h3>{ score }</h3>
    </div>
  )
}