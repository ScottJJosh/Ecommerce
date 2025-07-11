import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './pages/About';
import Amenities from './pages/Amenities';
import Contact from './pages/Contact';
import Rentals from './pages/Rentals';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Rentals />} />
        <Route path="/about" element={<About />} />
        <Route path="/Amenities" element={<Amenities />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
