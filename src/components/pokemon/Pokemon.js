import React, { Component } from "react";
import axios from "axios";

export default class Pokemon extends Component {
  state = {
    name: "",
    pokemonIndex: "",
    imageUrl: "",
    types: [],
    description: "",
    stats: {
      hp: "",
      attack: "",
      defense: "",
      speed: "",
      specialAttack: "",
      specialDefense: "",
    },
    height: "",
    weight: "",
    eggGroup: "",
    abilities: "",
    genderRatioMale: "",
    genderRatioFemale: "",
    evs: "",
    hatchSteps: "",
  };

  async componentDidMount() {
    const { pokemonIndex } = this.props.match.params;

    const pokemonUrl = `https://pokeapi.co/api/v2/pokemon/${pokemonIndex}/`;
    const pokemonSpeciesUrl = `https://pokeapi.co/api/v2/pokemon-species/${pokemonIndex}/`;

    const pokemonRes = await axios.get(pokemonUrl);

    const name = pokemonRes.data.name;
    const imageUrl = pokemonRes.data.sprites.front_default;

    let { hp, attack, defense, speed, specialAttack, specialDefense } = "";

    pokemonRes.data.stats.map((stat) => {
      switch (stat.stat.name) {
        case "hp":
          hp = stat["base_stat"];
          break;
        case "attack":
          attack = stat["base_stat"];
          break;
        case "hp":
          hp = stat["base_stat"];
          break;
        case "defense":
          defense = stat["base_stat"];
          break;
        case "speed":
          speed = stat["base_stat"];
          break;
        case "special-attack":
          specialAttack = stat["base_stat"];
          break;
        case "special-defense":
          specialDefense = stat["base_stat"];
          break;
      }
    });

    const height = pokemonRes.data.height;
    const weight = pokemonRes.data.weight * 100;

    const types = pokemonRes.data.types.map((type) => type.type.name);

    const abilities = pokemonRes.data.abilities.map((ability) => {
      return ability.ability.name
        .toLowerCase()
        .split("-")
        .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
        .join(" ");
    });

    const evs = pokemonRes.data.stats
      .filter((stat) => stat.effort > 0)
      .map((stat) =>
        `${stat.effor} ${stat.stat.name}`
          .toLowerCase()
          .split("-")
          .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
          .join(" ")
      )
      .join(", ");

    await axios.get(pokemonSpeciesUrl).then((res) => {
      let description = "";
      res.data.flavor_text_entries.some((flavor) => {
        if (flavor.language.name === "en") {
          description = flavor.flavor_text;
          return
        }

        const femaleRate = res.data['gender_rate']
      });
    });
  }

  render() {
    return (
      <div>
        <h1>{this.state.name}</h1>
      </div>
    );
  }
}
