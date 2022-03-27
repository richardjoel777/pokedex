import { useContext, useState } from "react";
import { pokemonContext } from "../App";
import { IContext } from "../interfaces/types";

const abilities = [
  {
    name: "stench",
    url: "https://pokeapi.co/api/v2/ability/1/",
  },
  {
    name: "drizzle",
    url: "https://pokeapi.co/api/v2/ability/2/",
  },
  {
    name: "speed-boost",
    url: "https://pokeapi.co/api/v2/ability/3/",
  },
  {
    name: "battle-armor",
    url: "https://pokeapi.co/api/v2/ability/4/",
  },
  {
    name: "sturdy",
    url: "https://pokeapi.co/api/v2/ability/5/",
  },
  {
    name: "damp",
    url: "https://pokeapi.co/api/v2/ability/6/",
  },
  {
    name: "limber",
    url: "https://pokeapi.co/api/v2/ability/7/",
  },
  {
    name: "sand-veil",
    url: "https://pokeapi.co/api/v2/ability/8/",
  },
  {
    name: "static",
    url: "https://pokeapi.co/api/v2/ability/9/",
  },
  {
    name: "volt-absorb",
    url: "https://pokeapi.co/api/v2/ability/10/",
  },
  {
    name: "water-absorb",
    url: "https://pokeapi.co/api/v2/ability/11/",
  },
  {
    name: "oblivious",
    url: "https://pokeapi.co/api/v2/ability/12/",
  },
  {
    name: "cloud-nine",
    url: "https://pokeapi.co/api/v2/ability/13/",
  },
  {
    name: "compound-eyes",
    url: "https://pokeapi.co/api/v2/ability/14/",
  },
  {
    name: "insomnia",
    url: "https://pokeapi.co/api/v2/ability/15/",
  },
  {
    name: "color-change",
    url: "https://pokeapi.co/api/v2/ability/16/",
  },
  {
    name: "immunity",
    url: "https://pokeapi.co/api/v2/ability/17/",
  },
  {
    name: "flash-fire",
    url: "https://pokeapi.co/api/v2/ability/18/",
  },
  {
    name: "shield-dust",
    url: "https://pokeapi.co/api/v2/ability/19/",
  },
  {
    name: "own-tempo",
    url: "https://pokeapi.co/api/v2/ability/20/",
  },
];

export const Ability = () => {
  const [ability, setAbility] = useState("all");
  const pokeContext: IContext = useContext(pokemonContext);

  const onChange = (newValue: string) => {
    setAbility(newValue);
    pokeContext.filters[1]((prev) => {
      return { ...prev, ability: newValue };
    });
  };
  return (
    <div className="w-full p-6 flex flex-col border-2 border-border_dark rounded-lg">
      <div className="h-auto pb-3 text-3xl text-light_blue">Ability</div>
      <select
        name="ability"
        id="ability"
        onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
          onChange(e.target.value)
        }
        className="w-full text-start text-black px-2 py-2 rounded-full capitalize"
        value={ability}
      >
        <option value="all">All</option>
        {abilities.map((ability) => (
          <option value={ability.name} key={ability.name}>
            {ability.name.replaceAll("-", " ").charAt(0).toUpperCase() +
              ability.name.replaceAll("-", " ").slice(1)}
          </option>
        ))}
      </select>
    </div>
  );
};
