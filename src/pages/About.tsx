import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, MapPin, Calendar, Code2 } from 'lucide-react';
import esrael5Image from '../esrael5.jpg';

const About = () => {
  const education = [
    {
      period: "Grade 1-8",
      institution: "Enetemen Elementary School",
      icon: <GraduationCap className="w-6 h-6 text-blue-600" />
    },
    {
      period: "Grade 9-10",
      institution: "Yejubie High School",
      icon: <GraduationCap className="w-6 h-6 text-blue-600" />
    },
    {
      period: "Grade 11-12",
      institution: "Yejubie Preparatory School",
      icon: <GraduationCap className="w-6 h-6 text-blue-600" />
    },
    {
      period: "BSc",
      institution: "Software Engineering - DebreMarkos University",
      icon: <GraduationCap className="w-6 h-6 text-blue-600" />
    },
    {
      period: "BA",
      institution: "Accounting & Finance - BlueMark College",
      icon: <GraduationCap className="w-6 h-6 text-blue-600" />
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
            About Me
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get to know more about my journey, education, and passion for technology
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="relative"
          >
            <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={esrael5Image}
                alt="Esrael Admasu"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-blue-600 text-white p-4 rounded-xl shadow-lg">
              <Code2 className="w-8 h-8" />
            </div>
          </motion.div>

          {/* Biography */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold text-gray-900">My Story</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Hello! I'm Esrael Admasu Lyew, a passionate full-stack developer and mobile app creator 
              based in Ethiopia. My journey in technology started with a curiosity about how things work 
              and evolved into a deep love for creating digital solutions that impact people's lives.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              With a unique combination of technical expertise in Software Engineering and business 
              acumen from my Accounting & Finance background, I bring a holistic approach to software 
              development. I specialize in web technologies and mobile app development, particularly 
              with Flutter.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              During my final year at DebreMarkos University, I was honored to receive the Best Project 
              Award for developing a comprehensive Online Food Ordering and Delivery System. This 
              recognition validated my technical skills and innovative approach to solving real-world problems.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              When I'm not coding, I enjoy exploring new technologies, contributing to open-source 
              projects, and mentoring aspiring developers in my community.
            </p>
          </motion.div>
        </div>

        {/* Education Timeline */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-20"
        >
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Educational Journey
          </h2>
          
          <div className="space-y-6">
            {education.map((item, index) => (
              <motion.div
                key={index}
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 1 + index * 0.1 }}
                className="flex items-center space-x-4 bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200"
              >
                <div className="flex-shrink-0">
                  {item.icon}
                </div>
                <div className="flex-1">
                  <div className="flex items-center space-x-3">
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                      {item.period}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mt-2">
                    {item.institution}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default About;
