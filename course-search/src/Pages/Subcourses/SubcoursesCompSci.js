import React, { useState } from 'react';
import '../../Styles/Subcourses.css';
import Subcourse from '../../Components/Subcourse';
import SubcourseDescription from '../../Components/SubcourseDescription';

function Subcourses() {
  const colors = ['#EDD3C4', '#C3AC9F'];
  const courseNames = [
    "Intro to Python",
    "Advanced Python",
    "Intro to JavaScript",
    "Advanced JavaScript",
    "Intro to CSS",
    "Advanced CSS"
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
      case "Intro to Python":
        return "This course serves as an engaging introduction to the world of computer programming using the versatile Python language. Designed for high school students with little to no prior programming experience, this course aims to cultivate a solid foundation in coding principles and problem-solving skills."
      case "Advanced Python":
        return "Building on the foundational knowledge acquired in the introductory Python course, the Advanced Python course is designed to deepen high school students' understanding of Python and equip them with advanced programming skills. This course delves into more complex programming concepts, data structures, and advanced applications of Python in various domains."
      case "Intro to JavaScript":
        return "Welcome to the 'Intro to JavaScript' course, where high school students will embark on an exciting journey into the world of web development and dynamic, interactive programming. This course is designed for students with little to no prior coding experience, providing a solid foundation in JavaScript—the programming language that powers the modern web."
      case "Advanced Javascript":
        return "Building upon the foundational skills acquired in the introductory JavaScript course, the Advanced JavaScript course is designed for high school students aiming to elevate their web development capabilities. This course explores advanced topics in JavaScript, emphasizing modern development practices and techniques used in the industry.        "
      case "Intro to CSS":
        return "Welcome to the 'Intro to CSS' course, where high school students will explore the art and science of styling web pages. Cascading Style Sheets (CSS) play a crucial role in web development by providing the visual styling that transforms static HTML into engaging and dynamic user interfaces. This course is designed for students with a basic understanding of HTML and aims to empower them with the skills to create visually appealing and responsive websites."
      case "Advanced CSS":
        return "Welcome to the 'Advanced CSS' course, where high school students will embark on a journey to master the intricacies of Cascading Style Sheets (CSS) and elevate their web development skills. This course is designed for students with a solid foundation in CSS and HTML, providing an in-depth exploration of advanced styling techniques used in modern web design.        "
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
