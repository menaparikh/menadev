import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Main from './Pages/Main';
import Welcome from './Pages/Welcome';
import About from './Pages/About';
import Homework from './Pages/Homework'

import './App.css';

import "@fontsource/readex-pro";
import "@fontsource/readex-pro/400.css"; // specific weight (higher is heavier/more bold)

function App() {
  return (
    <div className="App">
      <Router>
      <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="/welcome" element={<Welcome/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/subcourse" element={<Homework/>}/>
      </Routes>
    </Router>
    </div>
  )
}

export default App;
