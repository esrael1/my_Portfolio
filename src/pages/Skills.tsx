import React from 'react';
import { motion } from 'framer-motion';
import { Code, Smartphone, Database, Globe, Wrench, Cpu } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Web Development",
      icon: <Globe className="w-8 h-8" />,
      color: "blue",
      skills: [
        { name: "HTML", level: 95 },
        { name: "CSS", level: 90 },
        { name: "JavaScript", level: 88 },
        { name: "React", level: 85 },
        { name: "Node.js", level: 82 },
        { name: "Express.js", level: 80 },
        { name: "PHP", level: 85 },
        { name: "MySQL", level: 82 },
        { name: "MongoDB", level: 78 }
      ]
    },
    {
      title: "Mobile Development",
      icon: <Smartphone className="w-8 h-8" />,
      color: "teal",
      skills: [
        { name: "Flutter", level: 92 },
        { name: "Dart", level: 90 },
        { name: "Android Studio", level: 85 },
        { name: "Kotlin", level: 78 }
      ]
    },
    {
      title: "Tools & Technologies",
      icon: <Wrench className="w-8 h-8" />,
      color: "purple",
      skills: [
        { name: "Git", level: 88 },
        { name: "AJAX", level: 85 },
        { name: "REST APIs", level: 87 },
        { name: "Firebase", level: 80 }
      ]
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: {
        bg: "bg-blue-100",
        text: "text-blue-600",
        progress: "bg-blue-600",
        border: "border-blue-200"
      },
      teal: {
        bg: "bg-teal-100",
        text: "text-teal-600",
        progress: "bg-teal-600",
        border: "border-teal-200"
      },
      purple: {
        bg: "bg-purple-100",
        text: "text-purple-600",
        progress: "bg-purple-600",
        border: "border-purple-200"
      }
    };
    return colors[color as keyof typeof colors];
  };

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
            My Skills
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A comprehensive overview of my technical expertise and proficiency levels
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => {
            const colorClasses = getColorClasses(category.color);
            
            return (
              <motion.div
                key={category.title}
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 + categoryIndex * 0.2 }}
                className={`bg-white rounded-2xl p-8 shadow-lg border-2 ${colorClasses.border} hover:shadow-xl transition-shadow duration-300`}
              >
                {/* Category Header */}
                <div className="flex items-center space-x-4 mb-8">
                  <div className={`p-3 rounded-xl ${colorClasses.bg}`}>
                    <div className={colorClasses.text}>
                      {category.icon}
                    </div>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">
                    {category.title}
                  </h2>
                </div>

                {/* Skills List */}
                <div className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.6 + categoryIndex * 0.2 + skillIndex * 0.1 }}
                    >
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-semibold text-gray-800">
                          {skill.name}
                        </span>
                        <span className="text-sm text-gray-600">
                          {skill.level}%
                        </span>
                      </div>
                      
                      <div className="w-full bg-gray-200 rounded-full h-3">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${skill.level}%` }}
                          transition={{ 
                            delay: 1 + categoryIndex * 0.2 + skillIndex * 0.1,
                            duration: 1,
                            ease: "easeOut"
                          }}
                          className={`h-3 rounded-full ${colorClasses.progress} relative overflow-hidden`}
                        >
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse" />
                        </motion.div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Always Learning
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Technology evolves rapidly, and I'm committed to continuous learning. 
              I regularly update my skills and explore new frameworks and technologies 
              to stay at the forefront of development practices.
            </p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Skills;