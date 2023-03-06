import React from 'react'
import {Routes,Route} from 'react-router-dom';
import Auth from '../pages/Auth';
import Home from '../pages/Home';
import Questions from '../pages/Questions/Questions';
import Askquestion from '../pages/Askquestion/Askquestion';
import Displayques from '../pages/Questions/Displayques';
import Tags from '../pages/tags/Tags'
import Users from '../pages/Users/Users'
import UserProfile from '../pages/UserProfile/UserProfile';

function Routess() {
  return (
     <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/Auth' element={<Auth />}></Route>
        <Route path='/Questions' element={<Questions />}></Route>
        <Route path='/Askquestion' element={<Askquestion />}></Route>
        <Route path='/Questions/:id' element={<Displayques />}></Route>
        <Route path='/Tags' element={<Tags />}></Route>
        <Route path='/Users' element={<Users />}></Route>
        <Route path='/Users/:id' element={<UserProfile />}></Route>
      </Routes>
  )
}

export default Routess