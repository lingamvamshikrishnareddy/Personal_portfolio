import React from 'react';

function Projects() {
  const projects = [
    {
      title: "E-commerce Platform",
      technologies: "React, Node.js, MongoDB",
      description: "Full-stack website with user authentication, product catalog, inventory management, and secure payment integration"
    },
    {
      title: "Route One and Dealer Track",
      technologies: "Java, Spring",
      description: "Developed consumer credit applications integrated with Equifax and Transunion; built internal tools for Hyundai Motor Finance"
    },
    {
      title: "ACI Pay – Consumer Vehicle Finance",
      technologies: "AWS, ML",
      description: "Implemented fraud detection for payment transactions using AWS S3 and Redshift for data schema design and ETL processes"
    },
    {
      title: "WeatherAware",
      technologies: "React Native, Kotlin, Node.js",
      description: "Developed both web and mobile versions of a weather forecasting application with real-time updates and alerts"
    },
    {
      title: "Note-Taking and Todo App",
      technologies: "React, Kotlin, Node.js",
      description: "Created a cross-platform application for efficient note-taking and task management"
    },
    {
      title: "Restaurant Management System",
      technologies: "Not specified",
      description: "Developed app with features for table booking, menu management, and payment integration"
    },
    {
      title: "Stocks Tracker",
      technologies: "Flutter, Node.js",
      description: "Built an app for real-time stock tracking with user portfolio management and basic performance analytics"
    }
  ];

  return (
    <section id="projects">
      <h2>Key Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.title}</h3>
            <p className="technologies">{project.technologies}</p>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;