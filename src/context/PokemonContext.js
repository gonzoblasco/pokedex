import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const PokemonContext = createContext();

const PokemonProvider = (props) => {
  const [idPokemon, saveIdPokemon] = useState(null);
  const [pokemon, savePokemon] = useState({});

  useEffect(() => {
    const getPokemon = async () => {
      if (!idPokemon) return;

      const url = `https://pokeapi.co/api/v2/pokemon/${idPokemon}`;
      const pokemonDetails = await axios.get(url);

      savePokemon(pokemonDetails.data);
    };

    getPokemon();
  }, [idPokemon]);

  return (
    <PokemonContext.Provider
      value={{
        pokemon,
        saveIdPokemon,
      }}
    >
      {props.children}
    </PokemonContext.Provider>
  );
};

export default PokemonProvider;
