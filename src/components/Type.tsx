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

var bgColors: { [key: string]: string } = {
  normal: "bg-white",
  fighting: "bg-orange",
  flying: "bg-light_blue",
  poison: "bg-pink",
  ground: "bg-light_yellow",
  rock: "bg-brown",
  bug: "bg-dark_green",
  ghost: "bg-purple",
  steel: "bg-pale_blue",
  fire: "bg-orange",
  water: "bg-thick_blue",
  grass: "bg-light_green",
  electric: "bg-light_yellow",
  psychic: "bg-pink",
  ice: "bg-light_blue",
  dragon: "bg-blue",
  dark: "bg-light_brown",
  fairy: "bg-light_pink",
  unknown: "bg-rose",
  shadow: "bg-sdw",
};

var textColors: { [key: string]: string } = {
  normal: "text-white",
  fighting: "text-orange",
  flying: "text-light_blue",
  poison: "text-pink",
  ground: "text-light_yellow",
  rock: "text-brown",
  bug: "text-dark_green",
  ghost: "text-purple",
  steel: "text-pale_blue",
  fire: "text-orange",
  water: "text-thick_blue",
  grass: "text-light_green",
  electric: "text-light_yellow",
  psychic: "text-pink",
  ice: "text-light_blue",
  dragon: "text-blue",
  dark: "text-light_brown",
  fairy: "text-light_pink",
  unknown: "text-rose",
  shadow: "text-sdw",
};

var borderColors: { [key: string]: string } = {
  normal: "border-white",
  fighting: "border-orange",
  flying: "border-light_blue",
  poison: "border-pink",
  ground: "border-light_yellow",
  rock: "border-brown",
  bug: "border-dark_green",
  ghost: "border-purple",
  steel: "border-pale_blue",
  fire: "border-orange",
  water: "border-thick_blue",
  grass: "border-light_green",
  electric: "border-light_yellow",
  psychic: "border-pink",
  ice: "border-light_blue",
  dragon: "border-blue",
  dark: "border-light_brown",
  fairy: "border-light_pink",
  unknown: "border-rose",
  shadow: "border-sdw",
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
            bgColor={bgColors[type.name]}
            textColor={textColors[type.name]}
            borderColor={borderColors[type.name]}
            text={type.name}
          ></TypeItem>
        ))}
      </div>
    </div>
  );
};
