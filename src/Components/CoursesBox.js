import React from "react";
import "./CoursesBox.css";
import UndergraduateImage from "../Assets/Undergraduate.jpg";
import PostgraduateImage from "../Assets/Postgraduate.jpg";
import PhdImage from "../Assets/Phd.jpg";
import ProfessionalImage from "../Assets/Professional.jpg";
import FoundationImage from "../Assets/Foundation.jpg";
import DiplomaImage from "../Assets/Diploma.jpg";

const CoursesBox = () => {
  const courses = [
    { image: UndergraduateImage, title: "Undergraduate" },
    { image: PostgraduateImage, title: "Postgraduate" },
    { image: PhdImage, title: "PhD / DBA" },
    { image: ProfessionalImage, title: "Professional" },
    { image: FoundationImage, title: "Foundation" },
    { image: DiplomaImage, title: "Diploma" },
  ];

  return (
    <section className="courses-box-container" aria-label="Courses Section">
      <h1 className="courses-box-title">We Help You On The Following</h1>
      <h2 className="courses-box-subtitle">Courses</h2>
      <div className="courses-boxes">
        {courses.map((course, index) => (
          <div className="course-box" key={index} role="button" tabIndex="0">
            <img
              src={course.image}
              alt={course.title}
              className="course-box-image"
            />
            <h3 className="course-box-heading">{course.title}</h3>
          </div>
        ))}
      </div>
      <button className="find-courses-button">Find Courses</button>
    </section>
  );
};

export default CoursesBox;
