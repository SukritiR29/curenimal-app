import React from 'react'
import Link from 'next/link'

const page = () => {
  return (
     <div className='h-full bg-bgColor'>
        <h1 className='pt-10 pb-2 font-mono font-black text-3xl align-center text-stone-100 text-center'>YOU CAN'T BUT LOVE,</h1>
        <h1 className='font-semibold font-mono text-3xl align-center text-stone-100 text-center'>BUT YOU CAN <b className='text-lime-600 text-3xl'>RESCUE</b> IT!</h1>
        <div className='flex justify-center pt-8'>
        <input type="text" placeholder="Search for hospitals or animals here" className="input input-bordered input-info w-full max-w-xs bg-stone-100" />
        <Link href="">
        <button className="btn btn-accent text-neutral-focus mr-5">Search</button>
        </Link>
        </div>
        <div>
            <h1 className='pt-10 pl-10 pb-5 font-mono font-black text-2xl text-stone-100'>
                Who are you helping today?</h1>
            <div className='animals flex col-1'>
            <div className="card w-44 pb-0 bg-base-100 shadow-xl ml-10">
                <figure className="px-2 pt-2 pb-0">
                    <img src="/assests/dog.png" alt="dog" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title text-stone-800">DOG</h2>
                    <div className="card-actions">
                    <details className="dropdown">
                    <summary className="m-1 btn w-max bg-bgColor bg-bgColor">Help type</summary>
                    <ul className="p-2 shadow text-stone-800 menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                        <li><a>Item 1</a></li>
                        <li><a>Item 2</a></li>
                    </ul>
                    </details>
                    </div>
                </div>
                </div>
                <div className="card w-44 pb-0 bg-base-100 shadow-xl ml-10">
                <figure className="px-2 pt-2 pb-0">
                    <img src="/assests/cat.png" alt="dog" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title text-stone-800">CAT</h2>
                    <div className="card-actions">
                    <details className="dropdown">
                    <summary className="m-1 btn w-max bg-bgColor">Help type</summary>
                    <ul className="p-2 shadow text-stone-800 menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                        <li><a>Item 1</a></li>
                        <li><a>Item 2</a></li>
                    </ul>
                    </details>
                    </div>
                </div>
                </div>
                <div className="card w-44 pb-0 bg-base-100 shadow-xl ml-10">
                <figure className="px-2 pt-2 pb-0">
                    <img src="/assests/bird.png" alt="dog" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title text-stone-800">BIRD</h2>
                    <div className="card-actions">
                    <details className="dropdown">
                    <summary className="m-1 btn w-max bg-bgColor">Help type</summary>
                    <ul className="p-2 shadow text-stone-800 menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                        <li><a>Item 1</a></li>
                        <li><a>Item 2</a></li>
                    </ul>
                    </details>
                    </div>
                </div>
                </div>
                <div className="card w-44 pb-0 bg-base-100 shadow-xl ml-10">
                <figure className="px-2 pt-2 pb-0">
                    <img src="/assests/cow.png" alt="dog" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title text-stone-800">COW</h2>
                    <div className="card-actions">
                    <details className="dropdown">
                    <summary className="m-1 btn w-max bg-bgColor">Help type</summary>
                    <ul className="p-2 shadow text-stone-800 menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                        <li><a>Item 1</a></li>
                        <li><a>Item 2</a></li>
                    </ul>
                    </details>
                    </div>
                </div>
                </div>
                <div className="card w-44 pb-0 bg-base-100 shadow-xl ml-10">
                <figure className="px-2 pt-2 pb-0">
                    <img src="/assests/monkey.png" alt="dog" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title text-stone-800">MONKEY</h2>
                    <div className="card-actions">
                    <details className="dropdown">
                    <summary className="m-1 btn w-max bg-bgColor">Help type</summary>
                    <ul className="p-2 shadow text-stone-800 menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                        <li><a>Item 1</a></li>
                        <li><a>Item 2</a></li>
                    </ul>
                    </details>
                    </div>
                </div>
                </div>
                <div className="card w-44 pb-0 bg-base-100 shadow-xl ml-10">
                <figure className="px-2 pt-2 pb-0">
                    <img src="/assests/squirrel.png" alt="dog" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title text-stone-800">SQUIRREL</h2>
                    <div className="card-actions">
                    <details className="dropdown">
                    <summary className="m-1 btn w-max bg-bgColor">Help type</summary>
                    <ul className="p-2 shadow text-stone-800 menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                        <li><a>Item 1</a></li>
                        <li><a>Item 2</a></li>
                    </ul>
                    </details>
                    </div>
                </div>
                </div>
            </div>
        </div>
        </div>

  )
}

export default page