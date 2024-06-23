import React, { useEffect } from 'react';
import { Grid } from '@mui/material';
import { useLocation, Routes, Route } from 'react-router-dom';
import CreateReelsForm from '../../components/Reels/CreateReelsForm';
import Reels from '../../components/Reels/Reels';
import MiddlePart from '../../components/MiddlePart/MiddlePart';
import Profile from '../Profile/Profile';
import HomeRight from '../../components/HomeRight/HomeRight';
import SideBar from '../../components/SideBar/SideBar';
import { useDispatch, useSelector } from 'react-redux';
import { getProfileAction } from '../../Redux/Auth/authentication';

const Home = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const jwt = localStorage.getItem('jwt');
  const { auth } = useSelector(store => store);

  console.log('auth',auth);
  useEffect(() => {
    if (jwt) {
      dispatch(getProfileAction(jwt));
    }
  }, [dispatch, jwt]);

  return (
    <div className='px-20'>
      <Grid container spacing={0}>
        <Grid item xs={3} lg={3}>
          <div className='sticky top-0'>
            <SideBar />
          </div>
        </Grid>
        <Grid item xs={12} lg={6} className='px-5 flex justify-center'>
          <Routes>
            <Route path="/" element={<MiddlePart />} />
            <Route path="reels" element={<Reels />} />
            <Route path="create-reels" element={<CreateReelsForm />} />
            <Route path="profile/:id" element={<Profile />} />
          </Routes>
        </Grid>
        {location.pathname === "/" && (
          <Grid item xs={3} lg={3} className='relative'>
            <div className='sticky top-0 w-full'>
              <HomeRight />
            </div>
          </Grid>
        )}
      </Grid>
    </div>
  );
};

export default Home;
