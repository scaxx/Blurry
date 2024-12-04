import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Welcome from './pages/Welcome'
import Drawing from './pages/Drawing'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/Drawing" element={<Drawing />} />
      </Routes>
    </Router>
  );
}

export default App
