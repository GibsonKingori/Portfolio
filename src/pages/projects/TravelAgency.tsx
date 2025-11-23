import { Plane, Map, Star, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const TravelAgency = () => {
    const packages = [
        {
            title: "Tropical Paradise",
            location: "Maldives",
            price: "$1,299",
            rating: 4.9,
            image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
        },
        {
            title: "Mountain Adventure",
            location: "Swiss Alps",
            price: "$1,599",
            rating: 4.8,
            image: "https://images.unsplash.com/photo-1491555103987-c7e479a32cb5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
        },
        {
            title: "Desert Safari",
            location: "Dubai",
            price: "$999",
            rating: 4.7,
            image: "https://images.unsplash.com/photo-1451337516015-6b6e9a44a8a3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
        }
    ];

    return (
        <div className="min-h-screen bg-white text-gray-800">
            {/* Navigation */}
            <nav className="bg-white shadow-md sticky top-0 z-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-16">
                        <div className="flex items-center">
                            <Link to="/" className="flex items-center text-indigo-600 hover:text-indigo-800 transition-colors mr-4">
                                <ArrowLeft className="h-5 w-5 mr-1" />
                                Back
                            </Link>
                            <Plane className="h-8 w-8 text-indigo-600" />
                            <span className="ml-2 text-xl font-bold text-gray-900">Wanderlust Travels</span>
                        </div>
                        <div className="flex items-center space-x-4">
                            <button className="text-gray-600 hover:text-indigo-600">Destinations</button>
                            <button className="text-gray-600 hover:text-indigo-600">Packages</button>
                            <button className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-colors">
                                Book Now
                            </button>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <div className="relative h-[600px]">
                <div className="absolute inset-0">
                    <img
                        src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                        alt="Travel Hero"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black opacity-40"></div>
                </div>
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
                    <div className="text-white">
                        <h1 className="text-5xl font-bold mb-4">Discover Your Next Adventure</h1>
                        <p className="text-xl mb-8 max-w-2xl">
                            Explore the world's most beautiful destinations with our curated travel packages.
                            Your journey begins here.
                        </p>
                        <button className="bg-indigo-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-indigo-700 transition-all transform hover:scale-105">
                            Start Exploring
                        </button>
                    </div>
                </div>
            </div>

            {/* Packages Section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-900">Popular Packages</h2>
                    <p className="mt-4 text-gray-600">Hand-picked destinations for unforgettable experiences</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {packages.map((pkg, index) => (
                        <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                            <div className="h-48 overflow-hidden">
                                <img
                                    src={pkg.image}
                                    alt={pkg.title}
                                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                                />
                            </div>
                            <div className="p-6">
                                <div className="flex justify-between items-start mb-4">
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900">{pkg.title}</h3>
                                        <div className="flex items-center text-gray-500 mt-1">
                                            <Map className="h-4 w-4 mr-1" />
                                            <span className="text-sm">{pkg.location}</span>
                                        </div>
                                    </div>
                                    <div className="flex items-center bg-indigo-50 px-2 py-1 rounded">
                                        <Star className="h-4 w-4 text-yellow-500 fill-current" />
                                        <span className="ml-1 text-sm font-bold text-indigo-700">{pkg.rating}</span>
                                    </div>
                                </div>
                                <div className="flex justify-between items-center mt-6">
                                    <span className="text-2xl font-bold text-indigo-600">{pkg.price}</span>
                                    <button className="text-indigo-600 font-semibold hover:text-indigo-800 flex items-center">
                                        View Details <ArrowLeft className="h-4 w-4 ml-1 rotate-180" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Footer */}
            <footer className="bg-gray-900 text-white py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        <div>
                            <div className="flex items-center mb-4">
                                <Plane className="h-6 w-6 text-indigo-400" />
                                <span className="ml-2 text-xl font-bold">Wanderlust</span>
                            </div>
                            <p className="text-gray-400">Making your travel dreams a reality.</p>
                        </div>
                        <div>
                            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
                            <ul className="space-y-2 text-gray-400">
                                <li><a href="#" className="hover:text-white">About Us</a></li>
                                <li><a href="#" className="hover:text-white">Destinations</a></li>
                                <li><a href="#" className="hover:text-white">Packages</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-lg font-semibold mb-4">Support</h4>
                            <ul className="space-y-2 text-gray-400">
                                <li><a href="#" className="hover:text-white">Contact</a></li>
                                <li><a href="#" className="hover:text-white">FAQs</a></li>
                                <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-lg font-semibold mb-4">Newsletter</h4>
                            <div className="flex">
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="bg-gray-800 text-white px-4 py-2 rounded-l-md focus:outline-none focus:ring-1 focus:ring-indigo-500 w-full"
                                />
                                <button className="bg-indigo-600 px-4 py-2 rounded-r-md hover:bg-indigo-700">
                                    Subscribe
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
                        <p>&copy; 2025 Wanderlust Travels. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default TravelAgency;
