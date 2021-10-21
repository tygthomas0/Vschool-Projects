import React, {useState, useEffect, useContext} from 'react'
import PoemList from './PoemList.js'
import Poem from './Poem.js'
import axios from 'axios'
import { UserContext } from '../context/UserProvider.js'

export default function Public(){
  const { allPoems, getAllPoems } = useContext(UserContext)
  
  useEffect(() => {
    getAllPoems()
  }, [])

  return (
    <div className="public">
      <PoemList poems={allPoems}/>
    </div>
  )
}