import Navbar from './components/Navbar';
import { BrowserRouter as Router} from 'react-router-dom';
import Routess from './components/Routess';

import { useEffect } from 'react';
import { fetchAllquestions } from './actions/question';
import { fetchAllUsers } from './actions/users';
import { useDispatch } from 'react-redux';

function App() {

  const dispatch=useDispatch();

  useEffect(() =>{  //to show allquestions on home-mainbar
    dispatch(fetchAllquestions());
    dispatch(fetchAllUsers());
  },[dispatch])

  return (
    <div className="App">
     <Router>
      <Navbar  />
      <Routess />
    </Router> 
    </div>
  );
}

export default App;
