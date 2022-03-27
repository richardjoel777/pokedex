import { useContext } from "react";
import { pokemonContext } from "../App";
import { IContext } from "../interfaces/types";

export default function LoadMoreButton() {
  const data: IContext = useContext(pokemonContext);

  return (
    <div
      className=" w-2/5 h-auto mx-auto text-lg text-center py-3 cursor-pointer hover:bg-light_blue hover:text-black rounded-full border-2 border-light_blue text-shadow"
      onClick={
        data.pokeCount == undefined
          ? () => {}
          : () => {
              console.log("Hey");
              data.pokeCount[1]((prevState) => prevState + 20);
            }
      }
    >
      Load More Pokémon
    </div>
  );
}
