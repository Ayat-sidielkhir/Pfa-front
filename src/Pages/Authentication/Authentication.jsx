import React from 'react';
import { Grid } from '@mui/material';
import Login from './Login'; // Import the Login component
import Register from '../Authentication/Ragister';
import { Routes, Route } from 'react-router-dom';

const Authentication = () => {
  return (
    <div>
      <Grid container>
        <Grid className='h-screen overflow-hidden' item xs={7}>
          {/* Ajoutez un contenu ou une image ici */}
        </Grid>
        <Grid item xs={5}>
          <div className='px-20 flex flex-col justify-center h-full'>
            <div className='card p-8'>
              <div className='flex flex-col items-center mb-5 space-y-1'>
                <h1 className='logo text-center'>Travel</h1>
                <p className='text-center text-sm w-[70]'>connecting, sharing ...</p>
              </div>
              <Routes>
                <Route path='/' element={<Login />} />
                <Route path='login' element={<Login />} />
                <Route path='register' element={<Register />} />
              </Routes>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  )
}

export default Authentication;
