"use client";

import React from 'react'
import { useSession, signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import router from 'next/dist/client/router';
import Link from 'next/link';


const Login = () => {
     const session = useSession();
        console.log(session);

        const handleSignIn = async () => {
          const result = await signIn('google', { callbackUrl: '/lostFound' });
          if (result) {
            router.push('/lostFound'); // Redirect to 'lostFound' after successful sign-in
          }
        };

    const backgroundImageUrl = 'url("/assests/curenimalbg.png")';
  return (
    <div>
     <div className="hero min-h-screen" style={{ backgroundImage: backgroundImageUrl }}>
    <div className="hero-overlay bg-opacity-55"></div>
    <div className="hero-content text-center text-neutral-content">
      <div className="max-w-md">
        <h1 className="mb-5 text-3xl text-white">Log Into Curenimal</h1>
        <div className='btn btn-accent text-neutral-focus mr-5 w-full'>
        <button onClick={handleSignIn}>Sign In with Google</button>
        </div>
        <div className='mt-10'>
          <Link href='/'>
          <button className="btn btn-accent text-neutral-focus w-full">Home</button>
          </Link>
        </div>
      </div>
      </div>
      </div>
   
    </div>
  )
}

export default Login