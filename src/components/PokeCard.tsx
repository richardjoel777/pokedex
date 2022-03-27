import CardTypeItem from "./CardTypeItem";
import { Pokedex } from "../interfaces/types";
import { Link } from "react-router-dom";

interface Iprops {
  pokemon: Pokedex;
}

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
  shadow: "shadow",
};

export default function PokeCard(props: Iprops) {
  const pokemon = props.pokemon;

  return (
    <Link to={`/p/${pokemon.id}`}>
      <div className="flex cursor-pointer select-none flex-col">
        <div className="py-8 rounded-3xl rounded-b-none border-b-0 border-collapse border-2 border-text_primary bg-dark_blue bg-opacity-50">
          <div className="h-52 w-52 mx-auto rounded-full bg-pokeball bg-no-repeat bg-cover bg-origin-border flex justify-center place-items-center pb-6">
            <img
              src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${pokemon.id
                .toString()
                .padStart(3, "0")}.png`}
              className="h-4/5"
              alt=""
            />
          </div>
        </div>
        <div className=" h-48 border-2 p-6 rounded-3xl rounded-t-none bg-dark_blue bg-opacity-30 border-gray-50 flex flex-col justify-between">
          <div>
            <div className="text-lg text-light_blue">{pokemon.id}</div>
            <div className="text-2xl text-white capitalize">{pokemon.name}</div>
          </div>
          <div className="grid gap-3 grid-cols-2">
            {pokemon.types.map((type) => (
              <CardTypeItem
                key={type.type.name}
                color={colors[type.type.name]}
                text={type.type.name}
              ></CardTypeItem>
            ))}
            {/* <CardTypeItem color="thick_blue" text={pokemon.ty}></CardTypeItem>
            <CardTypeItem color="light_green" text="Grass"></CardTypeItem> */}
          </div>
        </div>
      </div>
    </Link>
  );
}
