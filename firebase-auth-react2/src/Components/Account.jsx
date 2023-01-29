import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../Contexts/AuthContexts'

const Account = () => {
  const {user, logout} = useAuth()

  const navigate = useNavigate()

  const handleLogout = async () => {
    try {
        await logout()
        console.log('logged out')
        navigate('/signin')

    } catch (err) {
      console.log(err)
    }

  }
  return (
    <div>
      <form>
        <div className= 'flex flex-col py-4'>
   <h1 className='max-w-[600px] mx-auto my-16 p-4 text-center font-bold'>Account</h1>
   <p className='text-2xl font-bold py-4 text-center '>User email :  {user && user.email}</p>
   <button 
      onClick={handleLogout}
       className='bg-blue-600 hover:bg-blue-500 p-4 w-40 text-white border border-blue-500 text-center'>Sign In</button>
        </div>

      </form>

 
    </div>
  )
}

export default Account