import './App.css';
import Navbar from './components/Navbar/index'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/index';
import About from './pages/about'

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" exact componenet={Home} />
        <Route path="/about" exact componenet={About} />
      </Routes>
    </Router>
  );
}

export default App;
