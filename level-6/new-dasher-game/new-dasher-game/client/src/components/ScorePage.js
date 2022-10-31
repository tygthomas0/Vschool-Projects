import React, { useContext, useEffect } from 'react'
import TodoList from './TodoList.js'
import { UserContext } from '../context/UserProvider.js'

export default function ScorePage(){
    const {token, getAllScores, getUserScore} = useContext(UserContext)
    /*
    const userScoreObj = JSON.parse(localStorage.getItem("dasherHighScore")) || null
    let userScore
    if (userScoreObj !== null) {
        userScore = userScoreObj.score
    }
    console.log(userState.allScores)
*/
    
    useEffect(() => {
        //getUserScore()
        getAllScores()
    }, [])
    

  return (
    <div className="scorePage">
        {token ? 
          <>
            <h1>High Scores</h1>
            <TodoList />
          </>
            :
          <>
            <h1>Signup or Login to view scores!</h1>
          </>
        }
    </div>
  )
}