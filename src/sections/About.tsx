import { Award, Target, Users, Zap } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            About CITIUS
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">The Event</h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              CITIUS is the annual athletics meet of the National Institute of Technology, Kurukshetra,
              organized by the Physical Education & Sports Section. This three-day sporting extravaganza
              brings together the brightest young talents from across all branches to compete, celebrate,
              and showcase their athletic prowess.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              From track and field events to fun competitions, CITIUS offers something for everyone.
              It's not just about winning; it's about participation, sportsmanship, and the joy of
              being part of something bigger than yourself.
            </p>
            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg">
              <p className="text-blue-900 font-semibold mb-2">Mandatory Participation</p>
              <p className="text-blue-800">
                All students must participate in CITIUS. This is an excellent
                opportunity to represent your branch and build lasting memories!
              </p>
            </div>
          </div>

          <div className="space-y-6">
            {/* <div className="bg-white rounded-xl shadow-lg p-8 border-t-4 border-blue-600">
              <div className="flex items-center space-x-4 mb-6">
                <div className="p-3 bg-blue-100 rounded-lg">
                  <Target className="text-blue-600" size={32} />
                </div>
                <h4 className="text-2xl font-bold text-gray-900">Our Vision</h4>
              </div>
              <p className="text-gray-700 leading-relaxed">
                To foster a culture of physical fitness, sportsmanship, and competitive spirit
                among students while providing a platform to discover and nurture athletic talent.
              </p>
            </div> */}

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-xl p-6 text-white">
                <Award className="mb-3" size={32} />
                <p className="text-3xl font-bold mb-1">3</p>
                <p className="text-green-100">Event Groups</p>
              </div>
              <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl p-6 text-white">
                <Users className="mb-3" size={32} />
                <p className="text-3xl font-bold mb-1">1000+</p>
                <p className="text-orange-100">Participants</p>
              </div>
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl p-6 text-white">
                <Trophy className="mb-3" size={32} />
                <p className="text-3xl font-bold mb-1">50+</p>
                <p className="text-blue-100">Events</p>
              </div>
              <div className="bg-gradient-to-br from-red-500 to-red-600 rounded-xl p-6 text-white">
                <Zap className="mb-3" size={32} />
                <p className="text-3xl font-bold mb-1">3</p>
                <p className="text-red-100">Action Days</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 md:p-12 text-white text-center">
          <h3 className="text-3xl font-bold mb-4">Organized By</h3>
          <p className="text-xl mb-2">Physical Education & Sports Section</p>
          <p className="text-lg text-blue-100">National Institute of Technology, Kurukshetra</p>
          {/* <p className="text-blue-200 mt-4">Established as REC Kurukshetra in 1963, became NIT in 2002</p> */}
        </div>
      </div>
    </section>
  );
}

function Trophy(props: { className?: string; size?: number }) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width={props.size || 24}
      height={props.size || 24}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={props.className}
    >
      <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
      <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
      <path d="M4 22h16" />
      <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
      <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
      <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
    </svg>
  );
}
