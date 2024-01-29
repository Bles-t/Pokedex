import { useEffect, useState } from 'react';

function PokemonPage(props) {

  const { data } = props.location.state;


  return (
    <div>
      <p>Name: {data.name}</p>
      <p></p>
    </div>
  );

}

export default PokemonPage;
