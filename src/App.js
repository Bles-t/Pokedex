import logo from './logo.svg';
import './App.css';
import axios from 'axios';




function App() {


    axios.get("https://pokeapi.co/api/v2/pokemon/ditto")
    .then((response) => {
        var result = response.data;
        console.log(result);
      },
      (error) => {
        console.log(error);
      }
    );





  return (
    <div className="App">
      
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
      <h1>PokeDex</h1>
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
