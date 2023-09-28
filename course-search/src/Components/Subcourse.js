// this represents one rectangle on the all the maths page

import React, { useState } from 'react';
import "../Styles/ComponentStyles/Subcourses.css";

function Subcourse({ courseName, barColor }) {
  return (
    <div className="sub-course-item">
        <p className="sub-course-name-text">{courseName}</p>
    </div>
  );
}

export default Subcourse;
