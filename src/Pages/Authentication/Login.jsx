  import React, { useState } from 'react';
  import { Formik, Form, Field, ErrorMessage } from 'formik'; // Ajoutez ces imports
  import { TextField,Button } from '@mui/material';
  import * as Yup from "yup";
  import { useNavigate } from 'react-router-dom';

  const initialValues = { email: "", password: "" };
  const validationSchema = Yup.object().shape({ // Utilisez `shape` pour définir un schéma d'objet
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
  });

  const Login = () => {

    const navigate =useNavigate();


    const handleSubmit = (values) => {
      console.log('handle submit', values);
      
    };

    return (
      <>
        <Formik validationSchema={validationSchema} initialValues={initialValues} onSubmit={handleSubmit}>
          <Form className="space-y-5">
            <div className='space-y-5'>
              <div>
                <Field as={TextField} name="email" placeholder="Email" type="email" variant="outlined" fullWidth />
                <ErrorMessage name="email" component={"div"} className='text-red-500' />
              </div>
              <div>
                <Field as={TextField} name="password" placeholder="password" type="password" variant="outlined" fullWidth />
                <ErrorMessage name="password" component={"div"} className='text-red-500' />
              </div>
            </div>
            <Button sx={{padding:".8rem 0rem"}} fullWidth type="submit" variant="contained" color="primary" >Login</Button>
          </Form>
        </Formik>
        <div className='flex gap-2 items-center justify-center pt-5'>
          <p>You don't have account ?</p>
          <Button onClick={()=>navigate('/register')}>Register</Button>
        </div>

      </>
    );
  };

  export default Login;
