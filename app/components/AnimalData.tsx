import React from 'react';
import Link from 'next/link';

interface Problem {
  name: string;
  content: string[];
}

interface AnimalDataProps {
  selectAnimal: string;
  selectProblem: string;
  data: {
    [animal: string]: {
      problems: Problem[];
    };
  };
}

const AnimalData: React.FC<AnimalDataProps> = ({ selectAnimal, selectProblem, data }) => {


  const animalProblems = data[selectAnimal]?.problems;
  const selectedProblem = animalProblems?.find((problem) => problem.name === selectProblem);

  console.log(selectProblem)

  const backgroundImageUrl = 'url("/assests/signup.png")';

  if (!selectedProblem) {
    return <div>Animal or problem not found.</div>;
  }

  return (
    <div>
      <div className="card card-side flex items-center justify-center shadow-xl w-90 ml-20 mr-20" style={{ backgroundImage: backgroundImageUrl, zIndex: 0 }}>
        <div className="card-body w-1/2 flex items-center justify-center mb-20">
          <h2 className="card-title text-white">Animal: {selectAnimal}</h2>
          <h2 className="card-title text-white">Problem: {selectProblem}</h2>
          <p className="text-white">
            Solution:
            <br />
            {selectedProblem.content.map((point, index) => (
              <span key={index}>
                {point}
                <br />
                <br />
              </span>
            ))}
          </p>

          <Link href="/hospital">
            <button className="btn btn-accent text-neutral-focus mr-5 ml-2">Hospitals Near Me</button>
          </Link>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default AnimalData;
