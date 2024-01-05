import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';



function App() {

  const [data, setData] = useState([]);



  const fetchPokemon = () => {
    axios.get("https://pokeapi.co/api/v2/pokemon/ditto")
      .then((response) => {
        const result = response.data;
        console.log(result.abilities);
        setData(result.abilities)
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
      {data.map((pokeObj) => {
        return <p>  hp: {pokeObj.abilities}</p>
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
