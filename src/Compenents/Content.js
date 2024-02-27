import React from 'react'
import watch from '../Assets/watch_app.jpg'
import teams from '../Assets/teams.jpg'
import smoke from '../Assets/smoke.jpg'

const Home = () => {
  return (
    <div>
      <div className='p-4'>
        <h1 className='text-lg font-bold flex justify-center'>Lets Build Something Great!</h1>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 flex-wrap p-2'>
        <div>
          <img src={watch}></img>
        </div>
        <div style={{background:"black"}}>
          <div className='p-2'>
            <h1 className='text-white text-2xl font-bold flex justify-start mt-20 ml-20'>WATCH APPLICATION</h1>
            <h2 className='flex-wrap justify-start ml-20 mt-5 text-sm text-white mr-10'>Watch applications are software programs that run on smartwatches, which are wearable devices that can connect to smartphones, computers, or the internet. Watch applications can provide various functions, such as displaying notifications, tracking fitness, playing music, controlling smart home devices, and more. Watch applications can also enhance the user experience by offering customized watch faces, themes, and widgets.</h2>
            <div className='ml-20 mt-5 cursor-pointer'> 
              <h2 className='inline-block border-2 rounded-lg text-white p-2'>Reset</h2>
            </div>
            <div className='ml-20 mt-2 cursor-pointer'>
            <h2 className='inline-block border-2 rounded-lg text-white p-2 bg-yellow-400'>More about this...</h2>
            </div>
          </div>
        </div>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 flex-wrap p-2'>
        <div style={{background:"black"}}>
          <div className='p-2'>
            <h1 className='text-white text-2xl font-bold flex justify-start mt-20 ml-20'>MEET THE TEAM</h1>
            <h2 className='flex-wrap justify-start ml-20 mt-5 text-sm text-white mr-10'>Meet the team is a section on a website that introduces the people behind a company, project, or organization. It can showcase the team’s culture, values, skills, and personality, and help visitors connect with them on a human level.</h2>
            <div className='ml-20 mt-5 cursor-pointer'> 
              <h2 className='inline-block border-2 rounded-lg text-white p-2'>Learn More.</h2>
            </div>
          </div>
        </div>
        <div>
          <img src={teams}></img>
        </div>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 flex-wrap p-2'>
        <div>
          <img src={smoke}></img>
        </div>
        <div style={{background:"black"}}>
          <div className='p-2'>
            <h1 className='text-white text-3xl font-bold flex justify-start mt-20 ml-20'>WHAT WE DO</h1>
            <div className='grid grid-cols-2 flext justify-start ml-20'>
              <div className=' grid-cols-2 mt-5'>
                <div>
                  <h1 className='text-white text-lg'>InterFace Design</h1>
                  <h2 className='text-white text-sm'>User Experience is the design of the overall experience that users have with a digital product, from the moment they discover it to the moment they stop using it.</h2>
                </div>
                <div>
                  <h1 className='text-white text-lg mt-2'>User Experience</h1>
                  <h2 className='text-white text-sm'>User Experience is the design of the overall experience that users have with a digital product, from the moment they discover it to the moment they stop using it.</h2>
                </div>
              </div>
              <div className=' grid-cols-2 mt-5 ml-5'>
              <div>
                  <h1 className='text-white text-lg'>Product Strategy</h1>
                  <h2 className='text-white text-sm'>Product strategy is the high-level plan that explains what your product aims to achieve and how it will do so.</h2>
                </div>
              </div>
            </div>
            <div className='ml-20 mt-5 cursor-pointer'> 
              <h2 className='inline-block border-2 rounded-lg text-white p-2'>Reset</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home