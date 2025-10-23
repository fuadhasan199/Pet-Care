import React from 'react'; 
import toast, { Toaster } from 'react-hot-toast'; 
import { NavLink } from 'react-router';
import { IoIosLogIn } from "react-icons/io"; 
import { FaGoogle } from "react-icons/fa";
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from '../firebase.confiq';

const SignUp = () => { 
 
    const HandleClick=(e)=>{ 
      e.preventDefault() 

      const email=e.target.email.value 
      const password=e.target.password.value 
      console.log('btn click')

     const auth=getAuth() 
     createUserWithEmailAndPassword(auth,email,password)
     .then(res=>{
      console.log(res) 
      toast.success('Create Successfull')
     })
     .catch(error=>{
      console.log(error) 
      toast.error('Something Eror ')
     })
    }  

    const GoogleHandle=()=>{

      const provider=new GoogleAuthProvider() 
      signInWithPopup(auth,provider) 
      .then(res=>{
        console.log(res)
        toast.success("Google SignUp Complite")
      })
      .catch(error=>{
        console.log(error) 
        toast.error("Somethings Wrong in Google")
      })
    }



  
    return (
        <div> 
            
            <div className="hero bg-base-200 min-h-fit mt-10 p-8"> 
                
  <div className="hero-content flex-col lg:flex-row-reverse"> 
    
    <div className="text-center lg:text-left">
     
   
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
        <form className="fieldset" onSubmit={HandleClick}> 
            <p className='text-center text-2xl font-bold'>Sign UP to your account</p>
          <label className="label">Email</label>
          <input type="email" name='email' className="input" placeholder="Email" />
          <label className="label">Password</label>
          <input type="password" name='password' className="input" placeholder="Password" />
          <div className='flex gap-7'><a className="link link-hover">Forgot password?</a></div>
          <button className="btn btn-neutral mt-4"><IoIosLogIn size={18} /> SignUp</button> 
          <button className="btn btn-neutral mt-1 " onClick={GoogleHandle}> <FaGoogle size={18} /> SignUp With Google</button>
        </form>
      </div>
    </div>
  </div>
</div> 
 <Toaster position="top-center" reverseOrder={false} />
        </div>
    );
};

export default SignUp;