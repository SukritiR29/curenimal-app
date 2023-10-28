"use client";
import React from 'react'
import { useSession, signOut } from 'next-auth/react';
import { useRouter } from 'next/navigation';

const LostFound = () => {

  const { data: session, status } = useSession()
  const router = useRouter()

  if (status === 'loading') {
    return <div>Loading...</div>
  }

  if (!session) {
    router.push('/login')
    return null
  }

  const handleLogout = async () => {
    await signOut(); // Sign out the user
    router.push('/login'); // Redirect to the login page
  };


  return (
    <div className='bg-bgColor h-screen'>
      <h1>Lost and Found</h1>
      <button onClick={handleLogout} className="btn btn-accent text-neutral-focus ml-5">LogOut</button>
    </div>
  )
}

export default  LostFound;