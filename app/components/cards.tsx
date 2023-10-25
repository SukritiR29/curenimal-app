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
      <div className="animals flex col-1 overflow-x-auto pb-40 hide-scrollbar">
        <div className="card w-44 pb-0 bg-base-100 shadow-xl ml-10">
          <figure className="px-2 pt-2 pb-0">
            <img src="/assests/dog.png" alt="dog" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title text-stone-800">DOG</h2>
            <div className="card-actions">
              <details className="dropdown">
                <summary className="m-1 btn w-max bg-bgColor bg-bgColor">
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
                  <li onClick={() => handleProblemChange("Dog", "Skin")}>
                    <a>New born care</a>
                  </li>
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
                <summary className="m-1 btn w-max bg-bgColor">
                  Help type
                </summary>
                <ul className="p-2 shadow text-stone-800 menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                  <li  onClick={() => handleProblemChange("Cat", "BrokenBone")}>
                    <a>Broken Bone</a>
                  </li>
                  <li>
                    <a>Skin problem</a>
                  </li>
                  <li>
                    <a>wounded</a>
                  </li>
                  <li>
                    <a>Stomach infection</a>
                  </li>
                  <li>
                    <a>New born care</a>
                  </li>
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
                <summary className="m-1 btn w-max bg-bgColor">
                  Help type
                </summary>
                <ul className="p-2 shadow text-stone-800 menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                  <li>
                    <a>Broken Bone</a>
                  </li>
                  <li>
                    <a>Skin problem</a>
                  </li>
                  <li>
                    <a>wounded</a>
                  </li>
                  <li>
                    <a>Stomach infection</a>
                  </li>
                  <li>
                    <a>New born care</a>
                  </li>
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
                <summary className="m-1 btn w-max bg-bgColor">
                  Help type
                </summary>
                <ul className="p-2 shadow text-stone-800 menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                  <li>
                    <a>Broken Bone</a>
                  </li>
                  <li>
                    <a>Skin problem</a>
                  </li>
                  <li>
                    <a>wounded</a>
                  </li>
                  <li>
                    <a>Stomach infection</a>
                  </li>
                  <li>
                    <a>New born care</a>
                  </li>
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
                <summary className="m-1 btn w-max bg-bgColor">
                  Help type
                </summary>
                <ul className="p-2 shadow text-stone-800 menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                  <li>
                    <a>Broken Bone</a>
                  </li>
                  <li>
                    <a>Skin problem</a>
                  </li>
                  <li>
                    <a>wounded</a>
                  </li>
                  <li>
                    <a>Stomach infection</a>
                  </li>
                  <li>
                    <a>New born care</a>
                  </li>
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
                <summary className="m-1 btn w-max bg-bgColor">
                  Help type
                </summary>
                <ul className="p-2 shadow text-stone-800 menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                  <li>
                    <a>Broken Bone</a>
                  </li>
                  <li>
                    <a>Skin problem</a>
                  </li>
                  <li>
                    <a>wounded</a>
                  </li>
                  <li>
                    <a>Stomach infection</a>
                  </li>
                  <li>
                    <a>New born care</a>
                  </li>
                </ul>
              </details>
            </div>
          </div>
        </div>
        <div className="card w-44 pb-0 bg-base-100 shadow-xl ml-10">
          <figure className="px-2 pt-2 pb-0">
            <img src="/assests/goat.png" alt="dog" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title text-stone-800">GOAT</h2>
            <div className="card-actions">
              <details className="dropdown">
                <summary className="m-1 btn w-max bg-bgColor">
                  Help type
                </summary>
                <ul className="p-2 shadow text-stone-800 menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                  <li>
                    <a>Broken Bone</a>
                  </li>
                  <li>
                    <a>Skin problem</a>
                  </li>
                  <li>
                    <a>wounded</a>
                  </li>
                  <li>
                    <a>Stomach infection</a>
                  </li>
                  <li>
                    <a>New born care</a>
                  </li>
                </ul>
              </details>
            </div>
          </div>
        </div>
        <div className="card w-44 pb-0 bg-base-100 shadow-xl ml-10">
          <figure className="px-2 pt-2 pb-0">
            <img src="/assests/sheep.png" alt="dog" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title text-stone-800">SHEEP</h2>
            <div className="card-actions">
              <details className="dropdown">
                <summary className="m-1 btn w-max bg-bgColor">
                  Help type
                </summary>
                <ul className="p-2 shadow text-stone-800 menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                  <li>
                    <a>Broken Bone</a>
                  </li>
                  <li>
                    <a>Skin problem</a>
                  </li>
                  <li>
                    <a>wounded</a>
                  </li>
                  <li>
                    <a>Stomach infection</a>
                  </li>
                  <li>
                    <a>New born care</a>
                  </li>
                </ul>
              </details>
            </div>
          </div>
        </div>
        <div className="card w-44 pb-0 bg-base-100 shadow-xl ml-10">
          <figure className="px-2 pt-2 pb-0">
            <img src="/assests/elephant.png" alt="dog" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title text-stone-800">ELEPHANT</h2>
            <div className="card-actions">
              <details className="dropdown">
                <summary className="m-1 btn w-max bg-bgColor">
                  Help type
                </summary>
                <ul className="p-2 shadow text-stone-800 menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                  <li>
                    <a>Broken Bone</a>
                  </li>
                  <li>
                    <a>Skin problem</a>
                  </li>
                  <li>
                    <a>wounded</a>
                  </li>
                  <li>
                    <a>Stomach infection</a>
                  </li>
                  <li>
                    <a>New born care</a>
                  </li>
                </ul>
              </details>
            </div>
          </div>
        </div>
        <div className="card w-44 pb-0 bg-base-100 shadow-xl ml-10">
          <figure className="px-2 pt-2 pb-0">
            <img src="/assests/pig.png" alt="dog" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title text-stone-800">PIG</h2>
            <div className="card-actions">
              <details className="dropdown">
                <summary className="m-1 btn w-max bg-bgColor">
                  Help type
                </summary>
                <ul className="p-2 shadow text-stone-800 menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                  <li>
                    <a>Broken Bone</a>
                  </li>
                  <li>
                    <a>Skin problem</a>
                  </li>
                  <li>
                    <a>wounded</a>
                  </li>
                  <li>
                    <a>Stomach infection</a>
                  </li>
                  <li>
                    <a>New born care</a>
                  </li>
                </ul>
              </details>
            </div>
          </div>
        </div>
        <div className="card w-44 pb-0 bg-base-100 shadow-xl ml-10">
          <figure className="px-2 pt-2 pb-0">
            <img src="/assests/elephant.png" alt="dog" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title text-stone-800">ELEPHANT</h2>
            <div className="card-actions">
              <details className="dropdown">
                <summary className="m-1 btn w-max bg-bgColor">
                  Help type
                </summary>
                <ul className="p-2 shadow text-stone-800 menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                  <li>
                    <a>Broken Bone</a>
                  </li>
                  <li>
                    <a>Skin problem</a>
                  </li>
                  <li>
                    <a>wounded</a>
                  </li>
                  <li>
                    <a>Stomach infection</a>
                  </li>
                  <li>
                    <a>New born care</a>
                  </li>
                </ul>
              </details>
            </div>
          </div>
        </div>
        <div className="card w-44 pb-0 bg-base-100 shadow-xl ml-10">
          <figure className="px-2 pt-2 pb-0">
            <img src="/assests/rabbit.png" alt="dog" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title text-stone-800">RABBIT</h2>
            <div className="card-actions">
              <details className="dropdown">
                <summary className="m-1 btn w-max bg-bgColor">
                  Help type
                </summary>
                <ul className="p-2 shadow text-stone-800 menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                  <li>
                    <a>Broken Bone</a>
                  </li>
                  <li>
                    <a>Skin problem</a>
                  </li>
                  <li>
                    <a>wounded</a>
                  </li>
                  <li>
                    <a>Stomach infection</a>
                  </li>
                  <li>
                    <a>New born care</a>
                  </li>
                </ul>
              </details>
            </div>
          </div>
        </div>
      </div>

      <div>

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
