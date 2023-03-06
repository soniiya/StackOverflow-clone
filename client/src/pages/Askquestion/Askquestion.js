import React,{useState} from 'react'
import {useDispatch, useSelector} from 'react-redux';
import {useNavigate} from 'react-router-dom';

import './Askquestion.css';
import {askquestion} from '../../actions/question'

function Askquestion() {
  const [questionTitle,setQuestiontitle] = useState('');
  const [questionBody, setQuestionbody] = useState('');
  const [questionTags,setQuestiontags] = useState(''); 

  const dispatch= useDispatch();
  const User = useSelector((state) => (state.currentUserReducer))
  const navigate = useNavigate();

// console.log(User);

  const handleSubmit = (e) =>{
    e.preventDefault();
    console.log(User?.result._id)

    //console.log({questionTitle,questionBody,questionTags})
    //console.log(User.result.name)

   dispatch(askquestion( {questionTitle,questionBody,questionTags,  userPosted: User?.result.name, userId: User?.result._id }, navigate))
  }

  const handleEnter = (e) =>{
    if(e.key === 'Enter'){
      setQuestionbody(questionBody + "\n")
    }
  }

  return (
    <div className='ask-question'>
      <div className='ask-ques-container'>
        <h1>Ask a public Question</h1>

        <form onSubmit={handleSubmit}>
          <div className='ask-form-container'>

            <label htmlFor='ask-ques-title'>
              <h4>Title</h4>
              <p>Be specific and imagine you're asking a question to another person.</p>
              <input type="text" id="ask-ques-title" placeholder='e.g. Is there an R function for finding the index of an element in a vection?'
              onChange={(e) => {
                setQuestiontitle(e.target.value)
              }} />
            </label>

            <label htmlFor='ask-ques-title'>
              <h4>Body</h4>
              <p>Include all the information someone would need to answer your question</p>
              <textarea type="text" cols="30" rows="10" id="ask-ques-title"
                    onChange={(e) => {
                        setQuestionbody(e.target.value)
                    }} 
                    onKeyPress={handleEnter} >
                    </textarea>
            </label>

            <label htmlFor='ask-ques-title'>
              <h4>Tags</h4>
              <p>Add up to 5 tags to specify what your question is about</p>
              <input type="text" id="ask-ques-title" placeholder='e.g. react.js'
              onChange={(e) => {
                 setQuestiontags(e.target.value.split(" "))
               }} />
            </label>
          </div>

          <input type='submit' value='Review your question' className='review-btn' />
        </form>
      </div>
    </div>
  )
}

export default Askquestion