import React from "react";

function Skills() {
  const skillCategories = [
    {
      category: "Languages",
      skills: ["JavaScript", "Python", "Java", "Dart", "Kotlin"],
    },
    {
      category: "Front-End",
      skills: [
        "React",
        "HTML",
        "CSS",
        "React Native",
        "Next.js (Learning)",
        "TypeScript (Learning)",
      ],
    },
    {
      category: "Back-End",
      skills: [
        "Node.js",
        "Django",
        "Flask",
        "Express.js",
        "Spring",
        "Spring Boot",
      ],
    },
    {
      category: "Mobile",
      skills: ["Flutter", "Android Native (Java/Kotlin)"],
    },
    {
      category: "Databases",
      skills: ["MongoDB", "MySQL", "PostgreSQL"],
    },
    {
      category: "Cloud & DevOps",
      skills: ["AWS (S3, Redshift, Lambda)", "Docker"],
    },
    {
      category: "Development Tools",
      skills: ["Git", "GitHub", "Visual Studio Code", "Android Studio"],
    },
    {
      category: "Others",
      skills: ["RESTful APIs", "GraphQL"],
    },
  ];

  return (
    <section id="skills">
      <h2>Technical Skills</h2>
      {skillCategories.map((category, index) => (
        <div key={index} className="skill-category">
          <h3>{category.category}</h3>
          <ul>
            {category.skills.map((skill, i) => (
              <li key={i}>{skill}</li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
}

export default Skills;
