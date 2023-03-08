import React, { useEffect } from 'react';
import logo from '../assets/logo.png';
import glass from '../assets/glass.svg';
import bars from '../assets/bars-solid.svg';
import Avatar from './Avatar';
import './Navbar.css';

import decode from 'jwt-decode';
import {Link , useNavigate} from 'react-router-dom';
import { useSelector,useDispatch } from 'react-redux';
import { setCurrUser } from '../actions/currUser';

function Navbar({handleSlideIn}) {

const navigate = useNavigate();
const dispatch = useDispatch(); 
var User= useSelector((state) => (state.currentUserReducer));


const handleLogout =()=>{
  dispatch({type: 'LOGOUT'})
  navigate('/')
  dispatch( setCurrUser(null))
}

useEffect(()=>{
 const token = User?.token
 if(token){
  const decodedToken = decode(token)
  if(decodedToken.exp*1000 < new Date().getTime()){
    handleLogout();
  }
 }

  dispatch(setCurrUser(JSON.parse(localStorage.getItem('Profile'))))
},[User?.token, dispatch])

  return (
    <nav className='main-nav'>
       <div className='navbar'>

       <button className="slide-in-icon" onClick={() => handleSlideIn()}>
          <img src={bars} alt="bars" width="15" />
        </button>

        <div className='navbar-1'>
        <Link to='/' className='nav-item nav-logo'>
                <img src={logo} alt='logo' width='200px' />
            </Link>
            <Link to='/' className='nav-item nav-btn'>About</Link>
            <Link to='/' className='nav-item nav-btn'>Products</Link>
            <Link to='/' className='nav-item nav-btn'>For Teams</Link>

            <form>
                <input type='text' placeholder='Search...' />
                <img className='search-icon' src={glass} alt='search' width='18' />
            </form>
        </div>

          <div className='navbar-2'>
          { User === null ?
            <Link to='/Auth' className='nav-item nav-links'>Log in</Link> 
            : <>
            <Avatar backgroundColor='#009dff' px='10px' py='7px' borderRadius='50%' scolor='white' > <Link to={`/Users/${User?.result._id}`} style={{color:'white', textDecoration:'none'}}> {User.result.name.charAt(0).toUpperCase()} </Link> </Avatar>
            <button className='nav-item nav-links' onClick={handleLogout}>Log out</button>
            </>
            }
          </div>

        </div> 
    </nav>
  )
}

export default Navbar