import { Pokedex } from "../interfaces/types";

export const PokeImage = ({ pokemon }: { pokemon: Pokedex }) => {
  return (
    <div>
      {pokemon.id != undefined && (
        <div className="flex flex-col justify-start items-center">
          <div className="h-10 pb-3 text-3xl text-light_blue">
            {pokemon.id.toString().padStart(3, "0")}
          </div>
          <h4 className="h-20 mb-2 text-5xl text-shadow">{pokemon.name}</h4>
          <div className="rounded-full h-64 w-64 bg-pokemon_circle bg-no-repeat bg-cover bg-origin-border flex justify-center place-items-center">
            <img
              src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${pokemon.id
                .toString()
                .padStart(3, "0")}.png`}
              className="h-4/5 w-full filter drop-shadow-xlPokeShadow"
              alt=""
            />
          </div>
        </div>
      )}
    </div>
  );
};
