import { useContext } from "react";
import { pokemonContext } from "../App";
import { IContext } from "../interfaces/types";

export default function LoadMoreButton() {
  const data: IContext = useContext(pokemonContext);

  return (
    <div
      className={`w-2/5 h-auto mx-auto text-lg text-center py-3 cursor-pointer hover:bg-light_blue hover:text-black rounded-full border-2 border-light_blue text-shadow`}
      hidden={data.isMax[0]}
      onClick={() => {
        console.log("Hey");
        data.fetchData(false, false);
      }}
    >
      Load More Pokémon
    </div>
  );
}
