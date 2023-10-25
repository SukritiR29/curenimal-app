"use client";
import React from 'react'
import Link from 'next/link'
import Cards from '../components/cards'
import { useState } from 'react'


const page: React.FC = () => {
 
  const [showFirstAid, setShowFirstAid] = useState(false);
  const handleFirstAid = () => {
    setShowFirstAid(true)
  }

    
  return (
    <div>
     <div className='bg-bgColor'>
        <h1 className='pt-2 pb-2 font-mono font-black text-3xl align-center text-stone-100 text-center'>YOU CAN'T BUT LOVE,</h1>
        <h1 className='font-semibold font-mono text-3xl align-center text-stone-100 text-center'>BUT YOU CAN <b className='text-lime-600 text-3xl'>RESCUE</b> IT!</h1>
        <div className='flex justify-center pt-8'>
       
        </div>
        <div>
            <h1 className='pt-5 pl-10 pb-5 font-mono font-black text-2xl text-stone-100'>
                Who are you helping today?</h1>
        </div>
        <div className='z-40'>
            <Cards onButtonClicked={handleFirstAid} />
           
        </div>
        </div>
        <footer className="footer footer-center p-4 bg-bgColor text-base-content">
        <div>
            <p>Copyright © 2023 - All right reserved by ACME Industries Ltd</p>
        </div>
        </footer>

        </div>

  )
}

export default page