import React, { useState } from 'react';
import '../../Styles/Subcourses.css';
import Subcourse from '../../Components/Subcourse';
import SubcourseDescription from '../../Components/SubcourseDescription';

function Subcourses() {
  const colors = ['#EDD3C4', '#C3AC9F'];
  const courseNames = [
    "American History",
    "World War I Studies",
    "World War II Studies",
    "African History",
    "Civil War Studies",
    "Chinese Civil War Studies"
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
      case "American History":
        return "Welcome to the 'American History' course, where high school students will embark on a captivating journey through the rich tapestry of America's past. This course is designed to provide a comprehensive understanding of key events, movements, and figures that have shaped the nation from its early colonial roots to the present day."
      case "World War I Studies":
        return "Welcome to 'World War I Studies,' a course that invites high school students to explore one of the most transformative periods in modern history. This course delves into the causes, events, and consequences of World War I, examining the geopolitical, economic, social, and cultural dynamics that shaped the world during this pivotal time."
      case "World War II Studies":
        return "Welcome to 'World War II Studies,' a course that invites high school students to explore the complex and transformative events of World War II. This course delves into the causes, key battles, significant figures, and the lasting impact of the war on a global scale. Students will engage in a comprehensive examination of this critical period in history."
      case "African History":
        return "Welcome to 'African History,' a course that invites high school students to explore the diverse and rich tapestry of the African continent. This course is designed to provide a comprehensive understanding of the history, cultures, and civilizations that have shaped Africa from ancient times to the present day."
      case "Civil War Studies":
        return "Welcome to 'Civil War Studies,' a course designed to delve into one of the most pivotal periods in American history. This course aims to provide high school students with a thorough understanding of the causes, events, and consequences of the Civil War, examining its impact on the nation's politics, society, and culture."
      case "Chinese Civil War Studies":
        return "Welcome to 'The Chinese Civil War,' a course designed to explore the complex and transformative conflict that shaped the course of modern Chinese history. This high school course aims to provide students with a comprehensive understanding of the causes, events, and consequences of the Chinese Civil War, examining its impact on the political, social, and cultural landscape of China."
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