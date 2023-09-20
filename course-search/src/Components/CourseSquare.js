import React, { useState } from 'react';
import "../Styles/ComponentStyles/CourseSquare.css";

function CourseSquare({ courseName }) {
  return (
    <div className="course-item">
        <p>{courseName}</p>
    </div>
  );
}

export default CourseSquare;
