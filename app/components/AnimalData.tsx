import { animalData } from '@/data';
import React from 'react'
import Link from 'next/link';
import { useRef } from 'react';

interface AnimalDataProps {

  
  selectAnimal: string;
  selectProblem: string;
  data: Record<string, Record<string, string | string[]>>;
}
const AnimalData: React.FC<AnimalDataProps> = ({selectAnimal, selectProblem, data}) => {

  const problemData = data[selectAnimal][selectProblem];
  const backgroundImageUrl = 'url("/assests/signup.png")';
  if (!data[selectAnimal] || !data[selectAnimal][selectProblem]) {
    return <div>Animal or problem not found.</div>;
  }

  return (
    <div>
      <div className="card card-side flex items-center justify-center shadow-xl w-90 ml-20 mr-20" style={{ backgroundImage: backgroundImageUrl }}>
        <div className="card-body w-1/2 flex items-center justify-center">
          <h2 className="card-title text-white">Selected Animal: {selectAnimal}</h2>
          <h2 className="card-title text-white">Selected Problem: {selectProblem}</h2>
          <p className='text-white'>Data:
          <br />
          {Array.isArray(problemData) ? (
          problemData.map((point, index) => (
            <span key={index}>
              {point}
          <br />
          <br />
          </span>
          ))
          ) : (
            problemData
          )}
          </p>

        <Link href="/hospital">
        <button className="btn btn-accent text-neutral-focus mr-5 ml-2">Hospitals Near Me</button>
        </Link>
        </div>
        <div>
       
        </div>
      </div>
    </div>
  )
}

export default AnimalData;