import React, { useState } from 'react';

import SubcourseDescription from './SubcourseDescription';
import '../Styles/ComponentStyles/Subcourse.css';

/* put another parameter in subcourse for the description and display it in the modal*/
function Subcourse({ courseName, barColor }) {
  const [isActive, setIsActive] = useState(false);
  const [backgroundColor, setBackgroundColor] = useState(barColor);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // set isActive to true when we click the subcourse
  const handleSubcourseClick = () => {
    setIsActive(!isActive);
    setIsModalOpen(true);
  }

  const closeModal = () => {
    setIsModalOpen(false);
    setIsActive(false);
  };

  return (
    <div>
      <div
        className={`sub-course-item ${isActive ? 'active' : ''}`}
        style={{ backgroundColor: barColor }}
        onClick={handleSubcourseClick}
      >
        <p className="sub-course-name-text">{courseName}</p>
      </div>
      {isModalOpen && (
        <SubcourseDescription courseName={courseName} onClose={closeModal} />
      )}
    </div>
  );
}

export default Subcourse;
