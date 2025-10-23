import React from 'react'; 
import { NavLink } from 'react-router';
import { IoIosLogIn } from "react-icons/io"; 
import { FaGoogle } from "react-icons/fa";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
const SignUp = () => { 
 
     

     const HandleClick=(e)=>{
   e.preventDefault() 
   console.log()
   const email=e.target.email.value 
   const password=e.target.password.value 
 const auth=getAuth()
 createUserWithEmailAndPassword(auth,email,password) 
  .then(res=>console.log(res))
  .catch(eror=>console.log(eror))

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
          <input type="email" className="input" placeholder="Email" />
          <label className="label">Password</label>
          <input type="password" className="input" placeholder="Password" />
          <div className='flex gap-7'><a className="link link-hover">Forgot password?</a> <p>Dont'have account <a className="link link-hover text-blue-600"><NavLink to={'/SignUp'}>SignUP</NavLink></a></p></div>
          <button className="btn btn-neutral mt-4"><IoIosLogIn size={18} /> Login</button> 
          <button className="btn btn-neutral mt-1"> <FaGoogle size={18} /> Continue with Google</button>
        </form>
      </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default SignUp;