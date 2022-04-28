import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Welcome from './components/Welcome';
import Portfolio from './components/Portfolio';
import Navigation from './components/Navigation';
import Contact from './components/Contact';
import banner from './images/banner-unsplash.jpg';
import './App.css';

const date = `${new Date().getFullYear()}`;

function App() {
  return (
    <div className='App' style={{ backgroundImage: `url(${banner})` }}>
      <Router>
        <Navigation />
        <Routes>
          <Route path='/' element={<Welcome />} exact />
          <Route path='/portfolio' element={<Portfolio />} exact />
          <Route path='/contact' element={<Contact />} exact />
        </Routes>
      </Router>

      <footer>
        <p>
          created by 'lolu <span>&copy; {date}</span>
        </p>
      </footer>
    </div>
  );
}

export default App;
