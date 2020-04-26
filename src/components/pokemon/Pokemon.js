import React, { useContext, useState, useEffect } from "react";
import { PokemonContext } from "../../context/PokemonContext";

const TYPE_COLORS = {
  bug: "B1C12E",
  dark: "4F3A2D",
  dragon: "755EDF",
  electric: "FCBC17",
  fairy: "F4B1F4",
  fighting: "823551D",
  fire: "E73B0C",
  flying: "A3B3F7",
  ghost: "6060B2",
  grass: "74C236",
  ground: "D3B357",
  ice: "A3E7FD",
  normal: "C8C4BC",
  poison: "934594",
  psychic: "ED4882",
  rock: "B9A156",
  steel: "B5B5C3",
  water: "3295F6",
};

const Pokemon = (props) => {
  const pokemonIndex = props.match.params.pokemonIndex;
  const { pokemon, saveIdPokemon } = useContext(PokemonContext);
  saveIdPokemon(pokemonIndex);

  const { name, stats } = pokemon;
  const imageUrl = `https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/${pokemonIndex}.png?raw=true`;

  return (
    <div className="row mt-4">
      <div className="col">
        <div className="card">
          <div className="card-header">
            <div className="row">
              <div className="col-5">
                <h4 className="mx-auto">
                  {name
                    ? name
                        .toLowerCase()
                        .split(" ")
                        .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
                        .join(" ")
                    : null}
                </h4>
              </div>
            </div>
          </div>
          <div className="card-body">
            <div className="row align-items-center">
              <div className="col-md-3">
                <img
                  src={imageUrl}
                  className="card-img-top rounded mx-auto mt-2"
                  alt={name}
                />
              </div>
              <div className="col-md-9">
                <div className="row align-items-center">
                  <div className="col-12 col-md-3">HP</div>
                  <div className="col-12 col-md-9">
                    <div className="progress">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        style={{
                          // width: `${stats.hp}%`,
                        }}
                        aria-valuenow="25"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      >
                        <small>{stats.hp}</small>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row align-items-center">
                  <div className="col-12 col-md-3">Attack</div>
                  <div className="col-12 col-md-9">
                    <div className="progress">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        style={
                          {
                            // width: `${pokemon.stats.attack}%`,
                          }
                        }
                        aria-valuenow="25"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      >
                        {/*<small>{pokemon.stats.attack}</small>*/}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row align-items-center">
                  <div className="col-12 col-md-3">Defense</div>
                  <div className="col-12 col-md-9">
                    <div className="progress">
                      <div
                        className="progress-bar"
                        role="progressBar"
                        style={
                          {
                            // width: `${pokemon.stats.defense}%`,
                          }
                        }
                        aria-valuenow="25"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      >
                        {/*<small>{pokemon.stats.defense}</small>*/}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row align-items-center">
                  <div className="col-12 col-md-3">Speed</div>
                  <div className="col-12 col-md-9">
                    <div className="progress">
                      <div
                        className="progress-bar"
                        role="progressBar"
                        style={
                          {
                            // width: `${pokemon.stats.speed}%`,
                          }
                        }
                        aria-valuenow="25"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      >
                        {/*<small>{pokemon.stats.speed}</small>*/}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row align-items-center">
                  <div className="col-12 col-md-3">Special Attack</div>
                  <div className="col-12 col-md-9">
                    <div className="progress">
                      <div
                        className="progress-bar"
                        role="progressBar"
                        style={
                          {
                            // width: `${pokemon.stats.specialAttack}%`,
                          }
                        }
                        aria-valuenow="25"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      >
                        {/*<small>{pokemon.stats.specialAttack}</small>*/}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row align-items-center">
                  <div className="col-12 col-md-3">Special Defense</div>
                  <div className="col-12 col-md-9">
                    <div className="progress">
                      <div
                        className="progress-bar"
                        role="progressBar"
                        style={
                          {
                            // width: `${pokemon.stats.specialDefense}%`,
                          }
                        }
                        aria-valuenow="25"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      >
                        {/*<small>{pokemon.stats.specialDefense}</small>*/}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row mt-1">
              {/*<p className="p-3">{pokemon.description}</p>*/}
            </div>
          </div>
          <hr />
          {/*<div className="card-body">*/}
          {/*  <h5 className="card-title text-center">Profile</h5>*/}
          {/*  <div className="row">*/}
          {/*    <div className="col-md-6">*/}
          {/*      <div className="row">*/}
          {/*        <div className="col-6">*/}
          {/*          <h6 className="float-right">Height:</h6>*/}
          {/*        </div>*/}
          {/*        <div className="col-6">*/}
          {/*          /!*<h6 className="float-left">{pokemon.height} cm</h6>*!/*/}
          {/*        </div>*/}
          {/*        <div className="col-6">*/}
          {/*          <h6 className="float-right">Weight:</h6>*/}
          {/*        </div>*/}
          {/*        <div className="col-6">*/}
          {/*          /!*<h6 className="float-left">{pokemon.weight} kgs</h6>*!/*/}
          {/*        </div>*/}
          {/*        <div className="col-6">*/}
          {/*          <h6 className="float-right">Catch Rate:</h6>*/}
          {/*        </div>*/}
          {/*        <div className="col-6">*/}
          {/*          /!*<h6 className="float-left">{pokemon.catchRate}%</h6>*!/*/}
          {/*        </div>*/}
          {/*        <div className="col-6">*/}
          {/*          <h6 className="float-right">Gender Ratio:</h6>*/}
          {/*        </div>*/}
          {/*        <div className="col-6">*/}
          {/*          <div className="progress">*/}
          {/*            <div*/}
          {/*              className="progress-bar"*/}
          {/*              role="progressbar"*/}
          {/*              style={{*/}
          {/*                // width: `${pokemon.genderRatioFemale}%`,*/}
          {/*                backgroundColor: "#c2185b",*/}
          {/*              }}*/}
          {/*              aria-valuenow="15"*/}
          {/*              aria-valuemin="0"*/}
          {/*              aria-valuemax="100"*/}
          {/*            >*/}
          {/*              /!*<small>{pokemon.genderRatioFemale}</small>*!/*/}
          {/*            </div>*/}
          {/*            <div*/}
          {/*              className="progress-bar"*/}
          {/*              role="progressbar"*/}
          {/*              style={{*/}
          {/*                // width: `${pokemon.genderRatioMale}%`,*/}
          {/*                backgroundColor: "#1976d2",*/}
          {/*              }}*/}
          {/*              aria-valuenow="30"*/}
          {/*              aria-valuemin="0"*/}
          {/*              aria-valuemax="100"*/}
          {/*            >*/}
          {/*              /!*<small>{pokemon.genderRatioMale}</small>*!/*/}
          {/*            </div>*/}
          {/*          </div>*/}
          {/*        </div>*/}
          {/*      </div>*/}
          {/*    </div>*/}
          {/*    <div className="col-md-6">*/}
          {/*      <div className="row">*/}
          {/*        <div className="col-6">*/}
          {/*          <h6 className="float-right">Egg Groups:</h6>*/}
          {/*        </div>*/}
          {/*        <div className="col-6">*/}
          {/*          /!*<h6 className="float-left">{pokemon.eggGroups} </h6>*!/*/}
          {/*        </div>*/}
          {/*        <div className="col-6">*/}
          {/*          <h6 className="float-right">Hatch Steps:</h6>*/}
          {/*        </div>*/}
          {/*        <div className="col-6">*/}
          {/*          /!*<h6 className="float-left">{pokemon.hatchSteps}</h6>*!/*/}
          {/*        </div>*/}
          {/*        <div className="col-6">*/}
          {/*          <h6 className="float-right">Abilities:</h6>*/}
          {/*        </div>*/}
          {/*        <div className="col-6">*/}
          {/*          /!*<h6 className="float-left">{pokemon.abilities}</h6>*!/*/}
          {/*        </div>*/}
          {/*        <div className="col-6">*/}
          {/*          <h6 className="float-right">EVs:</h6>*/}
          {/*        </div>*/}
          {/*        <div className="col-6">*/}
          {/*          /!*<h6 className="float-left">{pokemon.evs}</h6>*!/*/}
          {/*        </div>*/}
          {/*      </div>*/}
          {/*    </div>*/}
          {/*  </div>*/}
          {/*</div>*/}
          <div className="card-footer text-muted">
            Data From{" "}
            <a
              href="https://pokeapi.co/"
              target="_blank"
              className="card-link"
              rel="noopener noreferrer"
            >
              PokeAPI.co
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pokemon;

// export default class Pokemon extends Component {
//   state = {
//     name: "",
//     pokemonIndex: "",
//     imageUrl: "",
//     types: [],
//     description: "",
//     stats: {
//       hp: "",
//       attack: "",
//       defense: "",
//       speed: "",
//       specialAttack: "",
//       specialDefense: "",
//     },
//     height: "",
//     weight: "",
//     eggGroups: "",
//     catchRate: "",
//     abilities: "",
//     genderRatioMale: "",
//     genderRatioFemale: "",
//     evs: "",
//     hatchSteps: "",
//     language: "en",
//   };
//
//   async componentDidMount() {
//     const { pokemonIndex } = this.props.match.params;
//
//     const pokemonUrl = `https://pokeapi.co/api/v2/pokemon/${pokemonIndex}/`;
//     const pokemonSpeciesUrl = `https://pokeapi.co/api/v2/pokemon-species/${pokemonIndex}/`;
//
//     const pokemonRes = await axios.get(pokemonUrl);
//
//     const name = pokemonRes.data.name;
//     const imageUrl = pokemonRes.data.sprites.front_default;
//
//     let { hp, attack, defense, speed, specialAttack, specialDefense } = "";
//
//     pokemonRes.data.stats.map((stat) => {
//       switch (stat.stat.name) {
//         case "hp":
//           hp = stat["base_stat"];
//           break;
//         case "attack":
//           attack = stat["base_stat"];
//           break;
//         case "defense":
//           defense = stat["base_stat"];
//           break;
//         case "speed":
//           speed = stat["base_stat"];
//           break;
//         case "special-attack":
//           specialAttack = stat["base_stat"];
//           break;
//         case "special-defense":
//           specialDefense = stat["base_stat"];
//           break;
//         default:
//           break;
//       }
//     });
//
//     const height = pokemonRes.data.height * 10;
//     const weight = pokemonRes.data.weight * 0.1;
//
//     const types = pokemonRes.data.types.map((type) => type.type.name);
//
//     const abilities = pokemonRes.data.abilities.map((ability) => {
//       return ability.ability.name
//         .toLowerCase()
//         .split("-")
//         .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
//         .join(" ");
//     });
//
//     const evs = pokemonRes.data.stats
//       .filter((stat) => stat.effort > 0)
//       .map(
//         (stat) =>
//           `${stat.effort} ${stat.stat.name
//             .toLowerCase()
//             .split("-")
//             .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
//             .join(" ")}`
//       )
//       .join(", ");
//
//     await axios.get(pokemonSpeciesUrl).then((res) => {
//       let description = "";
//       res.data.flavor_text_entries.some((flavor) => {
//         if (flavor.language.name === this.state.language) {
//           description = flavor.flavor_text;
//           return;
//         }
//
//         const femaleRate = res.data["gender_rate"];
//         const genderRatioFemale = 12.5 * femaleRate;
//         const genderRatioMale = 12.5 * (8 - femaleRate);
//
//         const catchRate = Math.round((100 / 255) * res.data["capture_rate"]);
//
//         const eggGroups = res.data["egg_groups"]
//           .map((group) =>
//             group.name
//               .toLowerCase()
//               .split(" ")
//               .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
//               .join(" ")
//           )
//           .join(", ");
//
//         const hatchSteps = 255 * (res.data["hatch_counter"] + 1);
//
//         this.setState({
//           description,
//           genderRatioFemale,
//           genderRatioMale,
//           catchRate,
//           eggGroups,
//           hatchSteps,
//         });
//       });
//
//       this.setState({
//         imageUrl,
//         pokemonIndex,
//         name,
//         types,
//         stats: {
//           hp,
//           attack,
//           defense,
//           speed,
//           specialAttack,
//           specialDefense,
//         },
//         height,
//         weight,
//         abilities,
//         evs,
//       });
//     });
//   }
//
//   render() {
//     return (
//       <div className="col">
//         <div className="card">
//           <div className="card-header">
//             <div className="row">
//               <div className="col-5">
//                 <h4 className="mx-auto">
//                   {this.state.name
//                     .toLowerCase()
//                     .split(" ")
//                     .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
//                     .join(" ")}
//                 </h4>
//               </div>
//               <div className="col-7">
//                 <div className="float-right">
//                   {this.state.types.map((type) => (
//                     <span
//                       key={type}
//                       className="badge badge-pill mr-1"
//                       style={{
//                         backgroundColor: `#${TYPE_COLORS[type]}`,
//                         color: "white",
//                       }}
//                     >
//                       {type
//                         .toLowerCase()
//                         .split(" ")
//                         .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
//                         .join(" ")}
//                     </span>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="card-body">
//             <div className="row align-items-center">
//               <div className="col-md-3">
//                 <img
//                   src={this.state.imageUrl}
//                   className="card-img-top rounded mx-auto mt-2"
//                   alt=""
//                 />
//               </div>
//               <div className="col-md-9">
//                 <div className="row align-items-center">
//                   <div className="col-12 col-md-3">HP</div>
//                   <div className="col-12 col-md-9">
//                     <div className="progress">
//                       <div
//                         className="progress-bar"
//                         role="progressbar"
//                         style={{
//                           width: `${this.state.stats.hp}%`,
//                         }}
//                         aria-valuenow="25"
//                         aria-valuemin="0"
//                         aria-valuemax="100"
//                       >
//                         <small>{this.state.stats.hp}</small>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="row align-items-center">
//                   <div className="col-12 col-md-3">Attack</div>
//                   <div className="col-12 col-md-9">
//                     <div className="progress">
//                       <div
//                         className="progress-bar"
//                         role="progressBar"
//                         style={{
//                           width: `${this.state.stats.attack}%`,
//                         }}
//                         aria-valuenow="25"
//                         aria-valuemin="0"
//                         aria-valuemax="100"
//                       >
//                         <small>{this.state.stats.attack}</small>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="row align-items-center">
//                   <div className="col-12 col-md-3">Defense</div>
//                   <div className="col-12 col-md-9">
//                     <div className="progress">
//                       <div
//                         className="progress-bar"
//                         role="progressBar"
//                         style={{
//                           width: `${this.state.stats.defense}%`,
//                         }}
//                         aria-valuenow="25"
//                         aria-valuemin="0"
//                         aria-valuemax="100"
//                       >
//                         <small>{this.state.stats.defense}</small>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="row align-items-center">
//                   <div className="col-12 col-md-3">Speed</div>
//                   <div className="col-12 col-md-9">
//                     <div className="progress">
//                       <div
//                         className="progress-bar"
//                         role="progressBar"
//                         style={{
//                           width: `${this.state.stats.speed}%`,
//                         }}
//                         aria-valuenow="25"
//                         aria-valuemin="0"
//                         aria-valuemax="100"
//                       >
//                         <small>{this.state.stats.speed}</small>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="row align-items-center">
//                   <div className="col-12 col-md-3">Special Attack</div>
//                   <div className="col-12 col-md-9">
//                     <div className="progress">
//                       <div
//                         className="progress-bar"
//                         role="progressBar"
//                         style={{
//                           width: `${this.state.stats.specialAttack}%`,
//                         }}
//                         aria-valuenow="25"
//                         aria-valuemin="0"
//                         aria-valuemax="100"
//                       >
//                         <small>{this.state.stats.specialAttack}</small>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="row align-items-center">
//                   <div className="col-12 col-md-3">Special Defense</div>
//                   <div className="col-12 col-md-9">
//                     <div className="progress">
//                       <div
//                         className="progress-bar"
//                         role="progressBar"
//                         style={{
//                           width: `${this.state.stats.specialDefense}%`,
//                         }}
//                         aria-valuenow="25"
//                         aria-valuemin="0"
//                         aria-valuemax="100"
//                       >
//                         <small>{this.state.stats.specialDefense}</small>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="row mt-1">
//               <p className="p-3">{this.state.description}</p>
//             </div>
//           </div>
//           <hr />
//           <div className="card-body">
//             <h5 className="card-title text-center">Profile</h5>
//             <div className="row">
//               <div className="col-md-6">
//                 <div className="row">
//                   <div className="col-6">
//                     <h6 className="float-right">Height:</h6>
//                   </div>
//                   <div className="col-6">
//                     <h6 className="float-left">{this.state.height} cm</h6>
//                   </div>
//                   <div className="col-6">
//                     <h6 className="float-right">Weight:</h6>
//                   </div>
//                   <div className="col-6">
//                     <h6 className="float-left">{this.state.weight} kgs</h6>
//                   </div>
//                   <div className="col-6">
//                     <h6 className="float-right">Catch Rate:</h6>
//                   </div>
//                   <div className="col-6">
//                     <h6 className="float-left">{this.state.catchRate}%</h6>
//                   </div>
//                   <div className="col-6">
//                     <h6 className="float-right">Gender Ratio:</h6>
//                   </div>
//                   <div className="col-6">
//                     <div className="progress">
//                       <div
//                         className="progress-bar"
//                         role="progressbar"
//                         style={{
//                           width: `${this.state.genderRatioFemale}%`,
//                           backgroundColor: "#c2185b",
//                         }}
//                         aria-valuenow="15"
//                         aria-valuemin="0"
//                         aria-valuemax="100"
//                       >
//                         <small>{this.state.genderRatioFemale}</small>
//                       </div>
//                       <div
//                         className="progress-bar"
//                         role="progressbar"
//                         style={{
//                           width: `${this.state.genderRatioMale}%`,
//                           backgroundColor: "#1976d2",
//                         }}
//                         aria-valuenow="30"
//                         aria-valuemin="0"
//                         aria-valuemax="100"
//                       >
//                         <small>{this.state.genderRatioMale}</small>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               <div className="col-md-6">
//                 <div className="row">
//                   <div className="col-6">
//                     <h6 className="float-right">Egg Groups:</h6>
//                   </div>
//                   <div className="col-6">
//                     <h6 className="float-left">{this.state.eggGroups} </h6>
//                   </div>
//                   <div className="col-6">
//                     <h6 className="float-right">Hatch Steps:</h6>
//                   </div>
//                   <div className="col-6">
//                     <h6 className="float-left">{this.state.hatchSteps}</h6>
//                   </div>
//                   <div className="col-6">
//                     <h6 className="float-right">Abilities:</h6>
//                   </div>
//                   <div className="col-6">
//                     <h6 className="float-left">{this.state.abilities}</h6>
//                   </div>
//                   <div className="col-6">
//                     <h6 className="float-right">EVs:</h6>
//                   </div>
//                   <div className="col-6">
//                     <h6 className="float-left">{this.state.evs}</h6>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="card-footer text-muted">
//             Data From{" "}
//             <a
//               href="https://pokeapi.co/"
//               target="_blank"
//               className="card-link"
//             >
//               PokeAPI.co
//             </a>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }
