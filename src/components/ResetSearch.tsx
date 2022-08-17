import { type } from "os";
import { useContext } from "react";
import { pokemonContext } from "../App";
import { IContext } from "../interfaces/types";

const ResetSearch = () => {
  const pokeContext: IContext = useContext(pokemonContext);

  async function filterPokemons() {
    pokeContext.isShuffle[1](false);
    await pokeContext.fetchData();
  }

  function resetFilters() {
    pokeContext.filters[1]({
      types: new Set<String>(),
      ability: "all",
      regMin: 1,
      regMax: 900,
      offset: 0,
      search: "",
    });
  }

  return (
    <div className="w-full flex justify-between space-x-12">
      <div
        onClick={resetFilters}
        className="w-1/3 cursor-pointer text-light_blue text-lg text-center self-stretch border-2 rounded-full border-light_blue py-2"
      >
        Reset
      </div>
      <div className="w-1/3 mx-auto cursor-pointer flex bg-light_blue rounded-full">
        <div
          className="py-1 text-lg w-1/2 flex justify-end items-center"
          onClick={filterPokemons}
        >
          Search
        </div>
        <div className="w-1/2 pr-8 flex justify-end items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 text-border_primary"
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
        </div>
      </div>
    </div>
  );
};

export default ResetSearch;
