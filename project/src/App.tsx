import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 text-gray-100">
        {/* Navigation */}
        <nav className="glass sticky top-0 z-50 backdrop-blur-lg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex items-center">
                <Link to="/" className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-blue-400 hover:from-indigo-500 hover:to-blue-500 transition-all duration-300">
                  Gibson King'ori
                </Link>
              </div>
              
              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center space-x-8">
                <Link to="/" className="text-gray-400 hover:text-indigo-400 transition-all duration-300 hover:scale-105">Home</Link>
                <Link to="/about" className="text-gray-400 hover:text-indigo-400 transition-all duration-300 hover:scale-105">About</Link>
                <Link to="/contact" className="text-gray-400 hover:text-indigo-400 transition-all duration-300 hover:scale-105">Contact</Link>
              </div>

              {/* Mobile menu button */}
              <div className="md:hidden flex items-center">
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="text-gray-400 hover:text-indigo-400 transition-colors"
                >
                  {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden glass">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <Link to="/" className="block px-3 py-2 text-gray-400 hover:text-indigo-400 hover:bg-indigo-900/20 rounded-md transition-all duration-300">Home</Link>
                <Link to="/about" className="block px-3 py-2 text-gray-400 hover:text-indigo-400 hover:bg-indigo-900/20 rounded-md transition-all duration-300">About</Link>
                <Link to="/contact" className="block px-3 py-2 text-gray-400 hover:text-indigo-400 hover:bg-indigo-900/20 rounded-md transition-all duration-300">Contact</Link>
              </div>
            </div>
          )}
        </nav>

        {/* Main Content */}
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        {/* Footer */}
        <footer className="glass mt-12 border-t border-indigo-500/10">
          <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center">
              <p className="text-gray-500">&copy; 2025 Gibson King'ori. All rights reserved.</p>
              <div className="flex space-x-4">
                <a href="https://github.com/GibsonKingori" className="text-gray-500 hover:text-indigo-400 transition-all duration-300 hover:scale-110">
                  <Github size={20} />
                </a>
                <a href="www.linkedin.com/in/gibson-king-ori-9727362ba" className="text-gray-500 hover:text-indigo-400 transition-all duration-300 hover:scale-110">
                  <Linkedin size={20} />
                </a>
                <a href="mailto:kingorigib@gmail.com" className="text-gray-500 hover:text-indigo-400 transition-all duration-300 hover:scale-110">
                  <Mail size={20} />
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;