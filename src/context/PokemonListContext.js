import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const PokemonListContext = createContext();

const PokemonListProvider = (props) => {
  const [list, saveList] = useState([]);


  useEffect(() => {
    const getPokemons = async () => {
      const url = "https://pokeapi.co/api/v2/pokemon/?limit=5"
      const pokemons = await axios.get(url);
      saveList(pokemons.data.results);
    }

    getPokemons();
  }, [])

  return (
    <PokemonListContext.Provider value={{
      list
    }}>
      {props.children}
    </PokemonListContext.Provider>
  )
};

export default PokemonListProvider;
