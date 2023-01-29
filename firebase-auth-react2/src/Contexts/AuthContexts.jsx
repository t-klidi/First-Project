import React, { useContext, useEffect, useState } from 'react'
import { createContext } from 'react'
import {  createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut,onAuthStateChanged } from "firebase/auth";
import { auth } from '../Firebase';


const AuthContext = createContext()

export function useAuth() {
    return useContext(AuthContext);
  }



 export const AuthContextProvider  = ({children}) => {
    const [user, setUser ]  = useState({})
    


//signup component
const signup = ( email, password) => {
    return createUserWithEmailAndPassword(auth, email, password)
    .catch(function (error) {
        let errorCode = error.code;
        let errorMessage = error.message;
        console.log(errorCode, errorMessage);
        throw error;
    })
}
//signin component
const signin= ( email, password) => {
return signInWithEmailAndPassword(auth, email, password)
    .catch(function (error) {
        let errorCode = error.code;
        let errorMessage = error.message;
        console.log(errorCode, errorMessage);
        throw error;
    })
}
//logout component
const logout= ( ) => {
    return signOut(auth)
    .catch(function (error) {
        let errorCode = error.code;
        let errorMessage = error.message;
        console.log(errorCode, errorMessage);
        throw error;
    })
}

useEffect (()  => {
    const unsubscribe =onAuthStateChanged( auth , (currentUser )  => {
        setUser(currentUser)
        
    })
    return  () => {
    unsubscribe()
    }
},[])

const value = {
   user,
    signup,
    signin, 
    logout

}
  return (
    <AuthContext.Provider     value= {value}>
        {children}
    </AuthContext.Provider>
  )
}
