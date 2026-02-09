import { Award, Users, Zap, FileText, Trophy } from 'lucide-react';

export default function About() {
  const handleBrochureClick = () => {
    window.open('https://example.com/citius-2025-26-brochure.pdf', '_blank');
  };

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            About CITIUS
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
        </div>

        <div className="space-y-8 mb-12 animate-fade-in">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-8">The Event</h3>

          <p className="text-base sm:text-lg text-gray-700 leading-relaxed sm:leading-[1.875] justify">
            CITIUS is the annual athletics meet of the National Institute of Technology, Kurukshetra, organized by the Physical Education & Sports Section. This three-day sporting extravaganza brings together the brightest young talents from across all branches to compete, celebrate, and showcase their athletic prowess. The event stands as a testament to the institute's commitment to fostering holistic development and recognizing the importance of physical fitness alongside academic excellence.
          </p>

          <p className="text-base sm:text-lg text-gray-700 leading-relaxed sm:leading-[1.875] justify">
            From track and field events to fun competitions, CITIUS offers something for everyone. It's not just about winning; it's about participation, sportsmanship, and the joy of being part of something bigger than yourself. Whether you're a sprinter, a field athlete, or someone who loves fun events, there's a place for you at CITIUS. The meet celebrates diversity, encourages healthy competition, and creates memories that last a lifetime.
          </p>

          <div className="bg-blue-50 border-l-4 border-blue-600 p-6 sm:p-8 rounded-r-lg">
            <p className="text-blue-900 font-semibold mb-3 text-lg">Mandatory Participation</p>
            <p className="text-blue-800 text-base sm:text-lg leading-relaxed justify">
              All students must participate in CITIUS. This is an excellent opportunity to represent your branch, showcase your talents, and build lasting memories with your peers. Your involvement makes CITIUS a true celebration of athletic talent across the institute.
            </p>
          </div>
        </div>

        <div className="flex justify-center mb-16 animate-fade-in">
          <button
            onClick={handleBrochureClick}
            className="inline-flex items-center space-x-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg font-semibold text-lg hover:from-blue-700 hover:to-blue-800 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <FileText size={24} />
            <span>View Official CITIUS Brochure</span>
          </button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16 animate-fade-in">
          <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-xl p-6 text-white text-center hover:shadow-lg transition-shadow duration-300">
            <Award className="mx-auto mb-3" size={32} />
            <p className="text-3xl font-bold mb-1">3</p>
            <p className="text-green-100 text-sm sm:text-base">Event Groups</p>
          </div>
          <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl p-6 text-white text-center hover:shadow-lg transition-shadow duration-300">
            <Users className="mx-auto mb-3" size={32} />
            <p className="text-3xl font-bold mb-1">1000+</p>
            <p className="text-orange-100 text-sm sm:text-base">Participants</p>
          </div>
          <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl p-6 text-white text-center hover:shadow-lg transition-shadow duration-300">
            <Trophy className="mx-auto mb-3" size={32} />
            <p className="text-3xl font-bold mb-1">50+</p>
            <p className="text-blue-100 text-sm sm:text-base">Events</p>
          </div>
          <div className="bg-gradient-to-br from-red-500 to-red-600 rounded-xl p-6 text-white text-center hover:shadow-lg transition-shadow duration-300">
            <Zap className="mx-auto mb-3" size={32} />
            <p className="text-3xl font-bold mb-1">3</p>
            <p className="text-red-100 text-sm sm:text-base">Action Days</p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 md:p-12 text-white text-center animate-fade-in">
          <h3 className="text-3xl font-bold mb-4">Organized By</h3>
          <p className="text-xl mb-2">Physical Education & Sports Section</p>
          <p className="text-lg text-blue-100">National Institute of Technology, Kurukshetra</p>
        </div>
      </div>
    </section>
  );
}
