import { useContext, useEffect, useState } from "react";
import Slider from "@mui/material/Slider";
import { pokemonContext } from "../App";
import { IContext } from "../interfaces/types";

type range = number[];

const NumLimit = () => {
  const [range, setRange] = useState<range>([1, 905]);
  const pokeContext: IContext = useContext(pokemonContext);

  useEffect(() => {
    setRange([pokeContext.filters[0].regMin, pokeContext.filters[0].regMax]);
  }, []);

  return (
    <div className="mt-6 w-full p-6 flex flex-col border-2 border-border_dark rounded-lg">
      <div className="w-full flex h-auto space-x-8 pb-3 text-3xl text-light_blue">
        <div>Number</div>
        <div>
          {range[0]} - {range[1]}{" "}
        </div>
      </div>
      <div className="w-full">
        <Slider
          defaultValue={range}
          min={1}
          max={905}
          onChange={(event: Event, value: any, activeThumb: number) => {
            setRange(value);
            pokeContext.filters[1]((prev) => {
              return { ...prev, regMin: value[0], regMax: value[1] };
            });
          }}
        ></Slider>
      </div>
    </div>
  );
};

export default NumLimit;
