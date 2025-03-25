import React, { useState } from 'react';
import { Send, MapPin, Phone, Mail } from 'lucide-react';
import emailjs from 'emailjs-com';
import { SERVICE_MAIL_ID, TEMPLATE_AUTO_REPLY, TEMPLATE_OWNER_NOTIFICATION, USER_ID } from '../config';

// Extend FormData with an index signature so it satisfies EmailJS’s parameter type
interface FormData extends Record<string, string> {
  name: string;
  email: string;
  message: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
  });
  const [loading, setLoading] = useState<boolean>(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setStatus('idle');

    // Build parameters for the auto reply email to the sender
    const autoReplyParams = {
      to_email: formData.email, // EmailJS template variable e.g., {{to_email}}
      name: formData.name,      // e.g., {{name}}
      reply_message: "Thank you for contacting us. We have received your message and will get back to you shortly." // custom message for auto reply
    };

    // Build parameters for the owner's notification email
    const ownerNotificationParams = {
      from_name: formData.name, // e.g., {{from_name}}
      from_email: formData.email, // e.g., {{from_email}}
      message: formData.message   // e.g., {{message}}
    };

    // Send both emails concurrently using Promise.all
    Promise.all([
      emailjs.send(SERVICE_MAIL_ID, TEMPLATE_AUTO_REPLY, autoReplyParams, USER_ID),
      emailjs.send(SERVICE_MAIL_ID, TEMPLATE_OWNER_NOTIFICATION, ownerNotificationParams, USER_ID)
    ])
      .then(([autoReplyResult, ownerResult]) => {
        console.log('Auto reply sent:', autoReplyResult.text);
        console.log('Owner notification sent:', ownerResult.text);
        setLoading(false);
        setStatus('success');
        // Reset the form after successful sending
        setFormData({ name: '', email: '', message: '' });
      })
      .catch((error) => {
        console.error('Error sending emails:', error.text);
        setLoading(false);
        setStatus('error');
      });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="lg:grid lg:grid-cols-2 lg:gap-8">
        {/* Contact Information */}
        <div>
          <h2 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-blue-400 neon-text">
            Get in Touch
          </h2>
          <p className="mt-4 text-lg text-gray-300">
            I'm always open to new opportunities and interesting projects.
            Feel free to reach out!
          </p>
          <dl className="mt-8 space-y-6">
            <div className="glass p-4 rounded-xl transform hover:scale-105 transition-all duration-300">
              <div className="flex items-center">
                <div className="w-10 h-10 bg-gradient-to-r from-indigo-700 to-blue-700 rounded-lg flex items-center justify-center neon-border">
                  <MapPin className="h-5 w-5 text-white" />
                </div>
                <div className="ml-4 text-base text-gray-300">
                  <p>Kahawa Sukari Bungoma Road 1st North Avenue</p>
                  <p>Nairobi City, 00620</p>
                </div>
              </div>
            </div>
            <div className="glass p-4 rounded-xl transform hover:scale-105 transition-all duration-300">
              <div className="flex items-center">
                <div className="w-10 h-10 bg-gradient-to-r from-indigo-700 to-blue-700 rounded-lg flex items-center justify-center neon-border">
                  <Phone className="h-5 w-5 text-white" />
                </div>
                <div className="ml-4 text-base text-gray-300">
                  <p>+254115074052</p>
                </div>
              </div>
            </div>
            <div className="glass p-4 rounded-xl transform hover:scale-105 transition-all duration-300">
              <div className="flex items-center">
                <div className="w-10 h-10 bg-gradient-to-r from-indigo-700 to-blue-700 rounded-lg flex items-center justify-center neon-border">
                  <Mail className="h-5 w-5 text-white" />
                </div>
                <div className="ml-4 text-base text-gray-300">
                  <p>kingorigib@gmail.com</p>
                </div>
              </div>
            </div>
          </dl>
        </div>
        {/* Contact Form */}
        <div className="mt-12 lg:mt-0">
          <form onSubmit={handleSubmit} className="glass p-6 rounded-xl space-y-6">
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
                  className="py-3 px-4 block w-full bg-gray-900/50 border border-indigo-700/30 rounded-md text-gray-100 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-300"
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
                  className="py-3 px-4 block w-full bg-gray-900/50 border border-indigo-700/30 rounded-md text-gray-100 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-300"
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
                  className="py-3 px-4 block w-full bg-gray-900/50 border border-indigo-700/30 rounded-md text-gray-100 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-300"
                  required
                ></textarea>
              </div>
            </div>

            <div>
              <button
                type="submit"
                disabled={loading}
                className="w-full inline-flex justify-center items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gradient-to-r from-indigo-700 to-blue-700 hover:from-indigo-800 hover:to-blue-800 transform hover:scale-105 transition-all duration-300 neon-border disabled:opacity-50"
              >
                {loading ? 'Sending...' : (
                  <>
                    <Send className="h-5 w-5 mr-2" />
                    Send Message
                  </>
                )}
              </button>
            </div>
            {status === 'success' && (
              <div className="text-green-500 text-center">
                Your message has been sent successfully!
              </div>
            )}
            {status === 'error' && (
              <div className="text-red-500 text-center">
                Something went wrong. Please try again later.
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
