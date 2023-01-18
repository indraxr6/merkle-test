import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from "./pages/Login"
import Home from "./pages/Home"
import Header from './components/Header/Header';

function App() {
  return (
    <div className='app'>
    <Router>
      <Routes>
        <Route exact path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  </div>
  );
}

export default App;
