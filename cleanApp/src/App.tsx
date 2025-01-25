import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import './App.css'
import Home from './pages/Home';
import About from './pages/about';
import Action from './pages/action';
import NavBar from './pages/NavBar';

function App() {

  return (
    <Router>
      <div className="App">
      <NavBar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/action" element={<Action />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
