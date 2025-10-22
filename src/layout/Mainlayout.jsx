import React from 'react';
import Navbar from '../Component/Navbar';
import { Outlet } from 'react-router';
import Footer from '../Component/Footer'
const Mainlayout = () => {
    return (
        <div className='min-h-screen flex flex-col'>
            <Navbar></Navbar> 
            <div className="flex-1 container mx-auto flex flex-col items-center justify-center mb-20 px-4 ">
                <Outlet></Outlet> 

            </div> 
            <Footer></Footer>
        </div>
    );
};

export default Mainlayout;