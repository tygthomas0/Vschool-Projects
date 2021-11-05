import React, {useContext, useEffect} from 'react'
import Poem from './Poem.js'
import { UserContext } from '../context/UserProvider.js'

export default function PoemList(props){
  const {poems} = props

  const {getAllPoems} = useContext(UserContext)

  useEffect(() => {
    getAllPoems()
  }, [])

  return (
    <div className="poem-list">
      {poems.map(poem => <Poem {...poem} key={poem._id} />)}
    </div>
  )
}