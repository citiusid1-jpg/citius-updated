import { Calendar, MapPin, Trophy, ArrowDown } from 'lucide-react';
import CountdownTimer from '../components/CountdownTimer';
import nitkkrLogo from '../data/cititus-logo.png';
import backGround  from '../data/DSC_9634.jpg';
export default function Hero() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${backGround})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'brightness(0.4)',
        }}
      />

      <div className="absolute inset-0 bg-gradient-to-b from-blue-900/50 to-blue-900/70 z-0" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <div className="mb-8 animate-fade-in">
              <img
        src={nitkkrLogo}
        alt="NIT Kurukshetra"
        className="h-24 w-24 mx-auto mb-6 bg-white rounded-full p-2 shadow-2xl object-contain"
      />

          <h1 className="text-6xl md:text-8xl font-bold text-white mb-4 tracking-tight">
            CITIUS
          </h1>
          <p className="text-2xl md:text-3xl text-gray-200 font-light mb-2">2025-26</p>
          <p className="text-xl text-gray-300 mb-8">JOSH JAZBA JUNOON</p>
          <div className="flex flex-wrap items-center justify-center gap-6 text-gray-200">
            <div className="flex items-center space-x-2">
              <Calendar size={20} />
              <span className="text-lg">13-15 February, 2026</span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin size={20} />
              <span className="text-lg">Sports Complex, NIT Kurukshetra</span>
            </div>
          </div>
        </div>

        <div className="mb-12">
          <CountdownTimer />
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <button
            onClick={() => scrollToSection('#registration')}
            className="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg font-semibold text-lg hover:from-blue-700 hover:to-blue-800 transform hover:scale-105 transition-all duration-300 shadow-xl"
          >
            Register Now
          </button>
          <button
            onClick={() => scrollToSection('#events')}
            className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white border-2 border-white rounded-lg font-semibold text-lg hover:bg-white/20 transition-all duration-300"
          >
            View Events
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-white">
            <Trophy className="mx-auto mb-4 text-yellow-400" size={40} />
            <h3 className="text-2xl font-bold mb-2">50+</h3>
            <p className="text-gray-200">Events Across Categories</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-white">
            <Calendar className="mx-auto mb-4 text-green-400" size={40} />
            <h3 className="text-2xl font-bold mb-2">3 Days</h3>
            <p className="text-gray-200">Of Thrilling Competition</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-white">
            <MapPin className="mx-auto mb-4 text-red-400" size={40} />
            <h3 className="text-2xl font-bold mb-2">Sports Complex</h3>
            <p className="text-gray-200">National Level Facilities</p>
          </div>
        </div>

        <button
          onClick={() => scrollToSection('#about')}
          className="mt-12 animate-bounce text-white hover:text-blue-300 transition-colors"
        >
          <ArrowDown size={32} />
        </button>
      </div>
    </section>
  );
}
