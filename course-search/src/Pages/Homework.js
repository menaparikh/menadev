// hint: reference Main.js and Main.css, as well as CourseSquare.js if you're stuck
import React, { useState, useEffect } from 'react';
import '../Styles/Homework.css';
import Subcourse from '../Components/Subcourse';
import Sidebar from '../Components/Sidebar';

function Homework() {
  return (
    <div className="homework-parent">
      <Sidebar/>
      <h1 className="homework-header-text">Course Search</h1>
      <div className="subcourses">
        {/* Put the subcourses here */}
        <Subcourse courseName={"Trigonometry"}/>
        <Subcourse courseName={"Algebra I"}/>
        <Subcourse courseName={"Algebra II"}/>
        <Subcourse courseName={"Algebra III"}/>
        <Subcourse courseName={"Calculus AB"}/>
        <Subcourse courseName={"Calculus BC"}/>
       </div>
    </div>
  );
}

export default Homework;
