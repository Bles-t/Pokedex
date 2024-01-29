import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import StartPage from './StartPage';
import PokemonPage from './PokemonPage';
function App() {
  return (
    <Router>
      <div>

        <Routes path="/StartPage">
          <Route path="/StartPage" element={<StartPage />} />
        </Routes>

        <Routes path="/PokemonPage">
          <Route path="/PokemonPage" element={<PokemonPage />} />
        </Routes>


      </div>
    </Router>
  );
}

export default App;
