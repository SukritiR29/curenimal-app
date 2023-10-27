"use client";

import React from 'react'
import { useSession, signIn } from 'next-auth/react'


const Login = () => {
     const session = useSession();
        console.log(session);

    const backgroundImageUrl = 'url("/assests/curenimalbg.png")';
  return (
    <div>
     <div className="hero min-h-screen" style={{ backgroundImage: backgroundImageUrl }}>
    <div className="hero-overlay bg-opacity-55"></div>
    <div className="hero-content text-center text-neutral-content">
      <div className="max-w-md">
        <h1 className="mb-5 text-3xl text-white">Log Into Curenimal</h1>
        <div className='btn btn-accent text-neutral-focus mr-5 w-full'>
        <button onClick={()=>signIn("google")}>Sign In with Google</button>
        </div>
      </div>
      </div>
      </div>
   
    </div>
  )
}

export default Login