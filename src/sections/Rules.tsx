import { Shield, Users, Award, AlertCircle, CheckCircle2, Trophy } from 'lucide-react';

export default function Rules() {
  const generalRules = [
    {
      icon: Shield,
      title: 'Referee Decision',
      description: 'The decision of the referee is final and binding in all matters.',
    },
    {
      icon: CheckCircle2,
      title: 'On-Spot Entries',
      description: 'On-the-spot entries are allowed for events not mentioned in the registration form.',
    },
    {
      icon: Users,
      title: 'Minimum Participants',
      description: 'Events with less than 6 participants will be cancelled.',
    },
    {
      icon: Users,
      title: 'Team Events',
      description: 'Team events require a minimum of 4 teams to proceed.',
    },
    {
      icon: AlertCircle,
      title: 'ID Card Mandatory',
      description: 'Institute ID card is mandatory for all participants.',
    },
    {
      icon: CheckCircle2,
      title: 'Sports Kit',
      description: 'Proper sports kit is required for participation in all events.',
    },
  ];

  return (
    <section id="rules" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Rules & Guidelines
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Important rules and regulations for participation in CITIUS 2025-26
          </p>
        </div>

        <div className="mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            General Rules
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {generalRules.map((rule, index) => {
              const Icon = rule.icon;
              return (
                <div
                  key={index}
                  className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="p-3 bg-blue-100 rounded-lg">
                      <Icon className="text-blue-600" size={24} />
                    </div>
                    <h4 className="font-semibold text-gray-900">
                      {rule.title}
                    </h4>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    {rule.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8 border-t-4 border-green-600">
            <div className="flex items-center space-x-3 mb-6">
              <Award className="text-green-600" size={32} />
              <h3 className="text-2xl font-bold text-gray-900">
                Best Athlete Award
              </h3>
            </div>
            <ul className="space-y-3 text-gray-700">
              <li>• Only Group A (Track & Field) events are considered</li>
              <li>• Maximum 8 events can be participated per person</li>
              <li>• Best 5 performances will be counted for scoring</li>
              <li>• Separate awards for Boys and Girls categories</li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-yellow-50 to-orange-100 rounded-2xl p-8 border-t-4 border-yellow-600">
            <div className="flex items-center space-x-3 mb-6">
              <Trophy className="text-yellow-600" size={32} />
              <h3 className="text-2xl font-bold text-gray-900">
                Overall Championship
              </h3>
            </div>
            <ul className="space-y-3 text-gray-700">
              <li>• Trophy awarded to branch with maximum points</li>
              <li>• Points calculated across all event categories</li>
              <li>• Individual event Points: 1st Place: 5 points, 2nd Place: 3 points, 3rd Place: 1 point</li>
              <li>• Team event Points: 1st Place: 10 points, 2nd Place: 6 points, 3rd Place: 3 points</li>
              <li>• All participants contribute to their branch's score</li>
            </ul>
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 text-white">
          <h3 className="text-2xl font-bold mb-6 text-center">
            Participation Guidelines
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white/10 rounded-lg p-6">
              <h4 className="font-semibold text-lg mb-3">Eligibility</h4>
              <ul className="space-y-2 text-blue-100">
                <li>• B.Tech 1st year students (compulsory)</li>
                <li>• Valid institute ID required</li>
                {/* <li>• Medical fitness certificate recommended</li> */}
              </ul>
            </div>
            <div className="bg-white/10 rounded-lg p-6">
              <h4 className="font-semibold text-lg mb-3">Event Selection</h4>
              <ul className="space-y-2 text-blue-100">
                <li>• Maximum 3 events per student</li>
                {/* <li>• Choose wisely across categories</li> */}
                <li>• No changes after registration closes</li>
              </ul>
            </div>
            <div className="bg-white/10 rounded-lg p-6">
              <h4 className="font-semibold text-lg mb-3">Dress Code</h4>
              <ul className="space-y-2 text-blue-100">
                <li>• Proper sports attire mandatory</li>
                <li>• Appropriate sports shoes required</li>
                {/* <li>• Branch T-shirts recommended</li> */}
              </ul>
            </div>
            <div className="bg-white/10 rounded-lg p-6">
              <h4 className="font-semibold text-lg mb-3">Reporting Time</h4>
              <ul className="space-y-2 text-blue-100">
                <li>• Report 30 minutes before event</li>
                {/* <li>• Late arrivals may be disqualified</li> */}
                <li>• Check schedule daily for updates</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg">
          <div className="flex items-start space-x-3">
            <AlertCircle className="text-red-500 mt-1" size={24} />
            <div>
              <p className="font-semibold text-red-900 mb-2">
                Important Notice
              </p>
              <p className="text-red-800">
                Any form of malpractice, unsportsmanlike conduct, or violation of
                rules will lead to immediate disqualification. Maintain the
                spirit of sportsmanship throughout the event.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
