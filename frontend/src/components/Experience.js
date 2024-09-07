import React from "react";

function Experience() {
  const experiences = [
    {
      title: "Freelancer - Upwork",
      role: "Full Stack Web and Mobile Developer",
      period: "Aug 2023 – Present",
      responsibilities: [
        "Developed web and mobile applications using React, Node.js, Django, and Flutter",
        "Enhanced user engagement through improved application performance and user interface design",
        "Delivered customized solutions for diverse client needs across various industries",
      ],
    },
    {
      title: "Tata Consultancy Services",
      role: "Developer",
      period: "Sep 2020 – Sep 2021",
      location: "Hyderabad, India",
      responsibilities: [
        "Contributed to large-scale projects using Spring, Spring Boot, and Java",
        "Improved system performance through code optimization and rigorous testing",
        "Assisted in data migration projects to AWS, enhancing data accessibility and security",
        "Developed REST APIs using Node.js and MySQL for enterprise-level applications",
        "Gained experience in the complete lifecycle of backend services from ideation to deployment",
      ],
    },
  ];

  return (
    <section id="experience">
      <h2>Experience</h2>
      {experiences.map((exp, index) => (
        <div key={index} className="experience-item">
          <h3>{exp.title}</h3>
          <h4>{exp.role}</h4>
          <p className="period">{exp.period}</p>
          {exp.location && <p className="location">{exp.location}</p>}
          <ul>
            {exp.responsibilities.map((resp, i) => (
              <li key={i}>{resp}</li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
}

export default Experience;
