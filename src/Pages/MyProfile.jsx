import React, { useEffect, useState } from 'react';
import { getAuth } from 'firebase/auth';
import { auth } from '../firebase.confiq'; 

const MyProfile = () => { 
  const [user, setUser] = useState(null); 
  const authInstance = getAuth(); 

  useEffect(() => {
   
    const currentUser = authInstance.currentUser;

    if (currentUser) {
      setUser({
        name: currentUser.displayName || "No Name 😒", 
        email: currentUser.email, 
        image: currentUser.photoURL || "https://via.placeholder.com/150" 
      });
    }
  }, [authInstance]); 

  if (!user) {
   
    return <p className="text-center text-red-500 mt-10">Loading....</p>;
  }

  return (
    <div className="container mx-auto mt-10 p-5 bg-white shadow-lg rounded-lg max-w-md">
      <h1 className="text-2xl font-bold mb-5 text-center">My Profile</h1>

      <div className="flex flex-col items-center">
        <img
          src={user.image}
          alt="Profile"
          className="w-32 h-32 rounded-full mb-4 object-cover"
        />
        <h2 className="text-xl font-semibold">{user.name}</h2> 
        <p className="text-gray-600">{user.email}</p> 

        <button
          className="mt-5 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
         
        >
          Update Profile
        </button>
      </div>
    </div>
  );
};

export default MyProfile;
