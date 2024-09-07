import React from "react";

function Hero() {
  return (
    <section id="hero">
      <h1>Lingam Vamshi Krishna Reddy</h1>
      <h2>Full Stack Developer</h2>
      <p>call📞- +91 8925311458 | E📧- lingamvamshikrishnareddy@gmail.com</p>
      <div className="social-links">
        <a
          href="https://www.linkedin.com/in/lingam-vamshi-krishna-reddy-1a7402160/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
        <a
          href="https://github.com/lingamvamshikrishnareddy"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
        <a href="#portfolio">Portfolio</a>
      </div>
      <a href="#contact" className="cta-button">
        Get in Touch
      </a>
    </section>
  );
}

export default Hero;
