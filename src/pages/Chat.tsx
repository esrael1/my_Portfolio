import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Send, Bot, User, Sparkles } from 'lucide-react';

interface Message {
  id: number;
  content: string;
  isBot: boolean;
  timestamp: Date;
}

const Chat = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      content: "Hello! I'm Esrael's AI assistant. I can answer questions about his background, skills, projects, and experience. What would you like to know?",
      isBot: true,
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const generateBotResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase();
    
    if (lowerMessage.includes('skills') || lowerMessage.includes('technology') || lowerMessage.includes('programming')) {
      return "Esrael is proficient in web development technologies including HTML, CSS, JavaScript, PHP, and MySQL. For mobile development, he specializes in Flutter and Dart, with experience in Android Studio and Kotlin. He's passionate about creating both web applications and mobile apps that solve real-world problems.";
    }
    
    if (lowerMessage.includes('education') || lowerMessage.includes('university') || lowerMessage.includes('degree')) {
      return "Esrael has a strong educational background with a BSc in Software Engineering from DebreMarkos University and a BA in Accounting & Finance from BlueMark College. This unique combination gives him both technical expertise and business acumen.";
    }
    
    if (lowerMessage.includes('projects') || lowerMessage.includes('apps') || lowerMessage.includes('portfolio')) {
      return "Esrael has developed several impressive projects including an Online Food Ordering System using PHP and MySQL, an AI-Based Student Study Assistant app, a Merchant Equity & Money Manager app, and spiritual apps like the Amharic Bible Audio app. All mobile apps are built with Flutter.";
    }
    
    if (lowerMessage.includes('experience') || lowerMessage.includes('work') || lowerMessage.includes('background')) {
      return "Esrael is a passionate full-stack developer and mobile app creator with expertise in both web and mobile technologies. His experience spans from developing complex web applications to creating user-friendly mobile apps that serve various communities.";
    }
    
    if (lowerMessage.includes('contact') || lowerMessage.includes('hire') || lowerMessage.includes('available')) {
      return "Esrael is available for new opportunities! You can reach him at esrael.cv@gmail.com. He's open to freelance projects, full-time positions, and collaborative opportunities in web and mobile development.";
    }
    
    if (lowerMessage.includes('flutter') || lowerMessage.includes('mobile') || lowerMessage.includes('android')) {
      return "Flutter is one of Esrael's core specialties! He has developed multiple production-ready mobile apps using Flutter and Dart, including educational apps, financial management tools, and spiritual content apps. His mobile apps are available for Android devices.";
    }
    
    if (lowerMessage.includes('hello') || lowerMessage.includes('hi') || lowerMessage.includes('hey')) {
      return "Hello! Great to meet you! I'm here to help you learn more about Esrael Admasu Lyew. He's a talented full-stack developer from Ethiopia with a passion for creating innovative solutions. What specific aspect of his work interests you?";
    }
    
    return "That's an interesting question! While I focus on Esrael's professional background, I'd be happy to tell you more about his skills in web development (PHP, JavaScript, MySQL), mobile app development (Flutter, Dart), or his various projects. What specific area would you like to explore?";
  };

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return;

    const userMessage: Message = {
      id: messages.length + 1,
      content: inputMessage,
      isBot: false,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsTyping(true);

    // Simulate API delay
    setTimeout(() => {
      const botResponse: Message = {
        id: messages.length + 2,
        content: generateBotResponse(inputMessage),
        isBot: true,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1500);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-20"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-center mb-8"
        >
          <div className="flex items-center justify-center space-x-3 mb-4">
            <Sparkles className="w-8 h-8 text-purple-600" />
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
              Ask Me Anything
            </h1>
            <Sparkles className="w-8 h-8 text-purple-600" />
          </div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Chat with my AI assistant to learn about my background, skills, and projects
          </p>
        </motion.div>

        {/* Chat Container */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="bg-white rounded-2xl shadow-lg overflow-hidden"
        >
          {/* Messages Area */}
          <div className="h-96 overflow-y-auto p-6 space-y-4 bg-gray-50">
            {messages.map((message) => (
              <motion.div
                key={message.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
              >
                <div className={`flex items-start space-x-3 max-w-xs lg:max-w-md ${
                  message.isBot ? '' : 'flex-row-reverse space-x-reverse'
                }`}>
                  <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
                    message.isBot ? 'bg-blue-100' : 'bg-gray-100'
                  }`}>
                    {message.isBot ? (
                      <Bot className="w-5 h-5 text-blue-600" />
                    ) : (
                      <User className="w-5 h-5 text-gray-600" />
                    )}
                  </div>
                  <div className={`rounded-2xl px-4 py-3 ${
                    message.isBot 
                      ? 'bg-white text-gray-800 border border-gray-200' 
                      : 'bg-blue-600 text-white'
                  }`}>
                    <p className="text-sm leading-relaxed">{message.content}</p>
                  </div>
                </div>
              </motion.div>
            ))}
            
            {isTyping && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex justify-start"
              >
                <div className="flex items-start space-x-3 max-w-xs lg:max-w-md">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <Bot className="w-5 h-5 text-blue-600" />
                  </div>
                  <div className="bg-white border border-gray-200 rounded-2xl px-4 py-3">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="border-t border-gray-200 p-4">
            <div className="flex space-x-4">
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask about my skills, projects, or experience..."
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                disabled={isTyping}
              />
              <button
                onClick={handleSendMessage}
                disabled={isTyping || !inputMessage.trim()}
                className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors duration-200 flex items-center space-x-2"
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
          </div>
        </motion.div>

        {/* Suggested Questions */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-8"
        >
          <h3 className="text-lg font-semibold text-gray-900 mb-4 text-center">
            Suggested Questions
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              "What are Esrael's technical skills?",
              "Tell me about his mobile apps",
              "What's his educational background?",
              "Is he available for new projects?"
            ].map((question, index) => (
              <button
                key={index}
                onClick={() => setInputMessage(question)}
                className="text-left p-3 bg-blue-50 text-blue-700 rounded-lg hover:bg-blue-100 transition-colors duration-200"
              >
                {question}
              </button>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Chat;