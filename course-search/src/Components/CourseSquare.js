import React, { useState } from 'react';
import "../Styles/ComponentStyles/CourseSquare.css";

function CourseSquare({ courseName }) {
  return (
    <div className="course-item course-category-button">
        <p className="course-name-text">{courseName}</p>
    </div>
  );
}

export default CourseSquare;
