"use client";
import React from 'react'
import { SessionProvider } from 'next-auth/react'


interface AuthProvider {
    children: React.ReactNode; 
  }
  

const AuthProvider: React.FC<AuthProvider>  = ({children}) => {
  return (
    <SessionProvider>
        {children}
    </SessionProvider>
  )
} 

export default AuthProvider