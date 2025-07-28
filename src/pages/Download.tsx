import React from 'react';
import { motion } from 'framer-motion';
import { Download, Smartphone, Star, Users, Calendar } from 'lucide-react';

const DownloadPage = () => {
  const apps = [
    {
      name: "AI-Based Student Study Assistant",
      apkFileName: "AIapp-debug.apk",
      description: "Intelligent study companion with personalized learning paths and AI recommendations",
      icon: "📚",
      version: "v2.1.0",
      downloads: "1K+",
      rating: 4.8,
      size: "12 MB",
      compatibility: "Android 6.0+",
      lastUpdate: "Dec 2024",
      features: ["AI-powered recommendations", "Progress tracking", "Offline study mode", "Personalized quizzes"]
    },
    {
      name: "Merchant Equity & Money Manager",
      description: "Complete financial management solution for small businesses and merchants",
      icon: "💰",
      version: "v1.5.2",
      downloads: "1K+",
      rating: 4.6,
      size: "8 MB",
      compatibility: "Android 5.0+",
      lastUpdate: "Nov 2024",
      features: ["Transaction tracking", "Profit analysis", "Expense management", "Financial reports"]
    },
    {
      name: "Social Media Post Generator",
      description: "Create stunning social media content with AI-powered templates and filters",
      icon: "🎨",
      version: "v3.0.1",
      downloads: "1K+",
      rating: 4.9,
      size: "15 MB",
      compatibility: "Android 7.0+",
      lastUpdate: "Dec 2024",
      features: ["Template library", "Auto-posting", "Image filters", "Content scheduler"]
    },
    {
      name: "Amharic Bible Audio",
      description: "Complete Amharic Bible with high-quality audio narration and search features",
      icon: "✝️",
      version: "v2.3.0",
      downloads: "1K+",
      rating: 4.9,
      size: "45 MB",
      compatibility: "Android 5.0+",
      lastUpdate: "Oct 2024",
      features: ["Full audio narration", "Offline reading", "Bookmark verses", "Search functionality"]
    },
    {
      name: "Wudasie Mariam Audio",
      apkFileName: "wmapp-release.apk",
      description: "Devotional Amharic audio content with prayers and spiritual teachings",
      icon: "🙏",
      version: "v1.8.0",
      downloads: "1K+",
      rating: 4.7,
      size: "25 MB",
      compatibility: "Android 5.0+",
      lastUpdate: "Nov 2024",
      features: ["Offline playback", "Daily prayers", "Spiritual teachings", "Audio bookmarks"]
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
            Download My Apps
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore my collection of mobile applications available for Android devices
          </p>
        </motion.div>

        {/* Apps Grid */}
        <div className="space-y-8">
          {apps.map((app, index) => (
            <motion.div
              key={index}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 + index * 0.1 }}
              className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* App Info */}
                <div className="lg:col-span-2">
                  <div className="flex items-start space-x-4">
                    <div className="text-4xl">{app.icon}</div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">
                        {app.name}
                      </h3>
                      <p className="text-gray-600 mb-4 leading-relaxed">
                        {app.description}
                      </p>

                      {/* App Stats */}
                      <div className="flex flex-wrap items-center gap-6 mb-4">
                        <div className="flex items-center space-x-1">
                          <Star className="w-4 h-4 text-yellow-500 fill-current" />
                          <span className="text-sm text-gray-600">{app.rating}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Users className="w-4 h-4 text-blue-500" />
                          <span className="text-sm text-gray-600">{app.downloads} downloads</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Smartphone className="w-4 h-4 text-green-500" />
                          <span className="text-sm text-gray-600">{app.size}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Calendar className="w-4 h-4 text-purple-500" />
                          <span className="text-sm text-gray-600">{app.lastUpdate}</span>
                        </div>
                      </div>

                      {/* Features */}
                      <div className="space-y-2">
                        <h4 className="font-semibold text-gray-900">Key Features:</h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {app.features.map((feature, featureIndex) => (
                            <div key={featureIndex} className="flex items-center space-x-2">
                              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                              <span className="text-sm text-gray-600">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Download Section */}
                <div className="lg:col-span-1">
                  <div className="bg-gray-50 rounded-xl p-6 h-full flex flex-col justify-between">
                    <div>
                      <div className="text-center mb-4">
                        <div className="text-3xl mb-2">📱</div>
                        <p className="text-sm text-gray-600">Version {app.version}</p>
                        <p className="text-sm text-gray-600">{app.compatibility}</p>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <a
  href={`/apks/${app.apkFileName}`}
  download
  className="w-full bg-green-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-green-700 transition-colors duration-200 flex items-center justify-center space-x-2"
>
  <Download className="w-5 h-5" />
  <span>Download APK</span>
</a>

                      
                      <button className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center space-x-2">
                        <span>🔗</span>
                        <span>Play Store</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Download Info */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-16"
        >
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
              Installation Instructions
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl mb-3">📱</div>
                <h4 className="font-semibold text-gray-900 mb-2">Enable Unknown Sources</h4>
                <p className="text-sm text-gray-600">
                  Go to Settings {'>'} Security {'>'} Enable "Unknown Sources" to install APK files
                </p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-3">⬇️</div>
                <h4 className="font-semibold text-gray-900 mb-2">Download APK</h4>
                <p className="text-sm text-gray-600">
                  Click the download button and save the APK file to your device
                </p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-3">📲</div>
                <h4 className="font-semibold text-gray-900 mb-2">Install & Enjoy</h4>
                <p className="text-sm text-gray-600">
                  Tap the downloaded file and follow the installation prompts
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default DownloadPage;