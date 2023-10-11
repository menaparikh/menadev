import React, { useState } from 'react';
import '../Styles/ComponentStyles/Subcourses.css';

function Subcourse({ courseName, barColor }) {
  const [backgroundColor, setBackgroundColor] = useState(barColor);

  return (
    <div
      className="sub-course-item"
      style={{ backgroundColor }}
    >
      <p className="sub-course-name-text">{courseName}</p>
    </div>
  );
}

export default Subcourse;
