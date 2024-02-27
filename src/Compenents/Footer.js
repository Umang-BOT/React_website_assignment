import React from 'react'
import insta from'../Assets/insta.png'
import face from '../Assets/facebook.png'
import linkedin from '../Assets/linkedin.png'

const Footer = () => {
  return (
    <div className="grid grid-rows-2 bg-orange-400 mt-5">
        <div className='grid grid-cols-3 mt-5 p-4'>
            <div>
                <h1 className='text-2xl font-semibold'>About us</h1>
                <h2 className='text-sm'>We are a passionate team dedicated to delivering high-quality solutions to our clients. With years of experience in the industry, we strive to exceed expectations and build long-lasting relationships.
</h2>
            </div>
            <div className='ml-5'>
                <h1 className='text-2xl font-semibold'>Services</h1>
                <h2 className='text-sm'>Our services are tailored to meet the diverse needs of our clients. From web development and design to digital marketing and branding, we offer comprehensive solutions to help your business thrive in the digital world.
</h2>

            </div>
            <div className='ml-5'>
                <h1 className='text-2xl font-semibold'>Connect with us..</h1>
                <div className='flex items-center'>
                <img className='w-8 h-8' src={insta}/>
                <img className='w-8 h-8' src={linkedin}/>
                <img className='w-8 h-8' src={face}/>
                </div>
            </div>
        </div>
        <div className='mt-15'>
        <footer className=" text-black text-center py-4">
            <div className="container mx-auto">
                <p>&copy; 2024 ABC. All rights reserved.</p>
            </div>
        </footer>
        </div>
    </div>
  )
}

export default Footer