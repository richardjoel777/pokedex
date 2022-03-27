import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import leftArrow from "../assets/la.svg";
import { Pokedex } from "../interfaces/types";
import CardTypeItem from "./CardTypeItem";
import { PokeImage } from "./PokeImage";

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


export const PokemonInfo = () => {
  const { id } = useParams();
  const nav = useNavigate();
  const [pokemon, setPokemon] = useState({} as Pokedex);
  const [prevPokemon, setPrevPokemon] = useState({} as Pokedex);
  const [nextPokemon, setNextPokemon] = useState({} as Pokedex);

  useEffect(() => {
    async function fetchData() {
      var url = `https://pokeapi.co/api/v2/pokemon/${id}`;
      var response = await fetch(url);
      var data: Pokedex = await response.json();
      setPokemon(data);
      if (parseInt(id as string) - 1 > 0) {
        url = `https://pokeapi.co/api/v2/pokemon/${parseInt(id as string) - 1}`;
        response = await fetch(url);
        var prevData = await response.json();
        setPrevPokemon(prevData);
      }
      if (parseInt(id as string) + 1 < 899) {
        url = `https://pokeapi.co/api/v2/pokemon/${parseInt(id as string) + 1}`;
        response = await fetch(url);
        var nextData = await response.json();
        setNextPokemon(nextData);
      }
    }
    let notfound = false;
    if (parseInt(id as string) < 1 || parseInt(id as string) > 898) {
      notfound = true;
    }
    const goToNF = () => {
      nav("/404");
    };
    if (notfound) {
      goToNF();
    }
    fetchData();
  }, [id]);

  console.log(id);

  return (
    <div
      className="h-auto
        bg-primary_background
        bg-fixed"
    >
      {pokemon.id !== undefined && (
        <div className="mt-24 w-11/12 mx-auto flex flex-col justify-center space-y-6 capitalize">
          <div>
            <Link to="/">
              <div className="w-60 mb-12 mx-auto rounded-xl h-12 border-text_primary bg-light_blue border-2 mt-6 text-center py-1 font-primary_font text-3xl shadow-blue">
                Pokédex
              </div>
            </Link>
          </div>
          <div className=" flex flex-row w-full justify-between">
            <div
              className={` w-1/5 border-2 pl-1 text-white border-border_primary h-1/3 rounded-r-full border-l-0 bg-dark_blue bg-opacity-50 ${
                parseInt(id as string) > 1
                  ? "flex flex-row justify-start align-middle items-center space-x-2"
                  : "invisible"
              }`}
            >
              <Link to={`/p/${prevPokemon.id}`}>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="blue"
                    className="h-10 w-24"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M11 17l-5-5 5-5M18 17l-5-5 5-5" />
                  </svg>
                </div>
              </Link>
              <div>
                {prevPokemon.name !== undefined &&
                  prevPokemon.id.toString().replaceAll("-", " ")}
              </div>
              <div>
                {prevPokemon.name !== undefined &&
                  prevPokemon.name.replaceAll("-", " ")}
              </div>
            </div>
            <div
              className={`w-1/5 border-2 text-white pl-1 border-border_primary h-1/3 rounded-l-full border-r-0 bg-dark_blue bg-opacity-50 ${
                parseInt(id as string) < 898
                  ? "flex flex-row justify-center align-middle items-center space-x-2"
                  : "invisible"
              }`}
            >
              <div>
                {nextPokemon.name !== undefined &&
                  nextPokemon.id.toString().replaceAll("-", " ")}
              </div>
              <div>
                {nextPokemon.name !== undefined &&
                  nextPokemon.name.replaceAll("-", " ")}
              </div>
              <Link to={`/p/${nextPokemon.id}`}>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="blue"
                    className="h-10 w-24"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M13 17l5-5-5-5M6 17l5-5-5-5" />
                  </svg>
                </div>
              </Link>
            </div>
          </div>
          <PokeImage pokemon={pokemon}></PokeImage>
          <div className="flex flex-row w-9/12 mx-auto justify-between shadow-blue rounded-lg border-2 border-text_primary bg-dark_blue bg-opacity-50 p-8">
            <div className="w-1/2 flex flex-col space-y-3 align-middle">
              <div className="w-1/2 mx-auto text-2xl text-white capitalize">
                Type
              </div>
              <div className="w-1/2 mx-auto grid gap-2 grid-cols-2">
                {pokemon.types.map((type) => (
                  <CardTypeItem
                    key={type.type.name}
                    color={bgColors[type.type.name]}
                    text={type.type.name}
                  ></CardTypeItem>
                ))}
              </div>
            </div>
            <div className="w-1/2 text-white mr-0 flex-col space-y-3 align-middle justify-middle">
              <div className="flex flex-row w-3/4 mx-auto">
                <div className="w-1/2 text-lg text-light_blue">Height</div>
                <div className="w-1/2 text-lg lowercase">
                  {(pokemon.height * 0.1).toFixed(2)} m
                </div>
              </div>
              <div className="flex flex-row w-3/4 mx-auto">
                <div className="w-1/2 text-lg text-light_blue">Weight</div>
                <div className="w-1/2 text-lg lowercase">
                  {(pokemon.weight * 0.1).toFixed(2)} kg
                </div>
              </div>
              <div className="flex flex-row w-3/4 mx-auto">
                <div className="w-1/2 text-lg text-light_blue">Abililty</div>
                <div className="w-1/2 text-lg flex flex-col">
                  {pokemon.abilities.map((ability) => (
                    <div>{ability.ability.name.replaceAll("-", " ")}</div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      <Link to="/">
        <div className="my-10 w-2/5 h-auto mx-auto text-lg text-center py-3 cursor-pointer hover:bg-light_blue hover:text-black rounded-full border-2 border-light_blue text-shadow">
          Back to Pokedex
        </div>
      </Link>
    </div>
  );
};
