import React from 'react'
import LeftSidebar from '../../components/LeftSidebar'
import RightSidebar from '../../components/Rightbar/RightSidebar'
import QuestionDetails from './QuestionDetails'

function Displayques({question}) {
  return (
    <div className='home-container-1'>
        <LeftSidebar />

        <div className='home-container-2'>
            <QuestionDetails  />
            <RightSidebar />
        </div>
    </div>
  )
}

export default Displayques