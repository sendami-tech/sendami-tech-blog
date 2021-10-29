import React from 'react';
import NavBar from './components/NavBar';
import About from './components/About';
import Blog from './components/Blog';
import Home from './components/Home';

import './App.css';

function App() {
  return (
  <main>
    <NavBar />
    <About />
    <Blog />
    <Home />
  </main>
  );
}

export default App;
