import React, { useState } from 'react';
import '../../Styles/Subcourses.css';
import Sidebar from '../../Components/Sidebar';
import Subcourse from '../../Components/Subcourse';
import SubcourseDescription from '../../Components/SubcourseDescription';

function Subcourses() {
  const colors = ['#EDD3C4', '#C3AC9F'];
  const courseNames = [
    "Spanish",
    "French",
    "Mandarin",
    "Classics",
    "English Enrichment",
    "Japanese"
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
      case "Spanish":
        return "¡Bienvenidos! Welcome to the Spanish Language and Culture course, where high school students will embark on a dynamic and interactive journey to explore the richness of the Spanish language and the diverse cultures of the Spanish-speaking world. This course is designed to develop students' proficiency in communication, cultural understanding, and appreciation for the global significance of the Spanish language."
      case "French":
        return "Bienvenue! Welcome to the French Language and Culture course, where high school students will embark on a fascinating journey to explore the French language and the diverse cultures of the Francophone world. This course is designed to foster language proficiency, cultural awareness, and an appreciation for the global significance of the French language."
      case "Mandarin":
        return "欢迎! Welcome to the Mandarin Chinese Language and Culture course, where high school students will embark on an exciting journey to explore the Mandarin Chinese language and the rich cultural heritage of China. This course is designed to develop language proficiency, cultural understanding, and an appreciation for the global significance of Mandarin Chinese."
      case "Classics":
        return "Welcome to the Classics class, a captivating journey into the civilizations of Ancient Greece and Rome. This high school course is designed to introduce students to the literature, history, philosophy, and art of two of the most influential cultures in human history. By studying the classics, students will gain valuable insights into the foundations of Western civilization."
      case "English Enrichment":
        return "Welcome to the English Enrichment class, a dynamic and engaging exploration of literature, critical thinking, and advanced language skills. This high school course is designed to challenge and inspire students to deepen their understanding of literature, enhance their analytical thinking, and develop advanced communication skills."
      case "Japanese":
        return "こんにちは! Welcome to the Japanese Language and Culture class, where high school students will embark on an exciting journey to explore the Japanese language and the rich cultural tapestry of Japan. This course is designed to develop language proficiency, cultural understanding, and an appreciation for the diverse aspects of Japanese culture."
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