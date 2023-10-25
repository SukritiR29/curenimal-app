import { animalData } from '@/data';
import React from 'react'

interface AnimalDataProps {
  selectAnimal: string;
  selectProblem: string;
  data: Record<string, Record<string, string>>;
}
const AnimalData: React.FC<AnimalDataProps> = ({selectAnimal, selectProblem, data}) => {
  return (
    <div>
      <div className="card card-side bg-base-100 shadow-xl w-100 ml-20 mr-20">
        <figure><img src="/images/stock/photo-1635805737707-575885ab0820.jpg" alt="Movie"/></figure>
        <div className="card-body w-1/2">
          <h2 className="card-title text-stone-500">Selected Animal: {selectAnimal}</h2>
          <h2 className="card-title text-stone-500">Selected Problem: {selectProblem}</h2>
          <p className='text-stone-500'>Data: {data[selectAnimal][selectProblem]}</p>
        </div>
      </div>
    </div>
  )
}

export default AnimalData;