import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../Contexts/AuthContexts'


const SignUp = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const {signup} = useAuth()
  const navigate = useNavigate()

  const handleSubmit = async  (e) => {
        e.preventDefault()
        setError('')
        try{
            await signup(email, password)
            navigate('/account')
        } catch (err) {
          setError(err.message)
          console.log(err.message)
        }
  }
  return (
    <div className='max-w-[700px] mx-auto my-16 p-4'>
       
    <div>
        <h1 className=' text-2xl font-bold py-2'>Sign Up</h1>
        <p className='py-2'>Already have  an account yet?  <Link to='/signin' className='underline'>Sign In</Link></p>

    </div>
    <form onSubmit={handleSubmit}>
        <div className='flex flex-col py-2'>
            <label  className='py-2 font-medium' >Email:</label>
            <input type='email' className = 'border p-3'  onChange={(e)=>setEmail(e.target.value) }/>
        </div>
        <div className='flex flex-col py-2'>
            <label className='py-2 font-medium'  >Password :</label>
            <input type='password' className = 'border p-3' onChange={(e)=>setPassword(e.target.value) }/>
        </div>
        <button className='bg-blue-600 hover:bg-blue-500 p-4 w-full text-white border border-blue-500'>Login</button>
    </form>
    </div>
  )
}

export default SignUp