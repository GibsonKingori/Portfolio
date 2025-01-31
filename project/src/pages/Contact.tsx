import React, { useState } from 'react';
import { Send, MapPin, Phone, Mail } from 'lucide-react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="lg:grid lg:grid-cols-2 lg:gap-8">
        {/* Contact Information */}
        <div>
          <h2 className="text-3xl font-extrabold text-white">Get in Touch</h2>
          <p className="mt-4 text-lg text-gray-300">
            I'm always open to new opportunities and interesting projects.
            Feel free to reach out!
          </p>

          <dl className="mt-8 space-y-6">
            <div className="flex">
              <div className="flex-shrink-0">
                <MapPin className="h-6 w-6 text-purple-400" />
              </div>
              <div className="ml-3 text-base text-gray-300">
                <p>Kahawa Sukari</p>
                <p>Nairobi City, 00620</p>
              </div>
            </div>

            <div className="flex">
              <div className="flex-shrink-0">
                <Phone className="h-6 w-6 text-purple-400" />
              </div>
              <div className="ml-3 text-base text-gray-300">
                <p>+254115074052</p>
              </div>
            </div>

            <div className="flex">
              <div className="flex-shrink-0">
                <Mail className="h-6 w-6 text-purple-400" />
              </div>
              <div className="ml-3 text-base text-gray-300">
                <p>kingorigib@gmail.com</p>
              </div>
            </div>
          </dl>
        </div>

        {/* Contact Form */}
        <div className="mt-12 lg:mt-0">
          <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-300">
                Name
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="py-3 px-4 block w-full bg-dark-lighter border-gray-700 rounded-md text-gray-100 focus:ring-purple-500 focus:border-purple-500"
                  required
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300">
                Email
              </label>
              <div className="mt-1">
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="py-3 px-4 block w-full bg-dark-lighter border-gray-700 rounded-md text-gray-100 focus:ring-purple-500 focus:border-purple-500"
                  required
                />
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300">
                Message
              </label>
              <div className="mt-1">
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="py-3 px-4 block w-full bg-dark-lighter border-gray-700 rounded-md text-gray-100 focus:ring-purple-500 focus:border-purple-500"
                  required
                ></textarea>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="w-full inline-flex justify-center py-3 px-6 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition-colors"
              >
                <Send className="h-5 w-5 mr-2" />
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;