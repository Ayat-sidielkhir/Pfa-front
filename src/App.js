
import React,{ useEffect } from 'react';
import { Routes, Route } from 'react-router-dom'; 
import Authentication from './Pages/Authentication/Authentication';
import Message from './Pages/Message/Message';
import Home from './Pages/HomePage/Home';
import { useDispatch, useSelector } from 'react-redux';
import { getProfileAction } from './Redux/Auth/authentication';
import Profile from './Pages/Profile/Profile';
import Reels from './components/Reels/Reels';
import CreateReelsForm from './components/Reels/CreateReelsForm';

function App() {
  const { auth } = useSelector(store => store);
  const dispatch = useDispatch();
  const jwt = localStorage.getItem('jwt');

  useEffect(() => {
    if (jwt) {
      dispatch(getProfileAction(jwt));
    }
  }, [dispatch, jwt]);

  return (
    <div className="">
      <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/message" element={<Message />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/reels" element={<Reels />} />
            <Route path="/create-reels" element={<CreateReelsForm/>} />
            <Route path="/*" element={<Authentication/>} />
      </Routes>
    </div>
  );
}

export default App;
