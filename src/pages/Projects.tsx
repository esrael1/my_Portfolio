import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Smartphone, Globe, Download } from 'lucide-react';
import esraelwmImage from '../wm.jpg';

const Projects = () => {
  const projects = [
    {
      title: "Online Food Ordering and Delivery System",
      description: "🏆 Best Project Award Winner - A comprehensive web-based platform for restaurants to manage orders and customers to browse menus, place orders, and track deliveries in real-time. Recognized as the top graduation project at DebreMarkos University.",
      image: "https://images.pexels.com/photos/4393426/pexels-photo-4393426.jpeg?auto=compress&cs=tinysrgb&w=600",
      technologies: ["PHP", "MySQL", "HTML", "CSS", "JavaScript", "AJAX"],
      type: "web",
      githubLink: "hh",
      liveLink: "hh"
    },
    {
      title: "AI-Based Student Study Assistant App",
      description: "An intelligent mobile application that helps students with personalized study plans, progress tracking, and AI-powered recommendations for better learning outcomes.",
      image: "https://images.pexels.com/photos/5428833/pexels-photo-5428833.jpeg?auto=compress&cs=tinysrgb&w=600",
      technologies: ["Flutter", "Dart", "AI/ML", "Firebase"],
      type: "mobile",
      githubLink: "hh",
      downloadLink: "AIapp-debug.apk"
    },
    {
      title: "Merchant Equity & Money Manager App",
      description: "A financial management application for merchants to track equity, manage transactions, and get insights into their business performance with detailed analytics.",
      image: "https://images.pexels.com/photos/6802042/pexels-photo-6802042.jpeg?auto=compress&cs=tinysrgb&w=600",
      technologies: ["Flutter", "Dart", "SQLite", "Charts"],
      type: "mobile",
      githubLink: "hh",
      downloadLink: "app-release.apk"
    },
    {
      title: "Social Media Post Generator App",
      description: "A creative tool that helps users generate engaging social media content with templates, filters, and automated posting capabilities across multiple platforms.",
      image: "https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=600",
      technologies: ["Flutter", "Dart", "API Integration", "Image Processing"],
      type: "mobile",
      githubLink: "hh",
      downloadLink: "hh"
    },
    {
      title: "Amharic Bible Audio App",
      description: "A spiritual companion app featuring the complete Amharic Bible with high-quality audio narration, bookmarks, and search functionality for Ethiopian Orthodox believers.",
      image: "https://images.pexels.com/photos/1112048/pexels-photo-1112048.jpeg?auto=compress&cs=tinysrgb&w=600",
      technologies: ["Flutter", "Dart", "Audio Player", "Local Storage"],
      type: "mobile",
      githubLink: "hh",
      downloadLink: "hh"
    },
    {
      title: "Wudasie Mariam Amharic Audio App",
      description: "A devotional audio application featuring Amharic religious content, prayers, and spiritual teachings with offline playback capabilities.",
      image: esraelwmImage,
      technologies: ["Flutter", "Dart", "Audio Streaming", "Offline Mode"],
      type: "mobile",
      githubLink: "hh",
      downloadLink: "src/wmapp-release.apk"
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            My Projects
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A showcase of my recent work in web development and mobile app creation
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 + index * 0.1 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    project.type === 'web' 
                      ? 'bg-blue-100 text-blue-800' 
                      : 'bg-teal-100 text-teal-800'
                  }`}>
                    {project.type === 'web' ? (
                      <Globe className="inline w-4 h-4 mr-1" />
                    ) : (
                      <Smartphone className="inline w-4 h-4 mr-1" />
                    )}
                    {project.type === 'web' ? 'Web App' : 'Mobile App'}
                  </span>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-4">
                  {project.githubLink && project.githubLink !== "#" && (
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200"
                    >
                      <Github className="w-4 h-4" />
                      <span>View on GitHub</span>
                    </a>
                  )}
                  {project.type === 'web' && project.liveLink && project.liveLink !== "#" && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 bg-teal-600 text-white px-4 py-2 rounded-lg hover:bg-teal-700 transition-colors duration-200"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>Live Demo</span>
                    </a>
                  )}
                  {project.type === 'mobile' && project.downloadLink && project.downloadLink !== "#" && (
                    <a
                      href={project.downloadLink}
                      download
                      className="flex items-center space-x-2 bg-teal-600 text-white px-4 py-2 rounded-lg hover:bg-teal-700 transition-colors duration-200"
                    >
                      <Download className="w-4 h-4" />
                      <span>Download</span>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Have a Project in Mind?
            </h3>
            <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
              I'm always excited to work on new and challenging projects. 
              Let's discuss how we can bring your ideas to life.
            </p>
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200">
              Get In Touch
            </button>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Projects;
