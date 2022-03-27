import { useContext } from "react";
import { pokemonContext } from "../App";
import { IContext } from "../interfaces/types";
import { useState } from "react";

type Iprops = {
  color: string;
  text: string;
};

export const TypeItem = (props: Iprops) => {
  const [selected, setselected] = useState(false);
  const pokeContext: IContext = useContext(pokemonContext);
  return (
    <div
      onClick={
        selected || pokeContext.filters[0].types.size + 1 < 3
          ? () => {
              setselected((prevState) => !prevState);
              const currentFilters = pokeContext.filters[0];
              // console.log(currentFilters);
              if (currentFilters.types.has(props.text)) {
                currentFilters.types.delete(props.text);
              } else {
                currentFilters.types.add(props.text);
              }
              pokeContext.filters[1]((prev) => {
                return { ...prev, types: currentFilters.types };
              });
            }
          : () => {}
      }
      className={`text-center capitalize select-none text-lg border-2  border-${
        props.color
      } py-1 rounded-3xl ${
        selected ? `text-black bg-${props.color}` : `text-${props.color}`
      } cursor-pointer`}
    >
      {props.text}
    </div>
  );
};
