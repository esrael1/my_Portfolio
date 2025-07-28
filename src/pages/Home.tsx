import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, MessageCircle, Eye, Code2, Smartphone, Globe, Users, Award, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';
import esraelImage from '../esrael.jpg';

const Home = () => {
  const stats = [
    { icon: <Code2 className="w-8 h-8" />, number: "7+", label: "Projects Completed" },
    { icon: <Smartphone className="w-8 h-8" />, number: "5", label: "Mobile Apps" },
    { icon: <Globe className="w-8 h-8" />, number: "1+", label: "Years Experience" },
    { icon: <Users className="w-8 h-8" />, number: "1K+", label: "App Downloads" }
  ];

  // Animation variants for the name
  const nameVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      }
    }
  };

  const letterVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      rotateX: -90
    },
    visible: { 
      opacity: 1, 
      y: 0,
      rotateX: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 200
      }
    }
  };

  const name = "Esrael Admasu";
  const title = "Software Engineer";

  const services = [
    {
      icon: <Globe className="w-12 h-12" />,
      title: "Web Development",
      description: "Full-stack web applications using modern technologies like PHP, JavaScript, and MySQL",
      technologies: ["PHP", "JavaScript", "MySQL", "HTML/CSS"]
    },
    {
      icon: <Smartphone className="w-12 h-12" />,
      title: "Mobile App Development",
      description: "Cross-platform mobile applications built with Flutter for Android and iOS",
      technologies: ["Flutter", "Dart", "Android Studio", "Firebase"]
    },
    {
      icon: <Code2 className="w-12 h-12" />,
      title: "Custom Solutions",
      description: "Tailored software solutions for businesses and educational institutions",
      technologies: ["AI Integration", "API Development", "Database Design"]
    }
  ];

  const achievements = [
    {
      icon: <Award className="w-6 h-6" />,
      title: "Best Project Award - Food Ordering System",
      description: "DebreMarkos University Graduation Project"
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "BSc Software Engineering",
      description: "DebreMarkos University"
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "BA Accounting & Finance",
      description: "BlueMark College"
    },
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: "5+ Mobile Apps Published",
      description: "Available on Android platforms"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "1K+ Downloads",
      description: "Across all mobile applications"
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen"
    >
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', stiffness: 260, damping: 20 }}
            className="mb-8"
          >
            <img
              src={esraelImage} 
              alt="Esrael Admasu"
              className="w-40 h-40 mx-auto rounded-full shadow-2xl border-4 border-white"
            />
          </motion.div>

          <motion.h1
            variants={nameVariants}
            initial="hidden"
            animate="visible"
            className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 perspective-1000"
          >
            {name.split("").map((char, index) => (
              <motion.span
                key={index}
                variants={letterVariants}
                className="inline-block"
                style={{ transformOrigin: "50% 50% -50px" }}
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </motion.h1>

          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="mb-4"
          >
            <motion.h2
              className="text-2xl md:text-3xl text-blue-600 font-semibold mb-2"
            >
              <motion.span
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ delay: 1.8, duration: 1.5, ease: "easeInOut" }}
                className="inline-block overflow-hidden whitespace-nowrap border-r-2 border-blue-600"
                style={{
                  animation: "blink 1s infinite"
                }}
              >
                {title}
              </motion.span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 3.5 }}
              className="text-lg md:text-xl text-gray-600 font-medium"
            >
              Full-Stack Developer & Mobile App Creator
            </motion.p>
          </motion.div>

          <motion.p
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 4 }}
            className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto"
          >
            Passionate about creating innovative web applications and mobile solutions
            that make a difference in people's lives.
          </motion.p>

          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 4.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link
              to="/projects"
              className="group bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-200 transform hover:scale-105 flex items-center space-x-2 shadow-lg"
            >
              <Eye className="w-5 h-5" />
              <span>View Projects</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link
              to="/download"
              className="group bg-teal-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-teal-700 transition-all duration-200 transform hover:scale-105 flex items-center space-x-2 shadow-lg"
            >
              <Download className="w-5 h-5" />
              <span>Download My Apps</span>
            </Link>

            <Link
              to="/chat"
              className="group bg-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-purple-700 transition-all duration-200 transform hover:scale-105 flex items-center space-x-2 shadow-lg"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Ask Me Anything</span>
            </Link>
          </motion.div>
        </div>

        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            animate={{
              y: [0, -20, 0],
              rotate: [0, 5, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute top-20 left-10 w-20 h-20 bg-blue-200 rounded-full opacity-50"
          />
          <motion.div
            animate={{
              y: [0, 20, 0],
              rotate: [0, -5, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute bottom-20 right-10 w-32 h-32 bg-purple-200 rounded-full opacity-50"
          />
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 + index * 0.1 }}
                className="text-center"
              >
                <div className="flex justify-center mb-4 text-blue-600">
                  {stat.icon}
                </div>
                <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              What I Do
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Specialized in creating innovative digital solutions that bridge technology and user needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 + index * 0.2 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="text-blue-600 mb-6">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {service.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Achievements & Milestones
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Key accomplishments that showcase my journey and expertise in software development
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ x: index % 2 === 0 ? -50 : 50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 + index * 0.1 }}
                className="flex items-center space-x-4 bg-gray-50 p-6 rounded-xl hover:bg-gray-100 transition-colors duration-200"
              >
                <div className="flex-shrink-0 bg-blue-100 p-3 rounded-lg">
                  <div className="text-blue-600">
                    {achievement.icon}
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">
                    {achievement.title}
                  </h3>
                  <p className="text-gray-600">
                    {achievement.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Let's collaborate to bring your ideas to life with cutting-edge technology and innovative solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/contact"
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 transform hover:scale-105"
              >
                Start a Conversation
              </Link>
              <Link
                to="/projects"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-200 transform hover:scale-105"
              >
                View My Work
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Recent Updates Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-2xl p-8 shadow-lg"
          >
            <div className="flex items-center space-x-3 mb-6">
              <Calendar className="w-8 h-8 text-green-600" />
              <h2 className="text-3xl font-bold text-gray-900">Latest Updates</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="font-semibold text-gray-900 mb-2">🏆 Best Project Award</h3>
                <p className="text-gray-600 text-sm mb-1">Food Ordering System - DebreMarkos University</p>
                <p className="text-gray-500 text-xs">Graduation Project Recognition</p>
              </div>
              <div className="border-l-4 border-teal-500 pl-4">
                <h3 className="font-semibold text-gray-900 mb-2">Portfolio Website Launch</h3>
                <p className="text-gray-600 text-sm mb-1">Modern React-based portfolio with AI chat</p>
                <p className="text-gray-500 text-xs">December 2024</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default Home;
