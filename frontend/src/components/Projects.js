import React from "react";

function Projects() {
  const projects = [
    {
      title: "E-commerce Platform",
      technologies: "React, Node.js, MongoDB",
      description: "Full-stack website with user authentication, product catalog, inventory management, and secure payment integration",
      githubLink: "https://github.com/yourusername/ecommerce-platform",
    },
    {
      title: "Route One and Dealer Track",
      technologies: "Java, Spring",
      description: "Developed consumer credit applications integrated with Equifax and Transunion; built internal tools for Hyundai Motor Finance",
      githubLink: "https://github.com/yourusername/route-one-dealer-track",
    },
    {
      title: "ACI Pay – Consumer Vehicle Finance",
      technologies: "AWS, ML",
      description: "Implemented fraud detection for payment transactions using AWS S3 and Redshift for data schema design and ETL processes",
      githubLink: "https://github.com/yourusername/aci-pay",
    },
    {
      title: "WeatherAware",
      technologies: "React Native, Kotlin, Node.js",
      description: "Developed both web and mobile versions of a weather forecasting application with real-time updates and alerts",
      githubLink: "https://github.com/yourusername/weather-aware",
    },
    {
      title: "Note-Taking and Todo App",
      technologies: "React, Kotlin, Node.js",
      description: "Created a cross-platform application for efficient note-taking and task management",
      githubLink: "https://github.com/yourusername/note-todo-app",
    },
    {
      title: "Restaurant Management System",
      technologies: "Not specified",
      description: "Developed app with features for table booking, menu management, and payment integration",
      githubLink: "https://github.com/yourusername/restaurant-management",
    },
    {
      title: "Stocks Tracker",
      technologies: "Flutter, Node.js",
      description: "Built an app for real-time stock tracking with user portfolio management and basic performance analytics",
      githubLink: "https://github.com/yourusername/stocks-tracker",
    },
    {
      title: "Wedding Planner App",
      technologies: "React, Node.js",
      description: "Comprehensive wedding planning application with features for venue selection, guest management, and event coordination",
      githubLink: "https://github.com/yourusername/wedding-app",
    },
    {
      title: "Finance Manager",
      technologies: "React, Spring Boot",
      description: "Integrated financial management platform covering vehicle finance, home loans, and personal financial tracking",
      githubLink: "https://github.com/yourusername/finance-manager",
    },
    {
      title: "HealthCare Connect",
      technologies: "React Native, Node.js",
      description: "Telemedicine application enabling home visit bookings, medical consultations, and health tracking",
      githubLink: "https://github.com/yourusername/healthcare-connect",
    },
    {
      title: "PixelStream",
      technologies: "React, Node.js, WebRTC",
      description: "Streaming platform similar to Netflix with live streaming capabilities and content management",
      githubLink: "https://github.com/yourusername/pixel-stream",
    },
    {
      title: "QuickCommerce",
      technologies: "React, Node.js, AWS",
      description: "Minimalist e-commerce platform focusing on low-cost, efficient online shopping experience",
      githubLink: "https://github.com/yourusername/quick-commerce",
    },
    {
      title: "HeyDM",
      technologies: "React, WebSocket, Node.js",
      description: "Real-time chat application with advanced messaging and communication features",
      githubLink: "https://github.com/yourusername/hey-dm",
    },
    {
      title: "Feline",
      technologies: "React, React Native, Node.js",
      description: "Online beauty and cosmetics web and mobile application with product catalog and personalized recommendations",
      githubLink: "https://github.com/yourusername/feline-beauty",
    },
    {
      title: "Sarvis AI",
      technologies: "React, AI/ML, Node.js",
      description: "Advanced AI-powered chatbot platform with customizable interaction models",
      githubLink: "https://github.com/yourusername/sarvis-ai",
    },
    {
      title: "Trime Salon",
      technologies: "React, React Native, Node.js",
      description: "Comprehensive salon and spa booking application with service management, appointment scheduling, and user reviews",
      githubLink: "https://github.com/yourusername/trime-salon",
    },
    {
      title: "Comedio",
      technologies: "React, Node.js, Video Streaming",
      description: "Short-form comedy content platform featuring stand-up comedy videos, memes, and user-generated comedy content",
      githubLink: "https://github.com/yourusername/comedio",
    },
    {
      title: "ChitFund Manager",
      technologies: "React, Blockchain, Node.js",
      description: "Secure digital platform for managing and tracking collaborative financial savings groups",
      githubLink: "https://github.com/yourusername/chitfund-manager",
    },
    {
      title: "MindForge",
      technologies: "React Native, AI/ML, Healthcare",
      description: "Specialized mobile application for cognitive health management, focusing on Parkinson's and Alzheimer's disease support and mental exercises",
      githubLink: "https://github.com/yourusername/mindforge",
    },
    {
      title: "Waste Rewards",
      technologies: "React Native, Gamification, Node.js",
      description: "Innovative waste management app that gamifies recycling with points, rewards, coupons, and vouchers",
      githubLink: "https://github.com/yourusername/waste-rewards",
    },
    {
      title: "Reserve",
      technologies: "React, Node.js, Payment Integration",
      description: "Multi-purpose reservation platform for booking tickets to concerts, events, railways, and bus travel",
      githubLink: "https://github.com/yourusername/reserve",
    },
    {
      title: "EnergyGo",
      technologies: "React Native, IoT, Node.js",
      description: "Comprehensive energy services platform for online petrol ordering, EV charging, and home inverter management",
      githubLink: "https://github.com/yourusername/energygo",
    },
    {
      title: "Fasting Companion",
      technologies: "React Native, Health Tracking",
      description: "Comprehensive fasting tracking app with health benefits, progress monitoring, and personalized insights",
      githubLink: "https://github.com/yourusername/fasting-companion",
    },
    {
      title: "Personal Portfolio",
      technologies: "React, Tailwind CSS",
      description: "Professional personal portfolio website showcasing projects, skills, and professional journey",
      githubLink: "https://github.com/yourusername/personal-portfolio",
    },
    {
      title: "Remis",
      technologies: "React, Node.js, Real Estate Management",
      description: "Comprehensive real estate management system with property listings, tenant management, and transaction tracking",
      githubLink: "https://github.com/yourusername/remis",
    },
    {
      title: "Curry",
      technologies: "React Native, Food Delivery, Node.js",
      description: "Online food delivery application with restaurant partnerships, real-time tracking, and personalized recommendations",
      githubLink: "https://github.com/yourusername/curry-food-delivery",
    },
    {
      title: "Ride Share",
      technologies: "React Native, Geolocation, Node.js",
      description: "Bike and auto-rickshaw ride-sharing platform benefiting both riders and drivers through fair pricing and incentives",
      githubLink: "https://github.com/yourusername/ride-share",
    }
  ];

  return (
    <section id="projects" className="py-12 px-4 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Key Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
            >
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-sm text-blue-600 mb-3">{project.technologies}</p>
              <p className="text-gray-700 mb-4">{project.description}</p>
              <button
                className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition-colors"
                onClick={() => window.open(project.githubLink, "_blank")}
              >
                View on GitHub
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
