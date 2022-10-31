import React, {useContext} from 'react'
import { UserContext } from '../context/UserProvider.js'
import Todo from './Todo.js'

export default function TodoList(){
  const { ...userState } = useContext(UserContext)
  const {allScores} = userState
  return (
    <div className="todo-list">
      { allScores.map(todo => <Todo {...todo} key={todo._id} score={todo.score} username={todo.username}/>) }
    </div>
  )
}