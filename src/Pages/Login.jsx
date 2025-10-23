import React from 'react';
import { NavLink } from 'react-router-dom';
import { IoIosLogIn } from "react-icons/io"; 
import { FaGoogle } from "react-icons/fa";
import {  signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase.confiq'; 
import toast, { Toaster } from 'react-hot-toast';


const Login = () => { 
  const HandleClick = (e) => {
    e.preventDefault(); 
    console.log('btn click');

    const email = e.target.email.value;
    const password = e.target.password.value;
    

    signInWithEmailAndPassword(auth, email, password)
  .then(res => {
    console.log(res);
    toast.success('Login successful!');
  })
  .catch(error => {
    console.log(error);
    toast.error('Invalid email or password');
  });

  };

 
  return (
    <div className="hero bg-base-200 min-h-fit mt-10 p-8"> 
      <div className="hero-content flex-col lg:flex-row-reverse"> 
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <form className="fieldset" onSubmit={HandleClick}> 
              <p className='text-center text-2xl font-bold'>Log in to your account</p>

              <label className="label">Email</label>
              <input type="email" name='email' className="input" placeholder="Email" />

              <label className="label">Password</label>
              <input type="password" name='password' className="input" placeholder="Password" />

              <div className='flex gap-7 flex-wrap'>
                <a className="link link-hover">Forgot password?</a>
                <p>
                  Don’t have an account?{" "}
                  <NavLink to="/SignUp" className="link link-hover text-blue-600">
                    Sign Up
                  </NavLink>
                </p>
              </div>

              <button className="btn btn-neutral mt-4">
                <IoIosLogIn size={18} /> Login
              </button> 

              <button type="button" className="btn btn-neutral mt-1">
                <FaGoogle size={18} /> Continue with Google
              </button>
            </form>
          </div>
        </div>
      </div> 
      <Toaster position="top-center" reverseOrder={false} />

    </div>
  );
};

export default Login;
