import React, { useState } from 'react';
import '../../Styles/Subcourses.css';
import Subcourse from '../../Components/Subcourse';
import SubcourseDescription from '../../Components/SubcourseDescription';

function Subcourses() {
  const colors = ['#EDD3C4', '#C3AC9F'];
  const courseNames = [
    "Chemistry",
    "Physics I",
    "Physics II",
    "Physics III",
    "Biology",
    "Astronomy"
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
      case "Chemistry":
        return "Welcome to Chemistry, a foundational science course designed to explore the principles, theories, and applications of matter. This course introduces students to the fundamental concepts of chemistry, including atomic structure, chemical reactions, and the behavior of gases, liquids, and solids. Through laboratory experiences and theoretical discussions, students will develop a deep understanding of the molecular world and its impact on the physical universe."
      case "Physics I":
        return "Welcome to Physics 1, a foundational science course designed to introduce students to the fundamental principles governing the physical world. This course provides an exploration of classical mechanics, including the study of motion, forces, energy, and momentum. Through theoretical discussions, hands-on experiments, and problem-solving activities, students will develop a deep understanding of the fundamental laws that govern the behavior of objects."
      case "Physics II":
        return "Welcome to Physics 2, an advanced exploration of key concepts in physics that builds upon the foundation established in Physics 1. This course delves into more complex topics, including electricity, magnetism, waves, optics, and modern physics. Through theoretical discussions, hands-on experiments, and problem-solving activities, students will deepen their understanding of the physical principles that govern a broader range of phenomena."
      case "Physics III":
        return "Physics 3 - Advanced Topics is designed for students who have successfully completed Physics 2 or its equivalent and wish to deepen their understanding of specialized areas in physics. This course explores advanced topics in classical and modern physics, providing students with a more comprehensive view of the discipline. Through theoretical discussions, hands-on experiments, and problem-solving activities, students will gain insight into the intricacies of various physical phenomena."
      case "Biology":
        return "Welcome to Biology, an engaging and comprehensive course that explores the principles of life and living organisms. This course introduces students to the fascinating world of biology, covering topics from the microscopic structures of cells to the intricate ecosystems that sustain our planet. Through a combination of theoretical discussions, laboratory experiments, and interactive activities, students will gain a deeper understanding of the diversity of life and the fundamental processes that govern living organisms."
      case "Astronomy":
        return "Welcome to Astronomy, an exploration of the wonders of the universe beyond our planet. This course invites students to embark on a cosmic journey, studying celestial bodies, astronomical phenomena, and the vastness of space. Through a combination of theoretical discussions, observational activities, and hands-on projects, students will develop a deep appreciation for the beauty and complexity of the cosmos."
    }
  }
  const closeModal = () => {
    setIsModalOpen(false);
    // Additional cleanup or state resetting if needed
  };

  return (
    <div className="subcourses-parent">
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
