import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import '@fontsource/inter';
import bootstrap from 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';



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

  // i did this because the "selctedPokemon" varable didnt have accesss to the Data.map propeties i needed.

  // so i created another Variable that uses find . If pokemon name matches the slected pokemon then its true and ill have accesss to the properties i need.
  const selectedPokemonObject = data.find(pokemon => pokemon.name === selectedPokemon);



  console.log("whats here?", selectedPokemon);
  useEffect(() => {
    fetchPokemon()
  }, [])


  return (


    <div className="App">
      <h1>PokeDex</h1>




      <div>
        <select class="form-select form-select-lg mb-3" aria-label="Default select example"
          value={selectedPokemon} onChange={handleSelectChange}>

          {data.map((pokeObj, index) => (

            <option value={pokeObj.name} key={index} > {pokeObj.name} </option>


          ))}
        </select>

        {selectedPokemonObject && (
          <div className="card border-secondary mb-3" style={{ width: '18rem' }} >
            <img src={selectedPokemonObject.sprites.other.showdown.front_default
            } class="card-img-top" alt={`${selectedPokemonObject.name} sprite`} />
            <h5 class="card-title">Name: {selectedPokemonObject.name}</h5>
            <p>Hp:{selectedPokemonObject.stats[0].base_stat}</p>
            <p>Attack:{selectedPokemonObject.stats[1].base_stat}</p>
            <p>Defense:{selectedPokemonObject.stats[2].base_stat}</p>
            <p>Special Attack:{selectedPokemonObject.stats[3].base_stat}</p>
            <p>Special Defense:{selectedPokemonObject.stats[4].base_stat}</p>
            <p>Speed:{selectedPokemonObject.stats[5].base_stat}</p>



          </div>
        )}



      </div>
    </div>
  );
}
export default App;
