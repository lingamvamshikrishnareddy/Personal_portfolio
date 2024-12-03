import React, { useState } from 'react';
import { Github, Play, Youtube } from 'lucide-react';

function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');

  const projects = [
    {
      title: "WeatherAware",
      technologies: ["React Native", "Kotlin", "Node.js", "Weather API"],
      description: "Cross-platform weather forecasting application with real-time updates, advanced alerts, and personalized weather insights.",
      githubLink: "https://github.com/lingamvamshikrishnareddy/weatheraware",
      demoLink: "https://weatheraware.app",
      youtubeLink: "https://youtube.com/watch?v=weatheraware-demo",
      category: ["Mobile", "Weather", "IoT"]
    },
    {
      title: "Remis - Real Estate Management",
      technologies: ["React", "Spring Boot", "PostgreSQL", "Blockchain"],
      description: "Comprehensive real estate management portal for tracking rental properties, managing legal documents, commercial properties, and providing tenant reminders.",
      githubLink: "https://github.com/yourusername/remis",
      demoLink: "https://remis-realestate.com",
      youtubeLink: "https://youtube.com/watch?v=remis-demo",
      category: ["Web", "Real Estate", "Management"]
    },
    {
      title: "HealthCare Connect",
      technologies: ["React Native", "Node.js", "GraphQL", "Telemedicine"],
      description: "Advanced telemedicine platform enabling home visit bookings, medical consultations, health tracking, and personalized healthcare management.",
      githubLink: "https://github.com/yourusername/healthcare-connect",
      demoLink: "https://healthcare-connect.app",
      youtubeLink: "https://youtube.com/watch?v=healthcare-demo",
      category: ["Mobile", "Healthcare", "Telemedicine"]
    },
    {
      title: "Wedding Companion",
      technologies: ["React", "React Native", "AI Matching", "Event Management"],
      description: "Comprehensive wedding platform covering everything from dating and matching to honeymoon planning, with integrated event coordination and guest management.",
      githubLink: "https://github.com/yourusername/wedding-companion",
      demoLink: "https://wedding-companion.app",
      youtubeLink: "https://youtube.com/watch?v=wedding-demo",
      category: ["Web", "Mobile", "Lifestyle"]
    },
    {
      title: "EnergyPulse",
      technologies: ["React Native", "IoT", "Node.js", "Emergency Services"],
      description: "Comprehensive energy services platform for online petrol ordering, emergency data center services, EV charging, and home energy management.",
      githubLink: "https://github.com/yourusername/energypulse",
      demoLink: "https://energypulse.app",
      youtubeLink: "https://youtube.com/watch?v=energypulse-demo",
      category: ["Mobile", "IoT", "Energy"]
    },
    {
      title: "ChitFunds Savings",
      technologies: ["React", "Blockchain", "Fintech", "Secure Transactions"],
      description: "Secure digital platform for managing collaborative financial savings groups, with transparent tracking and automated contribution management.",
      githubLink: "https://github.com/yourusername/chitfunds-savings",
      demoLink: "https://chitfunds-savings.com",
      youtubeLink: "https://youtube.com/watch?v=chitfunds-demo",
      category: ["Web", "Finance", "Blockchain"]
    },
    {
      title: "Comedio Social Platform",
      technologies: ["React", "WebSocket", "Video Streaming", "Social Media"],
      description: "Dedicated social media platform for comedy content, featuring stand-up videos, memes, user-generated comedy, and interactive comedic community.",
      githubLink: "https://github.com/yourusername/comedio",
      demoLink: "https://comedio.app",
      youtubeLink: "https://youtube.com/watch?v=comedio-demo",
      category: ["Web", "Social Media", "Entertainment"]
    },
    {
      title: "Curry - Food Delivery",
      technologies: ["React Native", "Node.js", "Geolocation", "Payment Integration"],
      description: "Comprehensive online food delivery application with restaurant partnerships, real-time tracking, personalized recommendations, and seamless ordering.",
      githubLink: "https://github.com/yourusername/curry-food-delivery",
      demoLink: "https://curry-delivery.app",
      youtubeLink: "https://youtube.com/watch?v=curry-demo",
      category: ["Mobile", "Food", "E-commerce"]
    },
    {
      title: "Fasting Companion",
      technologies: ["React Native", "Health Tracking", "AI Insights", "Yoga"],
      description: "Comprehensive health and wellness app focusing on fasting tracking, yoga exercises, personalized health insights, and lifestyle management.",
      githubLink: "https://github.com/yourusername/fasting-companion",
      demoLink: "https://fasting-companion.app",
      youtubeLink: "https://youtube.com/watch?v=fasting-demo",
      category: ["Mobile", "Health", "Wellness"]
    },
    {
      title: "QuickCommerce",
      technologies: ["React", "AWS", "Payment Gateway", "Inventory Management"],
      description: "Minimalist e-commerce platform focusing on low-cost, efficient online shopping experience with advanced inventory and order management.",
      githubLink: "https://github.com/yourusername/quick-commerce",
      demoLink: "https://quickcommerce.store",
      youtubeLink: "https://youtube.com/watch?v=quickcommerce-demo",
      category: ["Web", "E-commerce", "Retail"]
    },
    {
      title: "Pixel Stream",
      technologies: ["React", "WebRTC", "Video Streaming", "Content Management"],
      description: "Advanced streaming platform for watching videos, movies, sports, and live streaming with personalized content recommendations.",
      githubLink: "https://github.com/yourusername/pixel-stream",
      demoLink: "https://pixelstream.tv",
      youtubeLink: "https://youtube.com/watch?v=pixelstream-demo",
      category: ["Web", "Streaming", "Entertainment"]
    },
    {
      title: "Ride Share",
      technologies: ["React Native", "Geolocation", "Payment Integration", "Incentive System"],
      description: "Innovative bike and auto-rickshaw ride-sharing platform benefiting riders and drivers through fair pricing, real-time tracking, and incentive programs.",
      githubLink: "https://github.com/yourusername/ride-share",
      demoLink: "https://rideshare.app",
      youtubeLink: "https://youtube.com/watch?v=rideshare-demo",
      category: ["Mobile", "Transportation", "Sharing Economy"]
    },
    {
      title: "WCMP - Water & Waste Management",
      technologies: ["React Native", "Gamification", "IoT", "Blockchain"],
      description: "Innovative environmental management app that gamifies water conservation, waste management, and power generation through reward points and leaderboard challenges.",
      githubLink: "https://github.com/yourusername/wcmp",
      demoLink: "https://wcmp-app.com",
      youtubeLink: "https://youtube.com/watch?v=wcmp-demo",
      category: ["Mobile", "Environment", "Sustainability"]
    },
    {
      title: "Feline - Beauty & Fashion",
      technologies: ["React", "React Native", "Personalization", "E-commerce"],
      description: "Online beauty and fashion platform featuring natural ingredient products, personalized recommendations, and cross-platform shopping experience.",
      githubLink: "https://github.com/yourusername/feline-beauty",
      demoLink: "https://feline-beauty.com",
      youtubeLink: "https://youtube.com/watch?v=feline-demo",
      category: ["Web", "Mobile", "Fashion"]
    },
    {
      title: "Runam - Financial Services",
      technologies: ["React", "Blockchain", "Lending", "Microfinance"],
      description: "Comprehensive financial platform for vehicle loans, home loans, emergency micro-loans, second-hand product leasing, and innovative financial solutions.",
      githubLink: "https://github.com/yourusername/runam-finance",
      demoLink: "https://runam-finance.com",
      youtubeLink: "https://youtube.com/watch?v=runam-demo",
      category: ["Web", "Finance", "Lending"]
    },
    {
      title: "Reserve My Spot",
      technologies: ["React", "Payment Gateway", "Booking System"],
      description: "Multi-purpose reservation platform for booking movie tickets, railway and bus travel, restaurant reservations, and various event appointments.",
      githubLink: "https://github.com/yourusername/reserve-my-spot",
      demoLink: "https://reservemyspot.com",
      youtubeLink: "https://youtube.com/watch?v=reservemyspot-demo",
      category: ["Web", "Booking", "Travel"]
    },
    {
      title: "FreeLauncher",
      technologies: ["React", "Node.js", "Stripe", "Analytics Dashboard"],
      description: "Comprehensive platform for content creators featuring influencer profiles, campaign management, content creation tools, brand collaboration, and integrated payment processing.",
      githubLink: "https://github.com/yourusername/freelauncher",
      demoLink: "https://freelauncher.app",
      youtubeLink: "https://youtube.com/watch?v=freelauncher-demo",
      category: ["Web", "Content Creation", "Freelance"]
    },
    {
      title: "Manufacturing Management System",
      technologies: ["React", "IoT", "Cloud Computing", "Enterprise Resource Planning"],
      description: "Advanced manufacturing management platform offering comprehensive solutions including inventory tracking, supply chain management, production scheduling, quality control, maintenance tracking, labor management, and advanced reporting analytics.",
      githubLink: "https://github.com/yourusername/manufacturing-management",
      demoLink: "https://manufacturing-management.com",
      youtubeLink: "https://youtube.com/watch?v=manufacturing-demo",
      category: ["Web", "Manufacturing", "Enterprise"]
    },
    {
      "title": "ECG Denoising Autoencoders",
      "technologies": ["Python", "TensorFlow", "Keras", "Jupyter Notebook", "MIT-BIH Database"],
      "description": "An innovative approach to denoising ECG signals using autoencoders. The project focuses on removing noise such as muscle artifacts, electrode motion, and baseline wander from ECG data while compressing it to reduce transmission strain. This method employs a six-layer denoising autoencoder (DAE) architecture to achieve superior performance with lower RMSE, higher SNR, and better NCC. The dataset includes clean ECG signals from the MIT-BIH Arrhythmia Database and noise from the MIT-BIH Noise Stress Test Database.",
      "githubLink": "https://github.com/yourusername/ecg-denoising-autoencoders",
      "demoLink": "https://colab.research.google.com/github/yourusername/ecg-denoising-autoencoders",
      "youtubeLink": "https://youtube.com/watch?v=ecg-denoising-demo",
      "category": ["Healthcare", "Machine Learning", "Signal Processing", "Research"]
  }
  
  ];
  const categories = [
    'All', 
    ...new Set(projects.flatMap(project => project.category))
  ];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category.includes(activeFilter));

  return (
    <section className="bg-gray-50 min-h-screen py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
          Project Showcase
        </h2>

        <div className="flex justify-center space-x-4 mb-8 flex-wrap">
          {categories.map(category => (
            <button
              key={category}
              className={`
                px-4 py-2 rounded-full transition-all duration-300 m-1
                ${activeFilter === category 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-gray-200 text-gray-700 hover:bg-blue-100'
                }
              `}
              onClick={() => setActiveFilter(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <div 
              key={index} 
              className="bg-white rounded-2xl shadow-lg overflow-hidden transform transition-all hover:scale-105 hover:shadow-2xl"
            >
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-2 text-gray-800">
                  {project.title}
                </h3>
                <p className="text-sm text-blue-600 mb-3 flex flex-wrap gap-2">
                  {project.technologies.map(tech => (
                    <span 
                      key={tech} 
                      className="bg-blue-50 text-blue-600 px-2 py-1 rounded-full text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </p>
                <p className="text-gray-600 mb-4 text-sm">
                  {project.description}
                </p>
                
                <div className="flex space-x-3 mt-4">
                  {project.githubLink && (
                    <a 
                      href={project.githubLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-gray-100 p-2 rounded-full hover:bg-gray-200 transition-colors"
                      title="GitHub Repository"
                    >
                      <Github className="w-5 h-5 text-gray-700" />
                    </a>
                  )}
                  {project.demoLink && (
                    <a 
                      href={project.demoLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-green-100 p-2 rounded-full hover:bg-green-200 transition-colors"
                      title="Live Demo"
                    >
                      <Play className="w-5 h-5 text-green-700" />
                    </a>
                  )}
                  {project.youtubeLink && (
                    <a 
                      href={project.youtubeLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-red-100 p-2 rounded-full hover:bg-red-200 transition-colors"
                      title="Video Demonstration"
                    >
                      <Youtube className="w-5 h-5 text-red-700" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
