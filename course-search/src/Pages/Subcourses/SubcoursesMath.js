import React, { useState } from 'react';
import '../../Styles/Subcourses.css';
import Sidebar from '../../Components/Sidebar';
import Subcourse from '../../Components/Subcourse';
import SubcourseDescription from '../../Components/SubcourseDescription';

function Subcourses() {
  const colors = ['#EDD3C4', '#C3AC9F'];
  const courseNames = [
    "Algebra I",
    "Algebra II",
    "Advanced Algebra & Precalculus",
    "Trigonometry",
    "Calculus AB",
    "Calculus BC"
  ];

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [courseName, setCourseName] = useState('');
  const [description, setDescription] = useState('');
  // Function to get the course description based on the course name
  function getCourseDescription(courseName) {
    // Implement logic to fetch the description based on the courseName
    // For example, you could have a switch statement or an object mapping
    // Return the appropriate description for the given courseName

    switch (courseName) {
      case "Algebra I":
        return "Welcome to Algebra 1, a foundational course in high school mathematics that introduces students to the fundamental principles of algebra. This course is designed to develop students' mathematical reasoning, problem-solving skills, and fluency in algebraic concepts, laying the groundwork for success in advanced mathematics."
      case "Algebra II":
        return "Welcome to Algebra 2, an advanced course in high school mathematics that builds upon the foundational concepts introduced in Algebra 1. This course is designed to deepen students' understanding of algebraic principles, introduce advanced functions, and prepare them for more advanced coursework in mathematics. "
      case "Advanced Algebra & Precalculus":
        return "Welcome to Advanced Algebra and Precalculus, a rigorous course designed for students seeking a deeper understanding of advanced algebraic concepts and preparation for higher-level mathematics. This course extends the study of algebra and introduces essential topics in precalculus, setting the foundation for future studies in calculus and advanced mathematical disciplines."
      case "Trigonometry":
        return "Welcome to Trigonometry, a comprehensive course designed to explore the principles of trigonometric functions and their applications. This course builds on the foundation of geometry and algebra, providing students with a deeper understanding of angles, triangles, and the fundamental concepts of trigonometry. Trigonometry is essential for various fields, including physics, engineering, and mathematics."
      case "Calculus AB":
        return "Welcome to Calculus AB, an advanced high school mathematics course that delves into the fundamental principles of calculus. This course is designed to provide students with a strong foundation in differential and integral calculus, preparing them for further studies in mathematics, science, engineering, and related fields."
      case "Calculus BC":
        return "Welcome to Calculus BC, an advanced high school mathematics course that builds upon the concepts introduced in Calculus AB. This course is designed for students who have a strong foundation in calculus and are ready to explore more advanced topics, including series, parametric equations, polar coordinates, and additional techniques of integration."
    }
  }
  const closeModal = () => {
    setIsModalOpen(false);
    // Additional cleanup or state resetting if needed
  };

  return (
    <div className="subcourses-parent">
      <Sidebar/>
      <div className="subcourses-content">
        <h1 className="subcourses-header-text">Course Search</h1>
        <div className="subcourses">
          {courseNames.map((name, index) => (
            <Subcourse
              key={name}
              courseName={name}
              description={getCourseDescription(name)}
              barColor={colors[index % colors.length]}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Subcourses;
