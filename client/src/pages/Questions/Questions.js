import React from 'react'
import HomeMainbar from '../../components/HomeBar/HomeMainbar'
import RightSidebar from '../../components/Rightbar/RightSidebar';
import LeftSidebar from '../../components/LeftSidebar'

function Questions() {
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

export default Questions