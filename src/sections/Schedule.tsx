import { Calendar, Clock, CheckCircle } from 'lucide-react';
import { schedule } from '../data/schedule';

export default function Schedule() {
  return (
    <section id="schedule" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Event Schedule
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Three days of non-stop action from 13th to 15th February, 2026
          </p>
        </div>

        <div className="space-y-8">
          {schedule.map((day, dayIndex) => (
            <div
              key={dayIndex}
              className="bg-white rounded-2xl shadow-lg overflow-hidden border-t-4 border-blue-600"
            >
              <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="flex items-center space-x-3 mb-2">
                      <Calendar size={24} />
                      <h3 className="text-2xl font-bold">{day.day}</h3>
                    </div>
                    <p className="text-blue-100">{day.date}</p>
                  </div>
                  <div className="bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2">
                    <p className="text-sm text-blue-100">Sessions</p>
                    <p className="text-2xl font-bold">{day.sessions.length}</p>
                  </div>
                </div>
              </div>

              <div className="p-6 space-y-6">
                {day.sessions.map((session, sessionIndex) => (
                  <div key={sessionIndex} className="border-l-4 border-blue-200 pl-6 hover:border-blue-600 transition-colors">
                    <div className="flex items-center space-x-3 mb-4">
                      <Clock className="text-blue-600" size={20} />
                      <h4 className="text-xl font-semibold text-gray-900">{session.time}</h4>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {session.events.map((event, eventIndex) => (
                        <div
                          key={eventIndex}
                          className="flex items-start space-x-3 bg-gray-50 rounded-lg p-3 hover:bg-blue-50 transition-colors"
                        >
                          <CheckCircle className="text-green-500 flex-shrink-0 mt-0.5" size={18} />
                          <span className="text-gray-700">{event}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Important Timings</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <Clock className="mx-auto mb-3" size={32} />
              <p className="font-semibold mb-1">Morning Session</p>
              <p className="text-orange-100">7:00 AM - 12:00 PM</p>
            </div>
            <div>
              <Clock className="mx-auto mb-3" size={32} />
              <p className="font-semibold mb-1">Afternoon Session</p>
              <p className="text-orange-100">2:00 PM - 6:00 PM</p>
            </div>
            <div>
              <Calendar className="mx-auto mb-3" size={32} />
              <p className="font-semibold mb-1">Reporting Time</p>
              <p className="text-orange-100">30 minutes before event</p>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-r-lg">
          <p className="font-semibold text-yellow-900 mb-2">Note:</p>
          <p className="text-yellow-800">
            Schedule is subject to change based on weather conditions and participation.
            Please check notice boards and official announcements for real-time updates.
          </p>
        </div>
      </div>
    </section>
  );
}
