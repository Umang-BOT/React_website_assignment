import React from 'react';
import bg from '../Assets/bgg.jpg';

const Navbar = () => {
  return (
    <div className='grid grid-rows-3 w-auto h-screen' style={{ backgroundImage: `url(${bg})`, backgroundSize: 'cover',backgroundRepeat: 'no-repeat',backgroundPosition: 'center'}}>
        <div className='mt-3'>
            <div className='grid grid-cols-2'>
                <div className='p-4'><h2>Name</h2></div>
                <div className="flex justify-end p-4">
                    <a href="#" className="mr-4">Home</a>
                    <a href="#" className="mr-4">Contact</a>
                    <a href="#">About Us</a>
                </div>
            </div>
        </div>
        <div className="text-center">
        <h1 className='text-4xl text-white'>AWARD WINNING AGENCY</h1>
        <h3 className='text-black text-sm'>We pride ourselves on our innovative approach, unwavering commitment to quality, and unparalleled creativity.</h3>
        <div className="p-4">
            <p className="border-2 border-white 2x-solid inline-block p-2 rounded-lg">Learn More about our work..</p>
        </div>
        </div>
    </div>
  );
};

export default Navbar;
