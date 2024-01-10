import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';



function App() {

  const [data, setData] = useState([]);
  const [selectedPokemon, setSelectedPokemon] = useState('')


  const fetchPokemon = () => {
    axios.get("https://pokeapi.co/api/v2/pokemon/?limit=20&offset=20")
      .then(async (response) => {
        const result = response.data.results;

        const pokemonDetails = await Promise.all(result.map(async (pokemon) => {
          const pokeUrl = await axios.get(pokemon.url);
          return pokeUrl.data
        }))


        console.log(pokemonDetails);
        setData(pokemonDetails)
      },
        (error) => {
          console.log(error);
        }
      );
  }

 const handleSelectChange = (event) => {
    setSelectedPokemon(event.target.value);
  };



  console.log("whats here?", data);
  useEffect(() => {
    fetchPokemon()
  }, [])


  return (
    <div className="App">



      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>

      <h1>PokeDex</h1>

<select value={selectedPokemon} onChange={handleSelectChange} >

      {data.map((pokeObj, index) => {

        return <p> key = {index} {pokeObj.name} {pokeObj.weight} <img src={pokeObj.sprites.front_default} ></img>  </p>


      })}
      </select>
      <p>
        <li>
          Hp: 20
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
