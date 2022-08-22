export interface Pokedex {
  abilities: Ability[];
  height: number;
  id: number;
  name: string;
  types: Type[];
  weight: number;
}

export interface Ability {
  id: number;
  name: string;
  url: string;
}

export interface Type {
  id: number;
  name: string;
  url: string;
}

export interface IFilters {
  types: Set<String>;
  ability: string;
  regMin: number;
  regMax: number;
  offset: number;
  search: string;
}

export interface IContext {
  pokemonData: [Pokedex[], React.Dispatch<React.SetStateAction<Pokedex[]>>];
  filters: [IFilters, React.Dispatch<React.SetStateAction<IFilters>>];
  isLoading: [boolean, React.Dispatch<React.SetStateAction<boolean>>];
  isMax: [boolean, React.Dispatch<React.SetStateAction<boolean>>];
  fetchData: (isFilterChanged?: boolean) => Promise<void>;
}
