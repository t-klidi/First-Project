import React from 'react'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import {  AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';

const Main = () => {
  return (
    <div className='w-full h-screen text-center' id="Home">
      <div className='max-w-[1250px] w-full h-full mx-auto p-2 flex justify-center items-center'>
        <div>
        <p className='uppercase tracking-widest text-gray-600'>Let's Grow and Build together</p>
        <h1 className='py-4 text-gray-700'>
          Hi, I'm  <span className='text-[#5651e5]'>Ian</span>
        </h1>
        <h1 className='py-4 text-gray-700'>
          A Full-Stack Web Developer
        </h1>
        <p className='py-4 text-gray-600 max-w-[70%] m-auto'>
        I’m focused on building responsive front-end web applications
            while  integrating back-end technologies.
        </p>
        <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
          <div  className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
              <FaLinkedinIn />
          </div>
          <div  className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
              <FaGithub />
          </div>
          <div  className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
              < AiOutlineMail />
          </div>
          <div  className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
              < BsFillPersonLinesFill  />
          </div>

        </div>
        </div>
      </div>
    </div>
  )
}

export default Main