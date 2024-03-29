import { useContext, useState } from "react";
import { pokemonContext } from "../App";
import shuffleArrow from "../assets/shuffle-arrow.png";
import { IContext } from "../interfaces/types";

export const PokeSearch = () => {
  const data: IContext = useContext(pokemonContext);

  async function searchPokemons() {
    await data.fetchData();
  }

  return (
    <div className="mt-6 h-auto w-11/12 mx-auto shadow-blue rounded-lg border-2 border-text_primary flex justify-around align-middle px-14 py-6 space-x-4 bg-dark_blue bg-opacity-50">
      <div className="h-36 w-2/3 flex flex-col">
        <h4 className="h-10 mb-2 text-xl text-shadow">Search by name</h4>
        <div className="flex space-x-0">
          <input
            type="text"
            className=" w-full appearance-none rounded-l-full pl-7"
            onChange={(e) => {
              data.filters[1]((prev) => {
                return { ...prev, search: e.target.value };
              });
            }}
          />
          <button
            className="h-14 p-2 w-1/12 bg-light_blue rounded-r-full flex justify-center"
            onClick={searchPokemons}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 pt-1 w-5 text-border_primary"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};
