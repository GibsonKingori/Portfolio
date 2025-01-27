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
      <div className="min-h-screen bg-dark text-gray-100">
        {/* Navigation */}
        <nav className="bg-dark-lighter border-b border-gray-800 sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex items-center">
                <Link to="/" className="text-xl font-bold text-purple-400">Gibson King'ori</Link>
              </div>
              
              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center space-x-8">
                <Link to="/" className="text-gray-300 hover:text-purple-400 transition-colors">Home</Link>
                <Link to="/about" className="text-gray-300 hover:text-purple-400 transition-colors">About</Link>
                <Link to="/contact" className="text-gray-300 hover:text-purple-400 transition-colors">Contact</Link>
              </div>

              {/* Mobile menu button */}
              <div className="md:hidden flex items-center">
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="text-gray-300 hover:text-purple-400"
                >
                  {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden bg-dark-lighter">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <Link to="/" className="block px-3 py-2 text-gray-300 hover:text-purple-400 transition-colors">Home</Link>
                <Link to="/about" className="block px-3 py-2 text-gray-300 hover:text-purple-400 transition-colors">About</Link>
                <Link to="/contact" className="block px-3 py-2 text-gray-300 hover:text-purple-400 transition-colors">Contact</Link>
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
        <footer className="bg-dark-lighter border-t border-gray-800 mt-12">
          <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center">
              <p className="text-gray-400">&copy; 2025 Gibson King'ori. All rights reserved.</p>
              <div className="flex space-x-4">
                <a href="https://github.com" className="text-gray-400 hover:text-purple-400 transition-colors">
                  <Github size={20} />
                </a>
                <a href="https://linkedin.com" className="text-gray-400 hover:text-purple-400 transition-colors">
                  <Linkedin size={20} />
                </a>
                <a href="mailto:contact@example.com" className="text-gray-400 hover:text-purple-400 transition-colors">
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