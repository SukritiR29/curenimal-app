"use client"
import React from 'react'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import ImageUpload from '@/app/components/ImageUpload'

const LostFound = () => {

    const router = useRouter();

    useEffect(() => {
        const storeEmail = localStorage.getItem('email')
        if(!storeEmail) {
            router.push('/FirebaseLogin')
        }
    }, [])
  return (
    <div>
    <div className='bg-base-100 h-max'>
       <h1 className='pt-2 pb-2 font-mono font-black text-3xl align-center text-red-900 text-center'>LOST AND FOUND</h1>
       <h1 className='font-semibold font-mono text-xl align-center text-accent text-center'>Report pictures of lost, found or up for adoption pets. <br/> Make sure to enter your contact details to help the helper reach you.</h1>
       <div className='flex justify-center pt-8'>
      
       </div>
       <div>
           <h1 className='pt-5 pl-10 pb-5 font-mono font-black text-2xl text-red-900'>
               Who are you helping today?</h1>
       </div>
       <div>
       <ImageUpload/>

       </div>
       </div>
       <footer className="footer footer-center p-4 pt-20 bg-base-100 text-base-content">
       <div>
           <p>@ Coded and Designed by Sukriti Rajora</p>
       </div>
       </footer>

       </div>
  )
}

export default LostFound