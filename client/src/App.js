import Navbar from './components/Navbar';
import { BrowserRouter as Router} from 'react-router-dom';
import Routess from './components/Routess';

import { useEffect,useState } from 'react';
import { fetchAllquestions } from './actions/question';
import { fetchAllUsers } from './actions/users';
import { useDispatch } from 'react-redux';

function App() {

  const dispatch=useDispatch();

  useEffect(() =>{  //to show allquestions on home-mainbar
    dispatch(fetchAllquestions());
    dispatch(fetchAllUsers());
  },[dispatch])

  const [slideIn, setSlideIn] = useState(true);

  useEffect(() => {
    if (window.innerWidth <= 760) {
      setSlideIn(false);
    }
  }, []);

  const handleSlideIn = () => {
    if (window.innerWidth <= 760) {
      setSlideIn((state) => !state);
    }
  };

  return (
    <div className="App">
     <Router>
      <Navbar handleSlideIn={handleSlideIn} />
      <Routess slideIn={slideIn} handleSlideIn={handleSlideIn} />
    </Router> 
    </div>
  );
}

export default App;
