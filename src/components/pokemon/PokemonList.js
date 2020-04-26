import React, { Fragment, useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { PokemonListContext } from "../../context/PokemonListContext";

const Sprite = styled.img`
  width: 5em;
  height: 5em;
  display: none;
`;

const Card = styled.div`
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  &:hover {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  }
  -moz-user-select: none;
  -website-user-select: none;
  user-select: none;
  -o-user-select: none;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
`;

const PokemonList = () => {
  const { list } = useContext(PokemonListContext);

  return (
    <Fragment>
      {list ? (
        <div className="row mt-4">
          {list.map((pokemon) => {
            const pokemonIndex = pokemon.url.split("/")[
              pokemon.url.split("/").length - 2
            ];
            const imageUrl = `https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/${pokemonIndex}.png?raw=true`;

            return (
              <div className="col-1-5 mb-5" key={pokemonIndex}>
                <StyledLink to={`pokemon/${pokemonIndex}`}>
                  <Card className="card pb-2">
                    <h6 className="card-header">
                      {pokemon.name
                        .toLowerCase()
                        .split(" ")
                        .map(
                          (letter) =>
                            letter.charAt(0).toUpperCase() + letter.substring(1)
                        )
                        .join(" ")}
                    </h6>
                      <Sprite
                        className="card-img-top rounded mx-auto mt-2"
                        src={imageUrl}
                        style={{ display: "block"}}
                      />
                  </Card>
                </StyledLink>
              </div>
            );
          })}
        </div>
      ) : (
        <h1>Loading Pokemon</h1>
      )}
    </Fragment>
  );
};

export default PokemonList;
