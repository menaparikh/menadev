import React, { useState } from 'react';
import '../../Styles/Subcourses.css';
import Subcourse from '../../Components/Subcourse';
import Sidebar from '../../Components/Sidebar';
import SubcourseDescription from '../../Components/SubcourseDescription';

function Subcourses() {
  const colors = ['#EDD3C4', '#C3AC9F'];
  const courseNames = [
    "Painting",
    "Photography",
    "Ceramics",
    "Intro to Theater",
    "Advanced Theater",
    "Writing & Directing"
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
      case "Painting":
        return "This course is designed to introduce students to the fundamentals of painting, fostering their creativity and expression through various artistic techniques. Students will explore different painting mediums, styles, and subject matters while developing a strong foundation in the principles of visual arts."
      case "Photography":
        return "This course aims to provide students with a comprehensive understanding of photography as both an art form and a technical skill. Students will explore various aspects of photography, including composition, lighting, camera operation, digital editing, and the historical and cultural contexts of the medium."
      case "Ceramics":
        return "This course is designed to introduce students to the versatile and expressive medium of clay. Students will learn the fundamentals of ceramics, including hand-building techniques, wheel throwing, glazing, and firing. Emphasis will be placed on both the technical aspects of working with clay and the development of creative expression through the medium."
      case "Intro to Theater":
        return "This course provides students with a comprehensive introduction to the art of theater. Students will explore the fundamentals of acting, script analysis, stagecraft, and the history of theater. The class aims to foster creativity, teamwork, and an appreciation for the diverse aspects of theatrical expression."
      case "Advanced Theater":
        return "Building on the foundational knowledge acquired in the introductory theater class, the advanced theater class aims to provide students with a more in-depth exploration of acting, directing, and theatrical production. Students will engage in advanced acting techniques, directing exercises, and gain hands-on experience in producing more complex theatrical works."
      case "Writing & Directing":
        return "This course provides students with a comprehensive exploration of the creative and technical aspects of writing and directing for film or theater. Students will develop skills in scriptwriting, story development, and directing, gaining hands-on experience in bringing their written narratives to life through visual or theatrical mediums."
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

