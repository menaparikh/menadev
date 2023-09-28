import React, { useState, useEffect } from 'react';
import Main from './Pages/Main';
import Welcome from './Pages/Welcome';
import About from './Pages/About';
import Homework from './Pages/Homework'
import Navigation from './Navigation';
import './App.css';

import "@fontsource/readex-pro";
import "@fontsource/readex-pro/400.css"; // specific weight (higher is heavier/more bold)

function App() {
  const [currentPage, setCurrentPage] = useState('main'); // Default to 'main'

  let content;

  if (currentPage === 'main') {
    content = <Homework />;
  } else if (currentPage === 'welcome') {
    content = <Welcome />;
  }
  else if (currentPage === 'about') {
    content = <About />;
  }

  // return (
    // <div className="App">
    //   <Navigation setPage={setCurrentPage} />
    //   {content}
    // </div>
  // );
  return (
    <div className = "App">
      <Homework/>
    </div>
  )
}

export default App;
