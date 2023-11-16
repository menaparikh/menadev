import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Main from './Pages/Main';
import Welcome from './Pages/Welcome';
import About from './Pages/About';
import SubcoursesArt from './Pages/Subcourses/SubcoursesArt'
import SubcoursesCompSci from './Pages/Subcourses/SubcoursesCompSci'
import SubcoursesHistory from './Pages/Subcourses/SubcoursesHistory'
import SubcoursesLanguage from './Pages/Subcourses/SubcoursesLanguage'
import SubcoursesMath from './Pages/Subcourses/SubcoursesMath'
import SubcoursesScience from './Pages/Subcourses/SubcoursesScience'

import './App.css';

import "@fontsource/readex-pro";
import "@fontsource/readex-pro/400.css"; // specific weight (higher is heavier/more bold)

function App() {
  return (
    <div className="App">
      <Router>
      <Routes>
        <Route path="/menadev" element={<Main/>}/>
        <Route path="/menadev/welcome" element={<Welcome/>}/>
        <Route path="/menadev/about" element={<About/>}/>
        <Route path="/menadev/subcourse/art" element={<SubcoursesArt/>}/>
        <Route path="/menadev/subcourse/computer-science" element={<SubcoursesCompSci/>}/>
        <Route path="/menadev/subcourse/history" element={<SubcoursesHistory/>}/>
        <Route path="/menadev/subcourse/language" element={<SubcoursesLanguage/>}/>
        <Route path="/menadev/subcourse/math" element={<SubcoursesMath/>}/>
        <Route path="/menadev/subcourse/science" element={<SubcoursesScience/>}/>
      </Routes>
    </Router>
    </div>
  )
}

export default App;
