import React, { useState, useEffect } from 'react';
import '../Styles/Main.css';
import CourseSquare from '../Components/CourseSquare';
import Sidebar from '../Components/Sidebar';

function Main() {
  return (
    <div className="main-parent">
      <Sidebar/>
      <h1 className="main-header-text">Course Search</h1>
      <div className="courses">
        <CourseSquare courseName={"math"} />
        <CourseSquare courseName={"science"} to="/subcourse/science"/>
        <CourseSquare courseName={"history"} />
        <CourseSquare courseName={"language"} />
        <CourseSquare courseName={"computer science"} />
        <CourseSquare courseName={"art"} to="/subcourse/art"/>
      </div>
    </div>
  );
}

export default Main;
