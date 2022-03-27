import { TypeItem } from "./TypeItem";

const types = [
  {
    name: "normal",
    url: "https://pokeapi.co/api/v2/type/1/",
  },
  {
    name: "fighting",
    url: "https://pokeapi.co/api/v2/type/2/",
  },
  {
    name: "flying",
    url: "https://pokeapi.co/api/v2/type/3/",
  },
  {
    name: "poison",
    url: "https://pokeapi.co/api/v2/type/4/",
  },
  {
    name: "ground",
    url: "https://pokeapi.co/api/v2/type/5/",
  },
  {
    name: "rock",
    url: "https://pokeapi.co/api/v2/type/6/",
  },
  {
    name: "bug",
    url: "https://pokeapi.co/api/v2/type/7/",
  },
  {
    name: "ghost",
    url: "https://pokeapi.co/api/v2/type/8/",
  },
  {
    name: "steel",
    url: "https://pokeapi.co/api/v2/type/9/",
  },
  {
    name: "fire",
    url: "https://pokeapi.co/api/v2/type/10/",
  },
  {
    name: "water",
    url: "https://pokeapi.co/api/v2/type/11/",
  },
  {
    name: "grass",
    url: "https://pokeapi.co/api/v2/type/12/",
  },
  {
    name: "electric",
    url: "https://pokeapi.co/api/v2/type/13/",
  },
  {
    name: "psychic",
    url: "https://pokeapi.co/api/v2/type/14/",
  },
  {
    name: "ice",
    url: "https://pokeapi.co/api/v2/type/15/",
  },
  {
    name: "dragon",
    url: "https://pokeapi.co/api/v2/type/16/",
  },
  {
    name: "dark",
    url: "https://pokeapi.co/api/v2/type/17/",
  },
  {
    name: "fairy",
    url: "https://pokeapi.co/api/v2/type/18/",
  },
  {
    name: "unknown",
    url: "https://pokeapi.co/api/v2/type/10001/",
  },
  {
    name: "shadow",
    url: "https://pokeapi.co/api/v2/type/10002/",
  },
];

var colors: { [key: string]: string } = {
  normal: "white",
  fighting: "orange",
  flying: "light_blue",
  poison: "pink",
  ground: "light_yellow",
  rock: "brown",
  bug: "dark_green",
  ghost: "purple",
  steel: "pale_blue",
  fire: "orange",
  water: "thick_blue",
  grass: "light_green",
  electric: "light_yellow",
  psychic: "pink",
  ice: "light_blue",
  dragon: "blue",
  dark: "light_brown",
  fairy: "light_pink",
  unknown: "rose",
  shadow: "sdw",
};

export const Type = () => {
  return (
    <div className="w-1/2 flex flex-col">
      <div className="h-auto pb-3 border-b-2 border-light_blue text-3xl text-light_blue">
        Type
      </div>
      <div className="mt-3 px-3 grid grid-flow-row grid-cols-3 gap-3 gree align-middle ">
        {types.map((type) => (
          <TypeItem
            key={type.name}
            color={colors[type.name]}
            text={type.name}
          ></TypeItem>
        ))}
      </div>
    </div>
  );
};
