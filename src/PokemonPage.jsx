import React from "react";
import { useLocation } from "react-router";

function PokemonPage(props) {

  const location = useLocation();

  console.log("whats this", location);
  return (
    <div>
      <p>Name: </p>
      <p></p>
    </div>
  );

}

export default PokemonPage;
