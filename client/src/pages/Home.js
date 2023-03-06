import React from 'react'
import HomeMainbar from '../components/HomeBar/HomeMainbar'
import RightSidebar from '../components/Rightbar/RightSidebar';
import LeftSidebar from '../components/LeftSidebar'

import '../App.css';

function Home() {
  return (
    <div className='home-container-1'>
      <LeftSidebar />
      <div className='home-container-2'>
        <HomeMainbar />
        <RightSidebar />
      </div>
    </div>
  )
}

export default Home