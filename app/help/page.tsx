import React from 'react'
import Link from 'next/link'
import firstaid from '../components/firstaid'
import Cards from '../components/cards'


const page: React.FC = () => {
 

    
  return (
    <div>
     <div className='bg-bgColor'>
        <h1 className='pt-10 pb-2 font-mono font-black text-3xl align-center text-stone-100 text-center'>YOU CAN'T BUT LOVE,</h1>
        <h1 className='font-semibold font-mono text-3xl align-center text-stone-100 text-center'>BUT YOU CAN <b className='text-lime-600 text-3xl'>RESCUE</b> IT!</h1>
        <div className='flex justify-center pt-8'>
        <input type="text" placeholder="Search for hospitals or animals here" className="input input-bordered input-info w-full max-w-xs bg-stone-100 mr-2" />
        <Link href="">
        <button className="btn btn-accent text-neutral-focus mr-5 ml-2">Search</button>
        </Link>
        </div>
        <div>
            <h1 className='pt-10 pl-10 pb-5 font-mono font-black text-2xl text-stone-100'>
                Who are you helping today?</h1>
        </div>
        <div className='z-40'>
            <Cards />
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