import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import '@fontsource/inter';
import bootstrap from 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { type } from '@testing-library/user-event/dist/type';
import Search from './searchBar';



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

<div className='wrapper'>
<Search>  </Search>
</div>

      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>

      <h1>PokeDex</h1>



      <div class="row row-cols-1 row-cols-md-2 g-4">
        {data.map((pokeObj, index) => {

          return <div key={index} class="col-md-4">
            <div class="card" style={{ width: '18rem' }}>

              <img src={pokeObj.sprites.front_default} class="card-img-top"></img>
              <h5> {pokeObj.name} </h5>
              {/* i addded this because not every pokemon has two types. so i need to intrate throguh the array and show what are all the types are. */}
              <p> Type: {pokeObj.types.map((typeObj, typeIndex) => (
                <span key={typeIndex}> {typeObj.type.name}</span>
              ))}
              </p>

            </div>
          </div>

        })}
      </div>

    </div>
  );
}

export default App;
