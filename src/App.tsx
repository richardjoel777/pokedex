import { createContext, useEffect, useState } from "react";
import { Main } from "./components/Main";
import NavBar from "./components/navBar";
import { Pokedex, IContext } from "./interfaces/types";
import { BrowserRouter, Routes, Route, HashRouter } from "react-router-dom";
import { PokemonInfo } from "./components/PokemonInfo";
import { NotFound } from "./components/NotFound";

// const PokemonsContext = createContext(t1);
export const pokemonContext = createContext({} as IContext);

function App() {
  const [pokemonData, setpokemonData] = useState<Pokedex[]>([]);
  const [loadedData, setLoadedData] = useState<Pokedex[]>([]);
  const [pokeCount, setPokeCount] = useState<number>(0);
  const [filters, setFilters] = useState({
    types: new Set<String>(),
    ability: "all",
    regMin: 1,
    regMax: 897,
  });

  useEffect(() => {
    async function fetchData() {
      const url: string = "https://pokeapi.co/api/v2/pokemon/?limit=897";
      var temp: Pokedex[] = [];
      var response = await fetch(url);
      var data = await response.json();
      var l: { name: string; url: string }[] = data.results;
      for (var item of l) {
        var pokemon = await fetch(item.url);
        var responseData: Pokedex = await pokemon.json();
        temp.push(responseData);
      }
      console.log(temp);
      setpokemonData([...temp]);
      setPokeCount((prevState) => prevState + 20);
      setLoadedData([...temp]);
    }
    fetchData();
  }, []);

  useEffect(() => {
    console.log("Filters", filters);
  }, [filters]);

  useEffect(() => {
    console.log("LoadedData", loadedData);
  }, [loadedData]);

  // useEffect(() => {
  //   console.log("hey");
  //   setPokeCount(0);
  //   setLoadedData([...pokemonData.slice(0, 20)]);
  // }, [pokemonData]);

  return (
    <div>
      <NavBar></NavBar>
      <pokemonContext.Provider
        value={{
          loadedData: [loadedData, setLoadedData],
          pokemonData: [pokemonData, setpokemonData],
          pokeCount: [pokeCount, setPokeCount],
          filters: [filters, setFilters],
        }}
      >
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/p/:id" element={<PokemonInfo />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </pokemonContext.Provider>
    </div>
  );
}

export default App;
