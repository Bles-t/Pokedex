import React from "react";
import { useLocation } from "react-router-dom";

function PokemonPage(props) {

  const location = useLocation();

  const {state} = location;

  console.log("whats this poke", state);
  return (
    <div>
      <p>Name: </p>
      <p></p>
    </div>
  );

}

export default PokemonPage;
