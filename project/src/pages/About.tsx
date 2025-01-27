import React from 'react';
import { Award, BookOpen, Coffee } from 'lucide-react';

function About() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* About Me Section */}
      <div className="lg:flex lg:items-center lg:justify-between">
        <div className="lg:w-1/2">
          <h1 className="text-4xl font-bold text-white">About Me</h1>
          <p className="mt-4 text-lg text-gray-300">
            Hello! I'm Gibson King'ori, a BBIT student at Strathmore University with a passion for technology and innovation.
            I specialize in creating solutions that blend creativity with functionality.
          </p>
          <p className="mt-4 text-lg text-gray-300">
            When I'm not coding or studying, you can find me exploring new technologies and contributing to innovative projects.
          </p>
          <div className="mt-6">
            <a
              href="/Gibson_Kingori_CV.pdf"
              download
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 transition-colors"
            >
              Download CV
            </a>
          </div>
        </div>
       
      </div>

      {/* Values Section */}
      <div className="mt-20">
        <h2 className="text-3xl font-bold text-white">My Values</h2>
        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="bg-dark-card p-6 rounded-lg shadow-md border border-gray-800">
            <div className="w-12 h-12 bg-purple-900/50 rounded-lg flex items-center justify-center mb-4">
              <Award className="h-6 w-6 text-purple-400" />
            </div>
            <h3 className="text-xl font-semibold text-white">Excellence</h3>
            <p className="mt-2 text-gray-400">
              Striving for excellence in every project and academic pursuit.
            </p>
          </div>

          <div className="bg-dark-card p-6 rounded-lg shadow-md border border-gray-800">
            <div className="w-12 h-12 bg-purple-900/50 rounded-lg flex items-center justify-center mb-4">
              <BookOpen className="h-6 w-6 text-purple-400" />
            </div>
            <h3 className="text-xl font-semibold text-white">Continuous Learning</h3>
            <p className="mt-2 text-gray-400">
              Always learning and staying up-to-date with the latest technologies.
            </p>
          </div>

          <div className="bg-dark-card p-6 rounded-lg shadow-md border border-gray-800">
            <div className="w-12 h-12 bg-purple-900/50 rounded-lg flex items-center justify-center mb-4">
              <Coffee className="h-6 w-6 text-purple-400" />
            </div>
            <h3 className="text-xl font-semibold text-white">Innovation</h3>
            <p className="mt-2 text-gray-400">
              Finding creative solutions to complex problems.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;