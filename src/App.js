import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import '@fontsource/inter';
import Select from '@mui/joy/Select';
import Option from '@mui/joy/Option';



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

  const handleSelectChange = (value) => {
    setSelectedPokemon(value);
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
        <Select color="success"
          placeholder="Choose A Pokemon"
          size="lg"
          variant="solid" value={selectedPokemon} onChange={(value) => handleSelectChange(value)}
        >

          {data.map((pokeObj, index) => (

            <Option key={index} value={pokeObj.name} > {pokeObj.name} </Option>


          ))}
        </Select>
        {selectedPokemonObject && (
          <div>
            <img src={selectedPokemonObject.sprites.other.showdown.front_default
            } alt={`${selectedPokemonObject.name} sprite`} />
            <p>Name: {selectedPokemonObject.name}</p>
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
