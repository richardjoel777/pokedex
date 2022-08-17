import { useContext, useEffect } from "react";
import { pokemonContext } from "../App";
import { IContext } from "../interfaces/types";
import { useState } from "react";

type Iprops = {
  bgColor: string;
  borderColor: string;
  textColor: string;
  text: string;
};

export const TypeItem = (props: Iprops) => {
  const [selected, setselected] = useState(false);
  const pokeContext: IContext = useContext(pokemonContext);

  useEffect(() => {
    setselected(pokeContext.filters[0].types.has(props.text));
  }, []);

  useEffect(() => {
    setselected(pokeContext.filters[0].types.has(props.text));
  }, [pokeContext.filters[0].types]);

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
      className={`text-center capitalize select-none text-lg border-2  ${
        props.borderColor
      } py-1 rounded-3xl ${
        selected ? `text-black ${props.bgColor}` : `${props.textColor}`
      } cursor-pointer`}
    >
      {props.text}
    </div>
  );
};
