"use client";
import React from 'react'
import Link from 'next/link'
import Cards from '../components/cards'
import { useState, useRef } from 'react'


const page: React.FC = () => {
 
  const [showFirstAid, setShowFirstAid] = useState(false);
  const showFirstAidRef = useRef<HTMLDivElement>(null);

  const handleFirstAid = () => {
    setShowFirstAid(true)

    if (showFirstAidRef.current) {
      showFirstAidRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }

    
  return (
    <div>
     <div className='bg-base-100'>
        <h1 className='pt-2 pb-2 font-mono font-black text-3xl align-center text-accent text-center'>YOU CAN'T BUY LOVE,</h1>
        <h1 className='font-semibold font-mono text-3xl align-center text-accent text-center'>BUT YOU CAN <b className='text-red-800 text-3xl'>RESCUE</b> IT!</h1>
        <div className='flex justify-center pt-8'>
       
        </div>
        <div>
            <h1 className='pt-5 pl-10 pb-10 font-mono font-black text-2xl text-neutral'>
                Who are you helping today?</h1>
        </div>
        <div className='z-40'>
            <Cards onButtonClicked={handleFirstAid} />
           
        </div>
        </div>
        <footer className="footer footer-center p-4 bg-base-100 text-base-content">
        <div>
            <p>Copyright © 2023 - Designed and Coded by Sukriti Rajora</p>
        </div>
        </footer>

        </div>

  )
}

export default page
