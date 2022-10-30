import React, { useContext, useState } from 'react'
import { UserContext } from '../context/UserProvider'
import checkedDownvote from '../images/checkedDownvote.png'
import uncheckedDownvote from '../images/uncheckedDownvote.png'
import checkedUpvote from '../images/checkedUpvote.png'
import uncheckedUpvote from '../images/uncheckedUpvote.png'
import CommentForm from './CommentForm'
import CommentList from './CommentList'
import PoemForm from './PoemForm'

export default function Poem(props){
  const initInputs = { editing: false }
  const [inputs, setInputs] = useState(initInputs)

  const {title, description, points, _id} = props

  const { user, upvote, downvote, allPoems, deletePoem, editPoem, addPoem } = useContext(UserContext)

  const indexInAll = allPoems.findIndex(poem => {
    if (poem._id === _id) {
      return true
    }
  })

  function toggleForm() {
    setInputs(prevState => ({
        ...prevState,
        editing: !editing
    }))
  }

  const { editing } = inputs
  return (
      <div className="poem">
        <h1>{title}</h1>
        <h3>{description}</h3>
        <div>
          <button onClick={() => upvote(user._id, _id)} className="votingButton">{allPoems[indexInAll].upVoters.includes(user._id) ? <img src={checkedUpvote} alt="upvoted" width="100%" height="2%"/> : <img src={uncheckedUpvote} alt="not upvoted" width="100%" height="2%"/>}</button>
          <h3 className="pointsCounter">{ points }</h3>
          <button onClick={() => downvote(user._id, _id)} className="votingButton">{allPoems[indexInAll].downVoters.includes(user._id) ? <img src={checkedDownvote} alt="downvoted" width="100%" height="2%"/> : <img src={uncheckedDownvote} alt="not downvoted" width="100%" height="2%"/>}</button>
          {allPoems[indexInAll].user === user._id ? 
              <>{editing ? 
                         <>
                            <PoemForm addPoem={addPoem} editPoem={editPoem} title={title} description={description} editing={true} poemID={_id}/>
                            <button onClick={toggleForm}>Cancel</button>
                         </> 
                         : <button onClick={toggleForm}>Edit Poem</button>}</> 
                                                  : <></>}
          {allPoems[indexInAll].user === user._id ? <button onClick={() => deletePoem(_id)}>Delete Poem</button> : <></>}
        </div>
        <CommentForm poemId={_id} />
        <CommentList poemId={_id}/>
      </div>
    
  )
}