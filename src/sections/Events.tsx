import { useState } from 'react';
import { Search, Filter } from 'lucide-react';
import { events } from '../data/events';
import EventCard from '../components/EventCard';

export default function Events() {
  const [selectedGroup, setSelectedGroup] = useState<string>('All');
  const [selectedGender, setSelectedGender] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredEvents = events.filter((event) => {
    const matchesGroup = selectedGroup === 'All' || event.group === selectedGroup;
    const matchesGender = selectedGender === 'All' || event.gender === selectedGender;
    const matchesSearch = event.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesGroup && matchesGender && matchesSearch;
  });

  const groupCounts = {
    All: events.length,
    A: events.filter((e) => e.group === 'A').length,
    B: events.filter((e) => e.group === 'B').length,
    C: events.filter((e) => e.group === 'C').length,
    Other: events.filter((e) => e.group === 'Other').length,
  };

  return (
    <section id="events" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Events
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore all events across Track & Field, Fun & Fitness, Relays, and Special categories
          </p>
        </div>

        <div className="mb-8 space-y-6">
          <div className="relative max-w-xl mx-auto">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search events..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
            />
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <div className="flex items-center space-x-2">
              <Filter size={20} className="text-gray-600" />
              <span className="font-semibold text-gray-700">Filter by Group:</span>
            </div>
            {Object.entries(groupCounts).map(([group, count]) => (
              <button
                key={group}
                onClick={() => setSelectedGroup(group)}
                className={`px-5 py-2 rounded-lg font-medium transition-all duration-300 ${
                  selectedGroup === group
                    ? 'bg-blue-600 text-white shadow-lg transform scale-105'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {group === 'All' ? 'All Events' : `Group ${group}`}
                <span className="ml-2 text-sm">({count})</span>
              </button>
            ))}
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <span className="font-semibold text-gray-700">Filter by Gender:</span>
            {['All', 'Boys', 'Girls', 'Mixed'].map((gender) => (
              <button
                key={gender}
                onClick={() => setSelectedGender(gender)}
                className={`px-5 py-2 rounded-lg font-medium transition-all duration-300 ${
                  selectedGender === gender
                    ? gender === 'Boys'
                      ? 'bg-blue-600 text-white shadow-lg'
                      : gender === 'Girls'
                      ? 'bg-pink-600 text-white shadow-lg'
                      : gender === 'Mixed'
                      ? 'bg-purple-600 text-white shadow-lg'
                      : 'bg-gray-800 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {gender}
              </button>
            ))}
          </div>
        </div>

        <div className="mb-8">
          <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg">
            <h4 className="font-semibold text-blue-900 mb-2">Event Categories</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-blue-800">
              <div>
                <span className="font-semibold">Group A:</span> Track & Field (Athletics)
              </div>
              <div>
                <span className="font-semibold">Group B:</span> Fun & Fitness Events
              </div>
              <div>
                <span className="font-semibold">Group C:</span> Relay Races
              </div>
              <div>
                <span className="font-semibold">Other:</span> Special & Guest Events
              </div>
            </div>
          </div>
        </div>

        {filteredEvents.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredEvents.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No events found matching your filters.</p>
          </div>
        )}

        <div className="mt-12 bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Participation Rules</h3>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start space-x-3">
              <span className="text-green-600 font-bold mt-1">•</span>
              <span>Students can participate in any <strong>3 events</strong> maximum</span>
            </li>
            <li className="flex items-start space-x-3">
              <span className="text-green-600 font-bold mt-1">•</span>
              <span>Best Athlete title considers only Group A events (maximum 8 events, best 5 counted)</span>
            </li>
            <li className="flex items-start space-x-3">
              <span className="text-green-600 font-bold mt-1">•</span>
              <span>Events with less than 6 participants will be cancelled</span>
            </li>
            <li className="flex items-start space-x-3">
              <span className="text-green-600 font-bold mt-1">•</span>
              <span>Team events require minimum 4 teams to proceed</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
