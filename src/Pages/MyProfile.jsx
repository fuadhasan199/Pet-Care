import React, { useEffect, useState } from 'react';
import { getAuth, updateProfile } from 'firebase/auth';
import { auth } from '../firebase.confiq'; 

const MyProfile = () => { 
  const [user, setUser] = useState(null); 
  const [editing, setEditing] = useState(false); 
  const [name, setName] = useState(""); 
  const [image, setImage] = useState("");
  const authInstance = getAuth(); 

  useEffect(() => {
    const currentUser = authInstance.currentUser;

    if (currentUser) {
      setUser({
        name: currentUser.displayName || "No Name 😒", 
        email: currentUser.email, 
        image: currentUser.photoURL || 'https://api.dicebear.com/7.x/avataaars/svg'
      });

      setName(currentUser.displayName || ""); 
      setImage(currentUser.photoURL || '');
    }
  }, [authInstance]); 

  if (!user) {
    return <p className="text-center text-red-500 mt-10">Loading....</p>;
  }

  
  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await updateProfile(authInstance.currentUser, {
        displayName: name,
        photoURL: image
      });
      
      setUser({
        ...user,
        name: name,
        image: image
      });
      setEditing(false); 
      alert("Profile updated successfully!");
    } catch (error) {
      console.error("Error updating profile:", error);
      alert("Failed to update profile.");
    }
  };

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

        {!editing ? (
          <button
            className="mt-5 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
            onClick={() => setEditing(true)} 
          >
            Update Profile
          </button>
        ) : (
          <form onSubmit={handleUpdate} className="mt-5 w-full flex flex-col items-center gap-3">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
              className="border p-2 rounded w-full"
              required
            />
            <input
              type="text"
              value={image}
              onChange={(e) => setImage(e.target.value)}
              placeholder="Enter image URL"
              className="border p-2 rounded w-full"
            />
            <div className="flex gap-2">
              <button
                type="submit"
                className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded"
              >
                Save
              </button>
              <button
                type="button"
                onClick={() => setEditing(false)}
                className="bg-gray-500 hover:bg-gray-600 text-white py-2 px-4 rounded"
              >
                Cancel
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default MyProfile;
