import React from 'react'
import './Users.css';
import LeftSidebar from '../../components/LeftSidebar'
import UsersList from './UsersList';
import {useLocation} from 'react-router-dom';

function Users() {
    const location=useLocation();
  return (
    <div className='home-container-1'>
        <LeftSidebar />

        <div className='home-container-2'>
            {
                location.pathname === '/Users' ? 
                <UsersList /> : 
                <>
                </>
            }
        </div>
    </div>
  ) 
}

export default Users