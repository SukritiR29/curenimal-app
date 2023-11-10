import React from 'react';
import hospitals from '@/hospitals'; // Assuming the hospitals.ts file is in the same directory

const Hospital: React.FC = () => {
  // Map through the hospital data to display required information
  return (
    <div className='bg-base-100'>
      <h1 className='pt-5 ml-20 pb-2 font-mono font-black text-4xl text-red-900'>List of Hospitals</h1>
      <p className='ml-20 mb-5 text-red-900'>Please note that this is just a dummy data being the initial stage of this project's development.</p>
      <div className="flex flex-wrap -mx-2 ml-20 mr-10 gap-10">
      {hospitals.map((hospital, index) => (
        <div key={index} className="w-1/4 p-2">
          <div className="bg-secondary text-neutral p-2 pr-1 w-80 rounded-md">
            <p className='font-black'>Name: {hospital.name}</p>
            <p>Street Address: {hospital.street_address}</p>
            <p>City: {hospital.city}</p>
            <p>State: {hospital.state}</p>
          </div>
        </div>
      ))}
    </div>
    </div>
  );
};

export default Hospital;
