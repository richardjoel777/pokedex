import { useContext } from "react";
import PokeCard from "./PokeCard";
import { pokemonContext } from "../App";
import { Pokedex, IContext } from "../interfaces/types";
import CircularProgress from "@mui/material/CircularProgress";

function PokeList() {
  const data: IContext = useContext(pokemonContext);
  return (
    <div>
      {!data.isLoading[0] ? (
        <div className="grid w-11/12 mx-auto h-auto grid-cols-4 gap-4">
          {data.loadedData[0].map((pokemon, index) => {
            if (index < data.pokeCount[0]) {
              return <PokeCard pokemon={pokemon}></PokeCard>;
            }
          })}
        </div>
      ) : (
        <div className="flex justify-center">
          <CircularProgress />
        </div>
      )}
    </div>
    // <div className="grid w-11/12 mx-auto h-auto grid-cols-4 gap-4">
    //   {data.loadedData != undefined ? (
    //     data.loadedData[0].map((pokemon, index) => {
    //       if (index < data.pokeCount[0]) {
    //         return <PokeCard pokemon={pokemon}></PokeCard>;
    //       }
    //     })
    //   ) : (
    //     <CircularProgress />
    //   )}
    // </div>
  );
}

export default PokeList;
