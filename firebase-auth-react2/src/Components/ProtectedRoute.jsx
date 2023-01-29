import React from 'react'
import {Navigate} from 'react-router-dom'
import { useAuth } from '../Contexts/AuthContexts'

const ProtectedRoute = ({children}) => {
    const {user } = useAuth()

    if (!user) {
        return <Navigate to  = '/signin' />
    }else{
        return children
    }
}
export default ProtectedRoute