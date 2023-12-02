// Modal.js
import React from 'react';
import '../Styles/ComponentStyles/SubcourseDescription.css';

/* HW: add another parameter for the description,
reference courseName for how to structure the 
data flow from Subcourse -> Subcourse Description */
function SubcourseDescription({ courseName, description, onClose }) {
  return (
    <div className="modal">
      <div className="modal-content">
        <h2>{courseName}</h2>
        <p>{description}</p>
        {/* Add other modal content here */}
        <button onClick={onClose}>Close Modal</button>
      </div>
    </div>
  );
}


export default SubcourseDescription;
