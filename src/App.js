import { Router, Routes, Route } from 'react-router-dom';
import StartPage from './StartPage';
import PokemonPage from './PokemonPage';
function App() {
  return (

      <div>

        <Routes>
          <Route path="/StartPage" element={<StartPage />} />


          <Route path="/PokemonPage" element={<PokemonPage />} />

        </Routes>


      </div>
    
  );
}

export default App;
