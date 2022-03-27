import { useContext } from "react";
import { AdvancedSearch } from "./AdvancedSearch";
import LoadMoreButton from "./LoadMoreButton";
import PokeList from "./PokeList";
import { PokeSearch } from "./pokeSearch";
import { RandomPoke } from "./RandomPoke";
import Sort from "./Sort";

export const Main = () => {
  return (
    <div
      className="
        mx-auto
        p-6
        h-auto
        bg-primary_background
        bg-fixed
        space-y-6
        mt-14
        "
    >
      <RandomPoke></RandomPoke>
      <PokeSearch></PokeSearch>
      <AdvancedSearch></AdvancedSearch>
      {/* <Sort></Sort> */}
      <PokeList></PokeList>
      <LoadMoreButton></LoadMoreButton>
    </div>
  );
};
