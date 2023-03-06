import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom';
import QuestionsList from './QuestionsList';
import './HomeMainbar.css';

import {useSelector} from 'react-redux';

function HomeMainbar() {

  const location=useLocation();
  const user=1;
  const navigate=useNavigate();

  const questionList =  useSelector(state => state.questionReducer)

  //console.log(questionList)

//   const questionList=[{
//     _id: 1,
//     upVotes: 3,
//     downVotes: 2,
//     noOfAnswers: 2,
//     questionTitle: "What is a function?",
//     questionBody: "It meant to be",
//     questionTags: ["java","node.js","react.js","mongoDB"],
//     userPosted: "mano",
//     userId:1,
//     askedOn: "jan 1",
//     answer:[{
//       answerBody: "Answer",
//       userAnswered: "kumar",
//       answeredOn: "jan 2",
//       userId: 2
//     }]
//   },{
//     _id: 2,
//     upVotes: 3,
//     downVotes:2,
//     noOfAnswers: 2,
//     questionTitle: "What is a function?",
//     questionBody: "It meant to be",
//     questionTags: ["javaScript","R","python"],
//     userPosted: "mano",
//     askedOn: "jan 1",
//     answer:[{
//       answerBody: "Answer",
//       userAnswered: "kumar",
//       answeredOn: "jan 2",
//       userId: 2
//     }]
//   },
//   {
//     _id: 3,
//     upVotes: 3,
//     downVotes: 2,
//     noOfAnswers: 2,
//     questionTitle: "What is a function?",
//     questionBody: "It meant to be",
//     questionTags: ["java","node.js","react.js","mongoDB"],
//     userPosted: "mano",
//     askedOn: "jan 1",
//     answer:[{
//       answerBody: "Answer",
//       userAnswered: "kumar",
//       answeredOn: "jan 2",
//       userId: 2
//     }]
//   }
// ]

const checkAuth = () =>{
  if(user==null){
  alert("login or signup to ask a question");
  navigate('/Auth');
  }
  else{
    navigate('/Askquestion')
  }
}

  return ( 
    <div className='main-bar'>
        <div className='main-bar-header'>
          {location.pathname==='/' ? <h1>Top Questions</h1> 
          :<h1>All Questions</h1> }

          <button onClick={checkAuth} className='ask-btn'>Ask Question </button>
        </div>

        <div>
          {
            questionList.data === null ? 
            <h1>Loading...</h1> :
            <>
            <p>{questionList.data.length} questions</p>
            <>
        
              <QuestionsList questionList={questionList.data} />

            </>
            </>
          }
        </div>
    </div>
  )
}

export default HomeMainbar