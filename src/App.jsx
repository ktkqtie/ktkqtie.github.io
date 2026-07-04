import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Art from './pages/Art';
import Caws from './pages/Caws';
import Duckweather from './pages/Duckweather';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/art" element={<Art />} />
      <Route path="/caws" element={<Caws />} />
      <Route path="/duckweather" element={<Duckweather />} />
    </Routes>
  );
}
