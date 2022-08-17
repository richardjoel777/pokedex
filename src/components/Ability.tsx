import { useContext, useEffect, useState } from "react";
import { pokemonContext } from "../App";
import { IContext, Ability as IAbility } from "../interfaces/types";

export const Ability = () => {
  const [ability, setAbility] = useState("all");
  const pokeContext: IContext = useContext(pokemonContext);
  const [abilities, setAbilities] = useState<IAbility[]>([]);

  async function fetchData() {
    const url = `http://127.0.0.1:8000/abilities/`;

    var res = await fetch(url);
    console.log(res);
    var data = await res.json();
    console.log(data);
    setAbilities(data);
  }

  useEffect(() => {
    setAbility(pokeContext.filters[0].ability);
    fetchData();
  }, []);

  useEffect(() => {
    setAbility(pokeContext.filters[0].ability);
  }, [pokeContext.filters[0].ability]);

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
