
import {  Code, Layout, Server } from 'lucide-react';
import { Link } from 'react-router-dom';

function Home() {
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
    </div>
  );
}

export default Home;