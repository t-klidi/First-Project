import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../Contexts/AuthContexts'

const SignIn = () => {
  const {signin} = useAuth()
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handleSignin =  async (e) => {
    e.preventDefault()
    setError('')
    try{
          await signin(email, password)
          navigate('/account')
    } catch (err) {
      setError(err.message)
      console.log(err)
    }
  }
  return (
    <div className='max-w-[700px] mx-auto my-16 p-4'>
       
    <div>
        <h1 className=' text-2xl font-bold py-2'>Sign in to your account</h1>
        <p className='py-2'>Dont have  an account yet?  <Link to='/signup' className='underline'>Sign up</Link></p>

    </div>
    <form onSubmit={handleSignin}>
        <div className='flex flex-col py-2'>
            <label  className='py-2 font-medium' >Email:</label>
            <input type='email' className = 'border p-3'  onChange={(e)=>setEmail(e.target.value) }/>
        </div>
        <div className='flex flex-col py-2'>
            <label className='py-2 font-medium'  >Password :</label>
            <input type='password' className = 'border p-3' onChange={(e)=>setPassword(e.target.value) }/>
        </div>
        <button className='bg-blue-600 hover:bg-blue-500 p-4 w-full text-white border border-blue-500'>Sign In</button>
    </form>
    </div>
  )
}

export default SignIn