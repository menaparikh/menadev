// hint: reference Main.js and Main.css, as well as CourseSquare.js if you're stuck
import React, { useState, useEffect } from 'react';
import '../Styles/Main.css';
import Subcourse from '../Components/Subcourse';

function Homework() {
  return (
    <div className="homework-parent">
      <h1 className="homework-header-text">Course Search</h1>
      <div className="subcourses">
        {/* Put the subcourses here */}
        <Subcourse courseName={"trigonometry"}/>
      </div>
    </div>
  );
}

export default Homework;
