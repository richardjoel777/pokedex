import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Pokedex } from "../interfaces/types";
import MiniRandPokeItem from "./MiniRandPokeItem";

export const RandomPoke = () => {
  const [indices, setIndices] = useState<string[]>([]);

  // const [pokemons, setPokemons] = useState<Pokedex[]>([]);
  // const fetchData = async (i: number) => {
  //   const url: string = `https://pokeapi.co/api/v2/pokemon/${i}/`;
  //   const response = await fetch(url);
  //   const pokemon: Pokedex = await response.json();
  //   setPokemons((prevState) => [...prevState, pokemon]);
  // };

  function pad(n: number): string {
    var len = 3 - ("" + n).length;
    return (len > 0 ? new Array(++len).join("0") : "") + n;
  }

  useEffect(() => {
    let i = 0;
    let temp: string[] = [];
    for (i = 0; i < 13; i++) {
      const rand = Math.floor(Math.random() * (898 - 1) + 1);
      temp.push(pad(rand));
      // fetchData(rand);
      // if (i === 11) {
      //   console.log(pokemons);
      // }
    }
    setIndices(temp);
    return () => {};
  }, []);

  return (
    <div className="flex flex-col items-center space-y-20 w-11/12 mx-auto">
      <div>
        <Link to="/">
          <div className="w-60 rounded-xl h-12 border-text_primary bg-light_blue border-2 mt-6 text-center py-1 font-primary_font text-3xl shadow-blue">
            Pokédex
          </div>
        </Link>
      </div>
      <div className="flex w-full">
        <div className="w-2/5 flex">
          <div className="w-1/4 flex flex-col justify-center">
            <MiniRandPokeItem
              index={indices[0]}
              isBig={false}
            ></MiniRandPokeItem>
          </div>
          <div className=" w-1/4 flex flex-col justify-between">
            <div>
              <MiniRandPokeItem
                index={indices[1]}
                isBig={false}
              ></MiniRandPokeItem>
            </div>
            <div>
              <MiniRandPokeItem
                index={indices[2]}
                isBig={false}
              ></MiniRandPokeItem>
            </div>
          </div>
          <div className=" w-1/4 flex flex-col justify-center">
            <MiniRandPokeItem
              index={indices[4]}
              isBig={false}
            ></MiniRandPokeItem>
          </div>
          <div className=" w-1/4 flex flex-col justify-between">
            <div>
              <MiniRandPokeItem
                index={indices[5]}
                isBig={false}
              ></MiniRandPokeItem>
            </div>
            <div>
              <MiniRandPokeItem
                index={indices[6]}
                isBig={false}
              ></MiniRandPokeItem>
            </div>
          </div>
        </div>
        <div className="w-1/5">
          <MiniRandPokeItem index={indices[7]} isBig={true}></MiniRandPokeItem>
        </div>
        <div className="w-2/5 flex">
          <div className=" w-1/4 flex flex-col justify-between">
            <div>
              <MiniRandPokeItem
                index={indices[8]}
                isBig={false}
              ></MiniRandPokeItem>
            </div>
            <div>
              <MiniRandPokeItem
                index={indices[9]}
                isBig={false}
              ></MiniRandPokeItem>
            </div>
          </div>
          <div className=" w-1/4 flex flex-col justify-center">
            <MiniRandPokeItem
              index={indices[10]}
              isBig={false}
            ></MiniRandPokeItem>
          </div>
          <div className=" w-1/4 flex flex-col justify-between">
            <div>
              <MiniRandPokeItem
                index={indices[11]}
                isBig={false}
              ></MiniRandPokeItem>
            </div>
            <div>
              <MiniRandPokeItem
                index={indices[12]}
                isBig={false}
              ></MiniRandPokeItem>
            </div>
          </div>
          <div className=" w-1/4 flex flex-col justify-center">
            <MiniRandPokeItem
              index={indices[3]}
              isBig={false}
            ></MiniRandPokeItem>
          </div>
        </div>
      </div>
    </div>
  );
};
