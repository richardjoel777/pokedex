import { useContext } from "react";
import PokeCard from "./PokeCard";
import { pokemonContext } from "../App";
import { Pokedex, IContext } from "../interfaces/types";

function PokeList() {
  const data: IContext = useContext(pokemonContext);
  return (
    <div className="grid w-11/12 mx-auto h-auto grid-cols-4 gap-4">
      {data.loadedData != undefined ? (
        data.loadedData[0].map((pokemon, index) => {
          if (index < data.pokeCount[0]) {
            return <PokeCard pokemon={pokemon}></PokeCard>;
          }
        })
      ) : (
        <div></div>
      )}
    </div>
  );
}

export default PokeList;
