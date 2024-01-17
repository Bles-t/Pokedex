import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import '@fontsource/inter';
import bootstrap from 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';




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
        setData(pokemonDetails)
      },
        (error) => {
          console.log(error);
        }
      );
  }


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
      <div class="row row-cols-1 row-cols-md-2 g-4">
      {data.map((pokeObj, index) => {

        return <div class="col-md-4">
            <div class="card" style={{ width: '18rem' }}>

              <p> key = {index} hp: {pokeObj.name}  <img  src={pokeObj.sprites.front_default} class="card-img-top"></img>  </p>
            </div>
          </div>

      })}
</div>
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
