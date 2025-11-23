import { useState } from 'react';
import { Lightbulb, Power, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const LightSwitch = () => {
    const [isOn, setIsOn] = useState(false);

    const toggleLight = () => {
        setIsOn(!isOn);
    };

    return (
        <div className={`min-h-screen transition-colors duration-500 flex flex-col ${isOn ? 'bg-yellow-50' : 'bg-gray-900'}`}>
            {/* Navigation */}
            <nav className={`p-4 ${isOn ? 'text-gray-900' : 'text-white'}`}>
                <div className="max-w-7xl mx-auto">
                    <Link to="/" className="flex items-center hover:opacity-75 transition-opacity inline-block">
                        <ArrowLeft className="h-5 w-5 mr-1" />
                        Back to Portfolio
                    </Link>
                </div>
            </nav>

            <div className="flex-grow flex flex-col items-center justify-center p-4">
                <div className="relative mb-12">
                    {/* Light Bulb */}
                    <div className={`transition-all duration-300 transform ${isOn ? 'scale-110 drop-shadow-[0_0_50px_rgba(250,204,21,0.6)]' : 'scale-100 opacity-50'}`}>
                        <Lightbulb
                            size={200}
                            className={`transition-colors duration-300 ${isOn ? 'text-yellow-400 fill-yellow-400' : 'text-gray-600'}`}
                            strokeWidth={1}
                        />
                    </div>

                    {/* Glow Effect */}
                    {isOn && (
                        <div className="absolute inset-0 bg-yellow-400 blur-3xl opacity-20 rounded-full animate-pulse"></div>
                    )}
                </div>

                {/* Switch */}
                <div className="bg-gray-200 p-2 rounded-full shadow-inner">
                    <button
                        onClick={toggleLight}
                        className={`
              relative w-24 h-12 rounded-full transition-colors duration-300 focus:outline-none shadow-lg
              ${isOn ? 'bg-green-500' : 'bg-red-500'}
            `}
                    >
                        <span className="sr-only">Toggle Light</span>
                        <span
                            className={`
                absolute top-1 left-1 bg-white w-10 h-10 rounded-full shadow-md transform transition-transform duration-300 flex items-center justify-center
                ${isOn ? 'translate-x-12' : 'translate-x-0'}
              `}
                        >
                            <Power size={20} className={isOn ? 'text-green-500' : 'text-red-500'} />
                        </span>
                    </button>
                </div>

                <div className={`mt-12 text-center ${isOn ? 'text-gray-800' : 'text-gray-300'}`}>
                    <h1 className="text-4xl font-bold mb-4">Interactive Light Switch</h1>
                    <p className="text-xl">Click the switch to toggle the light!</p>
                    <div className="mt-8 p-4 border rounded-lg inline-block backdrop-blur-sm bg-white/10">
                        <p className="font-mono text-sm">
                            State: <span className={isOn ? 'text-green-500 font-bold' : 'text-red-500 font-bold'}>{isOn ? 'ON' : 'OFF'}</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LightSwitch;
