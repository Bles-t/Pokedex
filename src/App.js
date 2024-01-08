import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';



function App() {

  const [data, setData] = useState([]);



  const fetchPokemon = () => {
    axios.get("https://pokeapi.co/api/v2/pokemon/?limit=20&offset=20")
      .then(async (response) => {
        const result = response.data.results;

        const pokemonDetails = await Promise.all(result.map(async (pokemon) => {
          const pokeUrl = await axios.get(pokemon.url);
          return pokeUrl.data
        }))


        console.log(pokemonDetails);
        setData([pokemonDetails])
      },
        (error) => {
          console.log(error);
        }
      );
  }



  useEffect(() => {
    fetchPokemon()
  }, [])


  return (
    <div className="App">



      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>

      <h1>PokeDex</h1>
      {data.map((pokeObj, index) => {

        return <p> key={index} hp: {pokeObj.name}   </p>



      })}
      <p>
        <li>
          Hp:
        </li>
        <li>
          Attack:
        </li>
        <li>
          Defense:
        </li>
        <li>
          Speed:
        </li>
        <li>
          Sp. Attack
        </li>
        <li>
          Sp. Defense
        </li>
      </p>

    </div>
  );
}

export default App;
