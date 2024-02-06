import React from "react";
import { useLocation } from "react-router-dom";

function PokemonPage(props) {

  const location = useLocation();

  const pokemon = location.state.pokemon;

  console.log("whats this poke", pokemon);
  return (
    <div>
      <p>Name: {pokemon.name} </p>
      <p></p>
    </div>
  );

}

export default PokemonPage;
