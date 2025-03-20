import React from 'react';
import { ArrowRight, Code, Layout, Server, Globe, Lightbulb, TreePine, Users2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import gibsonImage from '../asset/gibson.jpg';

function Home() {
  const projects = [
    {
      title: 'Travel Agency Website',
      description: 'Developed a comprehensive travel agency website with responsive design and user-friendly navigation.',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      details: [
        'Developed a footer section for a travel agency website',
        'Designed an HTML page for travel packages',
        'Implemented responsive design for better accessibility'
      ],
      icon: <Globe className="h-6 w-6" />
    },
    {
      title: 'JavaScript Light Switch',
      description: 'Created an interactive light switch simulation with realistic effects and dynamic UI changes.',
      technologies: ['JavaScript', 'HTML', 'CSS'],
      details: [
        'Created a realistic light switch using JavaScript',
        'Integrated dynamic light bulb effects',
        'Designed interactive UI with background changes'
      ],
      icon: <Lightbulb className="h-6 w-6" />
    },
    {
      title: 'Binary Tree Implementation',
      description: 'Developed a Java-based binary tree implementation with comprehensive traversal algorithms.',
      technologies: ['Java', 'Data Structures', 'Algorithms'],
      details: [
        'Developed binary tree data structure',
        'Implemented tree traversal algorithms',
        'Used object-oriented programming principles'
      ],
      icon: <TreePine className="h-6 w-6" />
    },
    {
      title: 'Employee Management System',
      description: 'Designed a comprehensive employee management system using OOP principles.',
      technologies: ['Java', 'OOP', 'Exception Handling'],
      details: [
        'Designed employee records management system',
        'Applied OOP concepts',
        'Implemented exception handling',
        'Created user-friendly I/O interface'
      ],
      icon: <Users2 className="h-6 w-6" />
    }
  ];

  const skills = [
    'Java',
    'JavaScript',
    'HTML & CSS',
    'Object-Oriented Programming',
    'Data Structures',
    'UI/UX Basics',
    'Problem-Solving'
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <div className="py-20 md:py-28">
        <div className="text-center">
          <div className="mb-8 relative">
            <div className="w-48 h-48 mx-auto relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-700 to-blue-700 rounded-full animate-pulse-slow opacity-10 group-hover:opacity-20 transition-opacity"></div>
              <img
                src={gibsonImage}
                alt="Profile"
                className="w-48 h-48 rounded-full object-cover border-4 border-indigo-700/30 shadow-xl transform hover:scale-105 transition-all duration-300 hover:rotate-3 cursor-pointer neon-border"
              />
              <div className="absolute -inset-1 bg-gradient-to-r from-indigo-700 to-blue-700 rounded-full animate-spin-slow opacity-10"></div>
            </div>
          </div>
          <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
            <span className="block">Hi, I'm </span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-blue-400 neon-text">Gibson King'ori</span>
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-400 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            BBIT Student at Strathmore University passionate about creating innovative solutions
          </p>
          <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
            <div className="rounded-md shadow">
              <Link
                to="/contact"
                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gradient-to-r from-indigo-700 to-blue-700 hover:from-indigo-800 hover:to-blue-800 transform hover:scale-105 transition-all duration-300 neon-border"
              >
                Get in touch
              </Link>
            </div>
            <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
              <a
                href="#projects"
                className="w-full flex items-center justify-center px-8 py-3 border border-indigo-700/30 text-base font-medium rounded-md text-indigo-400 glass hover:bg-indigo-900/20 transform hover:scale-105 transition-all duration-300"
              >
                View my work
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Skills Section */}
      <div className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-indigo-400 font-semibold tracking-wide uppercase neon-text">Skills</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
              What I Do Best
            </p>
          </div>

          <div className="mt-10">
            <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-10">
              <div className="relative glass p-6 rounded-xl transform hover:scale-105 transition-all duration-300">
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-gradient-to-r from-indigo-700 to-blue-700 text-white neon-border">
                  <Layout className="h-6 w-6" aria-hidden="true" />
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-white">Web Development</p>
                <p className="mt-2 ml-16 text-base text-gray-400">
                  Creating responsive and functional websites using modern technologies
                </p>
              </div>

              <div className="relative glass p-6 rounded-xl transform hover:scale-105 transition-all duration-300">
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-gradient-to-r from-indigo-700 to-blue-700 text-white neon-border">
                  <Server className="h-6 w-6" aria-hidden="true" />
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-white">System Analysis</p>
                <p className="mt-2 ml-16 text-base text-gray-400">
                  Analyzing and optimizing business systems and processes
                </p>
              </div>

              <div className="relative glass p-6 rounded-xl transform hover:scale-105 transition-all duration-300">
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-gradient-to-r from-indigo-700 to-blue-700 text-white neon-border">
                  <Code className="h-6 w-6" aria-hidden="true" />
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-white">Technical Writing</p>
                <p className="mt-2 ml-16 text-base text-gray-400">
                  Documenting processes and technical information clearly
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Projects Section */}
      <div id="projects" className="py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white neon-text">Featured Projects</h2>
          <p className="mt-4 text-gray-400">Some of my recent work</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="glass rounded-xl overflow-hidden transform hover:scale-105 transition-all duration-300">
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="h-10 w-10 bg-gradient-to-r from-indigo-700 to-blue-700 rounded-lg flex items-center justify-center neon-border">
                    {project.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white ml-4">{project.title}</h3>
                </div>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <ul className="list-disc list-inside text-gray-400 mb-4 space-y-2">
                  {project.details.map((detail, detailIndex) => (
                    <li key={detailIndex}>{detail}</li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-indigo-900/20 text-indigo-400 rounded-full text-sm border border-indigo-700/30 neon-border"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Skills & Technologies */}
        <div className="mt-12 glass rounded-xl p-6 transform hover:scale-105 transition-all duration-300">
          <h3 className="text-xl font-semibold text-white mb-4 neon-text">Skills & Technologies</h3>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-gradient-to-r from-indigo-900/20 to-blue-900/20 text-indigo-400 rounded-full text-sm border border-indigo-700/30 neon-border"
              >
                ✨ {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;