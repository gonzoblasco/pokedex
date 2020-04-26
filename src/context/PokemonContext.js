import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const PokemonContext = createContext();

const PokemonProvider = (props) => {
  const [list, saveList] = useState([]);


  useEffect(() => {
    const getPokemon = async () => {
      const url = "https://pokeapi.co/api/v2/pokemon/?limit=5"
      const pokemons = await axios.get(url);
      saveList(pokemons.data.results);
    }

    getPokemon();
  }, [])

  return (
    <PokemonContext.Provider value={{
      list
    }}>
      {props.children}
    </PokemonContext.Provider>
  )
};

export default PokemonProvider;
