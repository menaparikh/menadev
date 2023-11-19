// // hint: reference Main.js and Main.css, as well as CourseSquare.js if you're stuck
import React, { useState, useEffect } from 'react';
import '../../Styles/Subcourses.css';
import Subcourse from '../../Components/Subcourse';
import Sidebar from '../../Components/Sidebar';

function Subcourses() {
  const colors = ['#EDD3C4', '#C3AC9F'];
  const courseNames = [
    "Chemistry",
    "Physics I",
    "Physics II",
    "Physics III",
    "Biology",
    "Geology"
  ]

  return (
    <div className="subcourses-parent">
      <Sidebar />
      <div className="subcourses-content">
        <h1 className="subcourses-header-text">Course Search</h1>
        <div className="subcourses">
          {/* Map over the course names and pass colors to Subcourse components */}
          {courseNames.map((courseName, index) => (
          <Subcourse
            key={courseName}
            courseName={courseName}
            barColor={colors[index % colors.length]}
          />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Subcourses;