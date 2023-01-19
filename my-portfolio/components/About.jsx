import React from 'react'

const About = () => {
  return (
    <div className='w-full md:h-screen p-2 items-center py-16' id="about" >
        <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
            <div className='col-span-2'>
                <p className='uppercase tracking-widest text-xl text-[#5651e5] '>About</p>
                <h2>Who am I ?</h2>
                <p className='py-2 text-gray-600'>
            I specialize in building mobile responsive front-end UI applications
            that connect with API’s and other backend technologies. I’m
            passionate about learning new technologies and understand there is
            more than one way to accomplish a task. Though I am most proficient
            in building front-end applications using HTML, CSS, Javascript, and
            React, I am a quick learner and can pick up new tech stacks as
            needed. I believe that being a great developer is not using one
            specific language, but choosing the best tool for the job.
          </p>
          <p className='py-2 text-gray-600'>
            I started web developement in 2022 as past-time activity during the holidays. The more I did basic front-end projects, the more i fell in love withe developement process and i decide to immerse myself into programming and software development.
          </p>
          <p className='py-2 text-gray-600 underline cursor-pointer'>Check Out My latest Projects</p>
            </div>
            <div className='w-full h-auto m-auto shadow-xl  shadow-gray-400 rounded-xl flex items-center justify-center p-3 hover:scale-105 ease-in duration-300'>
                <img src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="/"  className='rounded-xl'/>
            </div>
        </div>
    </div>
  )
}

export default About