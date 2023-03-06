import React from 'react'
import Questions from './Questions'

function QuestionsList({questionList}) {
  return (
    <>
    {
        questionList.map((question) =>(
            <Questions question={question} key={question.id} />
        ))
    }
    </>
  )
}

export default QuestionsList