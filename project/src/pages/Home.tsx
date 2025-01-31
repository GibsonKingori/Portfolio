
import {  Code, Layout, Server, Globe, Lightbulb, TreePine, Users2 } from 'lucide-react';
import { Link } from 'react-router-dom';

function Home() {
  const projects = [
    {
      title: 'Travel Agency Website',
      description: 'Developed a comprehensive travel agency website with responsive design and user-friendly navigation.',
      image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
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
      image: 'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
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
      image: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
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
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
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
    'React',
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
          <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
            <span className="block">Hi, I'm </span>
            <span className="block text-purple-400">Gibson King'ori</span>
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-400 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            BBIT Student at Strathmore University passionate about creating innovative solutions
          </p>
          <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
            <div className="rounded-md shadow">
              <Link
                to="/contact"
                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 transition-colors md:py-4 md:text-lg md:px-10"
              >
                Get in touch
              </Link>
            </div>
            <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
              <a
                href="#projects"
                className="w-full flex items-center justify-center px-8 py-3 border border-purple-600 text-base font-medium rounded-md text-purple-400 bg-transparent hover:bg-purple-600 hover:text-white transition-colors md:py-4 md:text-lg md:px-10"
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
            <h2 className="text-base text-purple-400 font-semibold tracking-wide uppercase">Skills</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
              What I Do Best
            </p>
          </div>

          <div className="mt-10">
            <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-10">
              <div className="relative">
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-purple-600 text-white">
                  <Layout className="h-6 w-6" aria-hidden="true" />
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-white">Web Development</p>
                <p className="mt-2 ml-16 text-base text-gray-400">
                  Creating responsive and functional websites using modern technologies
                </p>
              </div>

              <div className="relative">
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-purple-600 text-white">
                  <Server className="h-6 w-6" aria-hidden="true" />
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-white">System Analysis</p>
                <p className="mt-2 ml-16 text-base text-gray-400">
                  Analyzing and optimizing business systems and processes
                </p>
              </div>

              <div className="relative">
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-purple-600 text-white">
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
          <h2 className="text-3xl font-bold text-white">Featured Projects</h2>
          <p className="mt-4 text-gray-400">Some of my recent work</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-dark-card rounded-lg shadow-md overflow-hidden border border-gray-800">
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="h-10 w-10 bg-purple-600/20 rounded-lg flex items-center justify-center">
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
                      className="px-3 py-1 bg-purple-900/30 text-purple-400 rounded-full text-sm border border-purple-700/50"
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
        <div className="mt-12 bg-dark-card rounded-lg border border-gray-800 p-6">
          <h3 className="text-xl font-semibold text-white mb-4">Skills & Technologies</h3>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-purple-900/30 text-purple-400 rounded-full text-sm border border-purple-700/50"
              >
                ✅ {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;