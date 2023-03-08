import React,{useState} from 'react'
import './Questions.css'

import { Link, useParams,useNavigate,useLocation } from 'react-router-dom'
import moment from 'moment';
import copy from 'copy-to-clipboard'
import Avatar from '../../components/Avatar';
import upVote from '../../assets/upvote.jpg';
import downVotes from '../../assets/downvote.jpg';
import DisplayAns from './DisplayAns';
import { useDispatch, useSelector } from 'react-redux';

import { postAnswer,deleteQuestion, voteQuestion} from '../../actions/question';

function QuestionDetails() {

    const { id } = useParams();
    //console.log(id)

    const questionList = useSelector(state => state.questionReducer)

   // console.log(questionList)
    
    const [Answer,setAnswer]= useState('');
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const location = useLocation(); 
    const url='https://stackoverflow-clone-project.onrender.com';

    const User= useSelector((state) => (state.currentUserReducer))

    const handlePostAns = (e, answerLength) => {
      e.preventDefault();

      if(User === null){
        alert("Login or Signup to answer")
        navigate('/Auth')
      }
    
      else{
        if(Answer === ''){
          alert('Enter an answer before submitting')
        }
        else{
          dispatch( postAnswer({id, noOfAnswers: answerLength + 1, answerBody: Answer, userAnswered: User.result.name, userId: User.result._id}))
        }
      }
    }


    const handleShare=()=>{
      copy(url + location.pathname)
      alert('Copied url :' + url+location.pathname)
    }

    const handleDelete =()=>{
      dispatch(deleteQuestion(id, navigate))
    }

    const handleUpvote =()=>{
      if (User === null) {
        alert("Login or Signup to down vote a question");
        navigate("/Auth");
      }
      dispatch( voteQuestion(id,'upVote'))
    }

    const handleDownvote =()=>{
      if (User === null) {
        alert("Login or Signup to down vote a question");
        navigate("/Auth");
      }
      dispatch( voteQuestion(id,'downVote'))
    }

  return (
    <div className='question-details-page'>
        {
            questionList.data === null ?
            <h1>Loading...</h1> 
            :
            <> 
             {/* //filter kisi specific id ko hi bs return krega */}
            {
            questionList.data.filter(question => question._id === id).map((question) =>(
              <div key={question._id}>

                <section className='question-details-container'>
                <h1>{question.questionTitle}</h1>
                <div className='question-details-container-2'>
                    <div>
                        <img src={upVote} alt="upvote" width='18' onClick={handleUpvote} className='votes-icon' />
                        <p>{question.upVote.length - question.downVote.length || 0}</p>
                        <img src={downVotes} alt="downvote" width='18' onClick={handleDownvote} className='votes.icon' />
                    </div>

                    <div style={{width: "100%"}}>
                        <p className='question-body'>{question.questionBody}</p>
                        <div className='question-details-tags'>
                            {
                                question.questionTags.map((tag)=>(
                                   <p key={tag}>{tag}</p>
                                ))
                            }
                        </div>

                        <div className='question-actions-user'>
                            <div>
                                <button type='button' onClick={handleShare}>Share</button>

                                {
                                  User?.result?._id === question?.userId && (
                                    <button type='button' onClick={handleDelete}>Delete</button>
                                  )
                                }
                            
                            </div>

                            <div>
                            <p>asked {moment(question.askedOn).fromNow()}</p>
                            <Link className='user-link' to={`/User/${question.userId}`}>
                                <Avatar backgroundColor="orange" px='8px' py='5px'>{question.userPosted.charAt(0).toUpperCase()}</Avatar>
                                <div>
                                    {question.userPosted}
                                </div>
                            </Link>
                            </div>
                        </div>
                    </div>
                </div>
                </section>

                {
                    question.noOfAnswers !== 0 && (
                      <section>
                      <h3>{question.noOfAnswers} Answers</h3>
                      <DisplayAns key={question._id} question={question} handleShare={handleShare} />
                      </section>  
                    )
                }

                <section className='post-ans-container'>

               <h3>Your Answer</h3>
                <form onSubmit={ (e) => {handlePostAns(e, question.answer.length) } }>

                  <textarea name="" id="" cols="30" rows="10"
                  onChange={ e => setAnswer(e.target.value)}>
                  </textarea>

                  <input type='submit' className='post-ans-btn' value='Post your ans' />
                </form>
                <p>
                  Browse other question tagged
                  {
                    question.questionTags.map((tags) =>(
                      <Link to='/Tags' key={tags} className='ans-tags'>{tags}</Link>
                    )) 
                  } or
                  <Link to='/Askquestion' style={{textDecoration: 'none', color:'#009dff'}}> Ask your own question</Link>
                </p>
                </section>
              </div>  
            ))
            }
            </>
        }
    </div>
  )
}

export default QuestionDetails