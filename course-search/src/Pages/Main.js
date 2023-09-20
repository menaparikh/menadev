import React, { useState, useEffect } from 'react';
import '../Styles/Main.css';
import CourseSquare from '../Components/CourseSquare';


function Main() {
  return (
    <div className="main-parent">
      <h1 className="main-header-text">Course Search</h1>
      <div className="courses">
        <CourseSquare courseName={"math"} />
        <CourseSquare courseName={"science"} />
        <CourseSquare courseName={"history"} />
        <CourseSquare courseName={"language"} />
        <CourseSquare courseName={"world geo"} />
        <CourseSquare courseName={"art"} />
      </div>
    </div>
  );
}

export default Main;
