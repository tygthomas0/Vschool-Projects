import React, {useContext, useEffect} from 'react'
import PoemForm from './PoemForm.js'
import PoemList from './PoemList.js'
import Poem from './Poem.js'
import { UserContext } from '../context/UserProvider.js'

export default function Profile(){
  const { user: { username }, addPoem, poems, getAllPoems} = useContext(UserContext)

  useEffect(() => {
    getAllPoems()
  }, [])
  
  return (
    <div className="profile">
      <h1>Welcome @{username}!</h1>
      <h3>Add A Poem</h3>
      <PoemForm addPoem={addPoem}/>
      <h3>Your Poems</h3>
      <PoemList poems={poems}/>
    </div>
  )
}