import { Link } from "react-router-dom";

type Props = {
  index: string;
  isBig: boolean;
};

export default function MiniRandPokeItem({ index, isBig }: Props) {
  return (
    <Link to={`/p/${index}`}>
      <div
        className={`rounded-full ${
          isBig ? "w-full" : "h-28 w-28"
        } bg-pokeball bg-no-repeat bg-cover bg-origin-border flex justify-center place-items-center`}
      >
        <img
          src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${index}.png`}
          className={`h-4/5 filter ${
            isBig ? "drop-shadow-xlPokeShadow" : "drop-shadow-pokeShadow"
          }`}
          alt=""
        />
      </div>
    </Link>
  );
}
