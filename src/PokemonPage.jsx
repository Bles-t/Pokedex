import React from "react";
import { useLocation } from "react-router-dom";
import './PokemonPage.css'

function PokemonPage(props) {

  const location = useLocation();

  const pokemon = location.state.pokemon;

  console.log("whats this poke", pokemon);
  return (
    <div>

      <img src={pokemon.sprites.other.dream_world.front_default} width={250} height={250} class="card-img-top"></img>

      <p>Name: {pokemon.name} </p>
      <div className="ordernumber">
        <p  >Order: {pokemon.order}</p>
      </div>
      <p>Base Stats</p>
      <p>Hp:{pokemon.stats[0].base_stat}</p>
      <p>Attack:{pokemon.stats[1].base_stat}</p>
      <p>Defense:{pokemon.stats[2].base_stat}</p>
      <p>Special Attack:{pokemon.stats[3].base_stat}</p>
      <p>Special Defense:{pokemon.stats[4].base_stat}</p>
      <p>Speed:{pokemon.stats[5].base_stat}</p>

      <p></p>
    </div>
  );

}

export default PokemonPage;
