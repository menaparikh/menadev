import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "../Styles/ComponentStyles/CourseSquare.css";

function CourseSquare({ courseName, to }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(to);
  }

  return (
    <div className="course-item course-category-button" onClick={handleClick}>
        <p className="course-name-text">{courseName}</p>
    </div>
  );
}

export default CourseSquare;
