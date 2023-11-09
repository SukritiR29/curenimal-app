"use client";

import React from "react";
import { useState } from "react";
import { animalData } from "@/data";
import { Route } from "next";
import AnimalData from "./AnimalData";



interface Props {
  onButtonClicked: (animal: string, problem: string) => void;
}
const Cards: React.FC<Props> = ({ onButtonClicked }) => {
  const [selectAnimal, setSelectAnimal] = useState<string | null>(null);
  const [selectProblem, setSelectProblem] = useState<string | null>(null);
  

  const handleProblemChange = (animal: string, problem: string) => {
    setSelectAnimal(animal);
    setSelectProblem(problem);
    onButtonClicked(animal, problem);
  };

  const animalNames = Object.keys(animalData);

  return (
    <div>
      <div className="animals flex col-1 overflow-x-auto pb-20 hide-scrollbar z-10 relative">
        <div className="card w-44 pb-0 bg-accent shadow-xl ml-10 z-20 relative">
          <figure className="px-2 pt-2 pb-0">
            <img src="/assests/dog.png" alt="dog" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title text-base-100">DOG</h2>
            <div className="card-actions">
              <details className="dropdown relative z-30">
                <summary className="m-1 btn w-max border-0 bg-base-100 text-accent font-bold">
                  Help type
                </summary>
                <ul className="p-2 shadow text-stone-800 menu dropdown-content z-[1] bg-base-100 rounded-box w-52 ">
                  <li onClick={() => handleProblemChange("Dog", "BrokenBone")}>
                    <a>Broken Bone</a>
                  </li>
                  <li onClick={() => handleProblemChange("Dog", "Skin")}>
                    <a>Skin problem</a>
                  </li>
                  <li onClick={() => handleProblemChange("Dog", "Wounded")}>
                    <a>wounded</a>
                  </li>
                  <li onClick={() => handleProblemChange("Dog", "Stomach")}>
                    <a>Stomach infection</a>
                  </li>
                  <li onClick={() => handleProblemChange("Dog", "NewBorn")}>
                    <a>New born care</a>
                  </li>
                </ul>
              </details>
            </div>
          </div>
        </div>
        <div className="card w-44 pb-0 bg-accent shadow-xl ml-10">
          <figure className="px-2 pt-2 pb-0">
            <img src="/assests/cat.png" alt="dog" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title text-base-100">CAT</h2>
            <div className="card-actions">
              <details className="dropdown">
                <summary className="m-1 btn w-max bg-base-100 border-0 text-accent font-bold">
                  Help type
                </summary>
                <ul className="p-2 shadow text-stone-800 menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                  <li  onClick={() => handleProblemChange("Cat", "BrokenBone")}>
                    <a>Broken Bone</a>
                  </li>
                  <li onClick={() => handleProblemChange("Cat", "Skin")}>
                    <a>Skin problem</a>
                  </li>
                  <li onClick={() => handleProblemChange("Cat", "Wounded")}>
                    <a>wounded</a>
                  </li>
                  <li onClick={() => handleProblemChange("Cat", "Stomach")}>
                    <a>Stomach infection</a>
                  </li>
                  <li onClick={() => handleProblemChange("Cat", "NewBorn")}>
                    <a>New born care</a>
                  </li>
                </ul>
              </details>
            </div>
          </div>
        </div>
        <div className="card w-44 pb-0 bg-accent shadow-xl ml-10">
          <figure className="px-2 pt-2 pb-0">
            <img src="/assests/bird.png" alt="dog" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title text-base-100">BIRD</h2>
            <div className="card-actions">
              <details className="dropdown">
                <summary className="m-1 btn w-max bg-base-100 border-0 text-accent font-bold">
                  Help type
                </summary>
                <ul className="p-2 shadow text-stone-800 menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                <li onClick={() => handleProblemChange("Bird", "BrokenBone")}>
                    <a>Broken Bone</a>
                  </li>
                  <li onClick={() => handleProblemChange("Bird", "Skin")}>
                    <a>Skin problem</a>
                  </li>
                  <li onClick={() => handleProblemChange("Bird", "Wounded")}>
                    <a>wounded</a>
                  </li>
                  <li onClick={() => handleProblemChange("Bird", "Stomach")}>
                    <a>Stomach infection</a>
                  </li>
                  <li onClick={() => handleProblemChange("Bird", "NewBorn")}>
                    <a>New born care</a>
                  </li>
                </ul>
              </details>
            </div>
          </div>
        </div>
        <div className="card w-44 pb-0 bg-accent shadow-xl ml-10">
          <figure className="px-2 pt-2 pb-0">
            <img src="/assests/cow.png" alt="dog" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title text-base-100">COW</h2>
            <div className="card-actions">
              <details className="dropdown">
                <summary className="m-1 btn w-max bg-base-100 border-0 text-accent font-bold">
                  Help type
                </summary>
                <ul className="p-2 shadow text-stone-800 menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                  <li onClick={() => handleProblemChange("Cow", "BrokenBone")}>
                    <a>Broken Bone</a>
                  </li>
                  <li onClick={() => handleProblemChange("Cow", "Skin")}>
                    <a>Skin problem</a>
                  </li>
                  <li onClick={() => handleProblemChange("Cow", "Wounded")}>
                    <a>wounded</a>
                  </li>
                  <li onClick={() => handleProblemChange("Cow", "Stomach")}>
                    <a>Stomach infection</a>
                  </li>
                  <li onClick={() => handleProblemChange("Cow", "NewBorn")}>
                    <a>New born care</a>
                  </li>
                </ul>
              </details>
            </div>
          </div>
        </div>
        <div className="card w-44 pb-0 bg-accent shadow-xl ml-10">
          <figure className="px-2 pt-2 pb-0">
            <img src="/assests/monkey.png" alt="dog" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title text-base-100">MONKEY</h2>
            <div className="card-actions">
              <details className="dropdown">
                <summary className="m-1 btn w-max bg-base-100 border-0 text-accent font-bold">
                  Help type
                </summary>
                <ul className="p-2 shadow text-stone-800 menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                  <li onClick={() => handleProblemChange("Monkey", "BrokenBone")}>
                    <a>Broken Bone</a>
                  </li>
                  <li onClick={() => handleProblemChange("Monkey", "Skin")}>
                    <a>Skin problem</a>
                  </li>
                  <li onClick={() => handleProblemChange("Monkey", "Wounded")}>
                    <a>wounded</a>
                  </li>
                  <li onClick={() => handleProblemChange("Monkey", "Stomach")}>
                    <a>Stomach infection</a>
                  </li>
                  <li onClick={() => handleProblemChange("Monkey", "NewBorn")}>
                    <a>New born care</a>
                  </li>
                </ul>
              </details>
            </div>
          </div>
        </div>
        <div className="card w-44 pb-0 bg-accent shadow-xl ml-10">
          <figure className="px-2 pt-2 pb-0">
            <img src="/assests/squirrel.png" alt="dog" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title text-base-100">SQUIRREL</h2>
            <div className="card-actions">
              <details className="dropdown">
                <summary className="m-1 btn w-max bg-base-100 border-0 text-accent font-bold">
                  Help type
                </summary>
                <ul className="p-2 shadow text-stone-800 menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                  <li onClick={() => handleProblemChange("Squirrel", "BrokenBone")}>
                    <a>Broken Bone</a>
                  </li>
                  <li onClick={() => handleProblemChange("Squirrel", "Skin")}>
                    <a>Skin problem</a>
                  </li>
                  <li onClick={() => handleProblemChange("Squirrel", "Wounded")}>
                    <a>wounded</a>
                  </li>
                  <li onClick={() => handleProblemChange("Squirrel", "Stomach")}>
                    <a>Stomach infection</a>
                  </li>
                  <li onClick={() => handleProblemChange("Squirrel", "NewBorn")}> 
                    <a>New born care</a>
                  </li>
                </ul>
              </details>
            </div>
          </div>
        </div>
        <div className="card w-44 pb-0 bg-accent shadow-xl ml-10">
          <figure className="px-2 pt-2 pb-0">
            <img src="/assests/goat.png" alt="dog" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title text-base-100">GOAT</h2>
            <div className="card-actions">
              <details className="dropdown">
                <summary className="m-1 btn w-max bg-base-100 border-0 text-accent font-bold">
                  Help type
                </summary>
                <ul className="p-2 shadow text-stone-800 menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                  <li onClick={() => handleProblemChange("Goat", "BrokenBone")}>
                    <a>Broken Bone</a>
                  </li>
                  <li onClick={() => handleProblemChange("Goat", "Skin")}>
                    <a>Skin problem</a>
                  </li>
                  <li onClick={() => handleProblemChange("Goat", "Wounded")}>
                    <a>wounded</a>
                  </li>
                  <li onClick={() => handleProblemChange("Goat", "Stomach")}>
                    <a>Stomach infection</a>
                  </li>
                  <li onClick={() => handleProblemChange("Goat", "NewBorn")}>
                    <a>New born care</a>
                  </li>
                </ul>
              </details>
            </div>
          </div>
        </div>
        <div className="card w-44 pb-0 bg-accent shadow-xl ml-10">
          <figure className="px-2 pt-2 pb-0">
            <img src="/assests/sheep.png" alt="dog" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title text-base-100">SHEEP</h2>
            <div className="card-actions">
              <details className="dropdown">
                <summary className="m-1 btn w-max bg-base-100 border-0 text-accent font-bold">
                  Help type
                </summary>
                <ul className="p-2 shadow text-stone-800 menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                  <li onClick={() => handleProblemChange("Sheep", "BrokenBone")}>
                    <a>Broken Bone</a>
                  </li>
                  <li  onClick={() => handleProblemChange("Sheep", "Skin")}>
                    <a>Skin problem</a>
                  </li>
                  <li  onClick={() => handleProblemChange("Sheep", "Wounded")}>
                    <a>wounded</a>
                  </li>
                  <li  onClick={() => handleProblemChange("Sheep", "Stomach")}>
                    <a>Stomach infection</a>
                  </li>
                  <li  onClick={() => handleProblemChange("Sheep", "NewBorn")}>
                    <a>New born care</a>
                  </li>
                </ul>
              </details>
            </div>
          </div>
        </div>
        <div className="card w-44 pb-0 bg-accent shadow-xl ml-10">
          <figure className="px-2 pt-2 pb-0">
            <img src="/assests/elephant.png" alt="dog" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title text-base-100">ELEPHANT</h2>
            <div className="card-actions">
              <details className="dropdown">
                <summary className="m-1 btn w-max bg-base-100 border-0 text-accent font-bold">
                  Help type
                </summary>
                <ul className="p-2 shadow text-stone-800 menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                  <li  onClick={() => handleProblemChange("Elephant", "BrokenBone")}>
                    <a>Broken Bone</a>
                  </li>
                  <li onClick={() => handleProblemChange("Elephant", "Skin")}>
                    <a>Skin problem</a>
                  </li>
                  <li onClick={() => handleProblemChange("Elephant", "Wounded")}>
                    <a>wounded</a>
                  </li>
                  <li onClick={() => handleProblemChange("Elephant", "Stomach")}>
                    <a>Stomach infection</a>
                  </li>
                  <li onClick={() => handleProblemChange("Elephant", "NewBorn")}>
                    <a>New born care</a>
                  </li>
                </ul>
              </details>
            </div>
          </div>
        </div>
        <div className="card w-44 pb-0 bg-accent shadow-xl ml-10">
          <figure className="px-2 pt-2 pb-0">
            <img src="/assests/pig.png" alt="dog" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title text-base-100">PIG</h2>
            <div className="card-actions">
              <details className="dropdown">
                <summary className="m-1 btn w-max bg-base-100 border-0 text-accent font-bold">
                  Help type
                </summary>
                <ul className="p-2 shadow text-stone-800 menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                  <li onClick={() => handleProblemChange("Pig", "BrokenBone")}>
                    <a>Broken Bone</a>
                  </li>
                  <li  onClick={() => handleProblemChange("Pig", "Skin")}>
                    <a>Skin problem</a>
                  </li>
                  <li  onClick={() => handleProblemChange("Pig", "Wounded")}>
                    <a>wounded</a>
                  </li>
                  <li  onClick={() => handleProblemChange("Pig", "Stomach")}>
                    <a>Stomach infection</a>
                  </li>
                  <li  onClick={() => handleProblemChange("Pig", "NewBorn")}>
                    <a>New born care</a>
                  </li>
                </ul>
              </details>
            </div>
          </div>
        </div>
   
        <div className="card w-44 pb-0 bg-accent shadow-xl ml-10">
          <figure className="px-2 pt-2 pb-0">
            <img src="/assests/rabbit.png" alt="dog" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title text-base-100">RABBIT</h2>
            <div className="card-actions">
              <details className="dropdown">
                <summary className="m-1 btn w-max bg-base-100 border-0 text-accent font-bold">
                  Help type
                </summary>
                <ul className="p-2 shadow text-stone-800 menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                  <li  onClick={() => handleProblemChange("Rabbit", "BrokenBone")}>
                    <a>Broken Bone</a>
                  </li>
                  <li onClick={() => handleProblemChange("Rabbit", "Skin")}>
                    <a>Skin problem</a>
                  </li>
                  <li onClick={() => handleProblemChange("Rabbit", "Wounded")}>
                    <a>wounded</a>
                  </li>
                  <li onClick={() => handleProblemChange("Rabbit", "Stomach")}>
                    <a>Stomach infection</a>
                  </li>
                  <li onClick={() => handleProblemChange("Rabbit", "NewBorn")}>
                    <a>New born care</a>
                  </li>
                </ul>
              </details>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-0 z-10">

        {selectAnimal && selectProblem && (
          <AnimalData
          selectAnimal={selectAnimal}
          selectProblem={selectProblem}
          data={animalData}
        />
        )}
        
      </div>
    </div>
  );
};

export default Cards;
