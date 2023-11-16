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
        <Route path="/" element={<Main/>}/>
        <Route path="/welcome" element={<Welcome/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/subcourse/art" element={<SubcoursesArt/>}/>
        <Route path="/subcourse/computer-science" element={<SubcoursesCompSci/>}/>
        <Route path="/subcourse/history" element={<SubcoursesHistory/>}/>
        <Route path="/subcourse/language" element={<SubcoursesLanguage/>}/>
        <Route path="/subcourse/math" element={<SubcoursesMath/>}/>
        <Route path="/subcourse/science" element={<SubcoursesScience/>}/>
      </Routes>
    </Router>
    </div>
  )
}

export default App;
