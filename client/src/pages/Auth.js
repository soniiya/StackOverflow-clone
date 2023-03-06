import React,{useState} from 'react'
import {Routes, Route} from 'react-router-dom';
import Home from './Home';
import Authabout from './Authabout';
import './Auth.css';

import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { signup, login } from '.././actions/auth';


function Auth() {

  const [isSignup,setIssignup] =useState(false);
  const [name,setName]=useState('');
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');


  const dispatch=useDispatch();
  const navigate=useNavigate();

  const handleSubmit=(e)=>{
    e.preventDefault();

    if(!email && !password){
      alert("Enter email and password")
    }
    if(isSignup){
      if(!name)
      alert("Enter your name")

      dispatch(signup({name,email,password}, navigate))
    }

//console.log({name,email,pass})    
    else{
      dispatch(login({email,password}, navigate))
    }
  }


  const handleSwitch = ()=>{
    setIssignup(!isSignup);
  }

  return (
    <div>
      <section className='auth-section'>
        {isSignup && <Authabout />}

        <div className='auth-container-2'>
          { !isSignup && <img className='login-logo' />}

          <form onSubmit={handleSubmit}>
          {
            isSignup && (
              <label htmlFor='name'>
              <h4>Display Name</h4>
              <input type='text' id='name' name='name' 
              onChange={(e) => {
                setName(e.target.value)
              }} />
            </label>
            )
          }

            <label htmlFor='email'>
              <h4>Email</h4>
              <input type='email' name='email' id='email'
               onChange={(e) => {
                setEmail(e.target.value)
              }} />
            </label>

            <label htmlFor='password'>
              <div style={{display:'flex', justifyContent:'space-between'}}>
              <h4>Password</h4>
              { !isSignup && <p style={{fontSize:'13px', color: '#007ac6'}}>Forgot Password?</p>} 
              {/* only show while login  */}
              </div>
              
              <input type='password' name='password' id='password'
               onChange={(e) => {
                setPassword(e.target.value)
              }} />
              {isSignup && <p>Quis officia esse in exercitation esse Lorem nulla eiusmod.<br /> Labore reprehenderit proident laboris tempor.</p>}
            </label>


            {
              isSignup && (
                <label htmlFor='check'>
                  <input type='checkbox' id='check' />
                  <p>Opt-in to receive occasional,<br /> loremVelit ea proiden Consectetur commodo<br />
                   culpa amet cupidatat laboris.</p>
                </label>
              )
            }

          <button type='submit' className='auth-btn'>{isSignup ? "Sign-up" : "Login"}</button>

          {
            isSignup && (
              <p style={{color: '#666767', fontSize:'13px'}}>
                By clicking "Sign-up" you agree to our 
                <span style={{color: '#007ac6'}}>terms of <br /> services </span>
                <span style={{color: '#007ac6'}}> privacy policy</span> and
                <span style={{color: '#007ac6'}}> coockie policy</span>
              </p>
            )
          }
          </form>

          <p>
            {isSignup ? "already have an account?" : "Don't have an account?"}
            <button type='button' className='handle-switch-btn' onClick={handleSwitch}>{isSignup ? "Login" : "Sign up"}</button>
          </p>

        </div>
      </section>
    </div>
  )
}

export default Auth