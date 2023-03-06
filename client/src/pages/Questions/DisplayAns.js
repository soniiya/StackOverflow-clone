import React from 'react'
import './Questions.css'
import Avatar from '../../components/Avatar'
import {Link, useParams} from 'react-router-dom'
import moment from 'moment'
import { useSelector, useDispatch} from 'react-redux'
import { deleteAnswer } from '../../actions/question'

function DisplayAns({question,handleShare}) {

  const User = useSelector(state => state.currentUserReducer)
  const {id} = useParams();
  const dispatch = useDispatch()

  const handleDelete = (answerId, noOfAnswers) =>{
    dispatch( deleteAnswer(id, answerId, noOfAnswers - 1))
  }

  return (
    <div>
    {
      question.answer.map((ans)=>(
        <div className='display-ans' key={ans._id}>
        <p>{ans.answerBody}</p>

        <div className='question-actions-user'>
            <div>
                <button type='button' onClick={handleShare}>Share</button>
                {
                   User?.result?._id === ans?.userId && (
                     <button type='button' onClick={handleDelete(ans._id, question.noOfAnswers)}>Delete</button>
                  )
                }
            </div>
            <div>
              <p>answered {moment(ans.answeredOn).fromNow()}</p>
            <Link className='user-link' to={`/User/${question.userId}`}>
                <Avatar backgroundColor="green" px='8px' py='5px'>{ans.userAnswered.charAt(0).toUpperCase()}</Avatar>
                    <div>
                        {ans.userAnswered}
                    </div>
                </Link>
            </div>
        </div>

        </div>
      ))  
    }
    </div>
  )
}

export default DisplayAns