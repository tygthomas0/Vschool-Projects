import React, {useContext} from 'react'
import Poem from './Poem.js'
import { PoemContext } from '../context/PoemProvider.js'

export default function PoemList(props){
  const {poems} = props
  return (
    <div className="poem-list">
      {poems.map(poem => <Poem {...poem} key={poem._id} />)}
    </div>
  )
}