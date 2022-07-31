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
  const [isLoading, setIsLoading] = useState(true);
  const [isMax, setIsMax] = useState(false);
  const [filters, setFilters] = useState({
    types: new Set<String>(),
    ability: "all",
    regMin: 1,
    regMax: 900,
    offset: 0,
    search: "",
  });

  async function fetchData(
    isShuffle: boolean = false,
    isFilterChanged: boolean = true
  ) {
    // setIsLoading(true);

    let url: string = "http://127.0.0.1:8000/?";
    if (filters.ability !== "all") {
      url += `abilities=${filters.ability}&`;
    }
    if (filters.types.size > 0) {
      url += `types=${[...Array.from(filters.types)].join(",")}&`;
    }
    if (filters.search !== "") {
      url += `search=${filters.search}&`;
    }
    url += `min=${filters.regMin}&`;
    url += `max=${filters.regMax}&`;
    setFilters({ ...filters, offset: filters.offset + 20 });
    url += `offset=${isFilterChanged ? 20 : filters.offset + 20}`;

    if (isShuffle) {
      url += "&shuffle=true";
    }

    const response = await fetch(url);
    const data = await response.json();
    console.log(response);
    console.log(data);

    if (isFilterChanged) {
      setpokemonData(data["results"]);
    } else {
      setpokemonData((prev) => [...prev, ...data["results"]]);
    }
    setIsLoading(false);
    setIsMax(data["isMax"]);
  }

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    console.log("Filters", filters);
  }, [filters]);

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
          pokemonData: [pokemonData, setpokemonData],
          isMax: [isMax, setIsMax],
          filters: [filters, setFilters],
          isLoading: [isLoading, setIsLoading],
          fetchData: fetchData,
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
