import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import StartPage from './StartPage';
function App() {
  return (
    <Router>
      <div>

        <Routes path="/StartPage">
          <Route path="/StartPage" element={<StartPage />} />
        </Routes>

      </div>
    </Router>
  );
}

export default App;
