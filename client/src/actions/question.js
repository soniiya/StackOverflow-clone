import React from 'react'
import * as api from '../api';

export const askquestion =(questionData, navigate) => async (dispatch) => {
//console.log(questionData)
    try{
        const {data} = await api.postQuestion(questionData)
        dispatch({ type: "POST_QUESTION", payload: data})
        dispatch(fetchAllquestions())
        navigate('/')
    }
    catch(error){
        console.log(error)
    }
} 

export const fetchAllquestions = () => async (dispatch) =>{

    try{
       // console.log("fetched")
        const {data} = await api.getAllquestions();
        dispatch({type: "FETCH_ALL_QUESTIONS" , payload: data})
    }
    catch(error){
        console.log(error)
    }
}

export const deleteQuestion = (id,navigate) => async (dispatch) =>{

    try{
       const {data} = api.deleteQuestion(id)
       dispatch(fetchAllquestions)
       navigate('/') 
    }
    catch(error){
      console.log(error)  
    }
}


export const voteQuestion = (id,value) => async (dispatch)=>{
    try{
        const {data} = await api.voteQuestion(id,value)
        dispatch(fetchAllquestions())
    }
    catch(error){
        console.log(error)
    }
} 


export const postAnswer = (answerData) => async (dispatch) => {

    try{
    const {id,noOfAnswers,answerBody,userAnswered,userId} = answerData
    const {data} = await api.postAnswer(id,noOfAnswers,answerBody,userAnswered,userId)

    dispatch({ type:"POST_ANSWER", payload: data })
    dispatch(fetchAllquestions)
    }
    catch(error){
        console.log(error)
    }
}

export const deleteAnswer = (id,answerId,noOfAnswers) => async (dispatch) =>{
    try{
    const {data} = await api.deleteAnswer(id,answerId,noOfAnswers)
    dispatch(fetchAllquestions) 
    }

    catch (error){
    console.log(error)
    }
}