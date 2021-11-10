import React from 'react';
import NavBar from './components/NavBar';

import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Blog from './components/Blog';
import Contact from './components/Contact';

function App() {
  return (
    <Router>
      <div>UNDER CONSTRUCTION</div>
      <NavBar />
      <Routes>
        <Route path="/">{Home}</Route>
        <Route path="/about">{About}</Route>
        <Route path="/blog">{Blog}</Route>
        <Route path="/contact">{Contact}</Route>
      </Routes>
    </Router>
  );
}

export default App;
