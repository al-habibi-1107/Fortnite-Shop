import React from 'react'

import Navbar from './components/Navbar';
import Home from './components/Home';
import Shop from './components/Shop';
import Name from './components/Name';
import { BrowserRouter as Router} from "react-router-dom";
import './App.css';

function App() {
  return (
    <Router>
    <Navbar/>
    <Home/>
    <Shop/>
    </Router>
  );
}

export default App;
