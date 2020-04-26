import React, { Component, Fragment } from "react";
import axios from "axios";

import PokemonCard from "./PokemonCard";

export default class PokemonList extends Component {
  // Usando limit puedo limitar la cantidad a mostrar por página,
  // mientras que usando offset puedo especificar cuantos lugares se saltan
  state = {
    url: "https://pokeapi.co/api/v2/pokemon/?limit=10",
    pokemon: null,
  };

  async componentDidMount() {
    const res = await axios.get(this.state.url);
    this.setState({ pokemon: res.data["results"] });
  }

  render() {
    return (
      <Fragment>
        {this.state.pokemon ? (
          <div className="row mt-4">
            {this.state.pokemon.map((pokemon) => (
              <PokemonCard
                key={pokemon.name}
                name={pokemon.name}
                url={pokemon.url}
              />
            ))}
          </div>
        ) : (
          <h1>Loading Pokemon</h1>
        )}
      </Fragment>
    );
  }
}
