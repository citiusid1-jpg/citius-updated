import { useState, useEffect, useMemo } from 'react';
import { Calendar, Clock, Search, Filter, ChevronDown, ChevronUp } from 'lucide-react';
import { detailedSchedule, DetailedEvent } from '../data/detailedSchedule';
import ScheduleEventCard from '../components/ScheduleEventCard';

export default function Schedule() {
  const [selectedDay, setSelectedDay] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedGender, setSelectedGender] = useState<string>('All');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [expandedSessions, setExpandedSessions] = useState<{ [key: string]: boolean }>({});
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const initialExpanded: { [key: string]: boolean } = {};
    detailedSchedule.forEach((day, dayIndex) => {
      day.sessions.forEach((_, sessionIndex) => {
        initialExpanded[`${dayIndex}-${sessionIndex}`] = true;
      });
    });
    setExpandedSessions(initialExpanded);
  }, []);

  const toggleSession = (dayIndex: number, sessionIndex: number) => {
    const key = `${dayIndex}-${sessionIndex}`;
    setExpandedSessions((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const getCurrentAndNextEvents = () => {
    const now = currentTime;
    const eventDate = new Date(detailedSchedule[selectedDay].date);

    if (
      now.getDate() !== eventDate.getDate() ||
      now.getMonth() !== eventDate.getMonth() ||
      now.getFullYear() !== eventDate.getFullYear()
    ) {
      return { currentEvent: null, nextEvent: null };
    }

    let allEvents: Array<{ event: DetailedEvent; sessionIndex: number }> = [];
    detailedSchedule[selectedDay].sessions.forEach((session, idx) => {
      session.events.forEach((event) => {
        allEvents.push({ event, sessionIndex: idx });
      });
    });

    allEvents.sort((a, b) => a.event.time.localeCompare(b.event.time));

    const currentHour = now.getHours();
    const currentMinute = now.getMinutes();
    const currentTimeStr = `${currentHour.toString().padStart(2, '0')}:${currentMinute
      .toString()
      .padStart(2, '0')}`;

    let currentEvent = null;
    let nextEvent = null;

    for (let i = 0; i < allEvents.length; i++) {
      const eventTime = allEvents[i].event.time;
      if (eventTime <= currentTimeStr && (i === allEvents.length - 1 || allEvents[i + 1].event.time > currentTimeStr)) {
        currentEvent = allEvents[i].event.id;
        if (i < allEvents.length - 1) {
          nextEvent = allEvents[i + 1].event.id;
        }
        break;
      }
    }

    return { currentEvent, nextEvent };
  };

  const { currentEvent, nextEvent } = getCurrentAndNextEvents();

  const filteredSessions = useMemo(() => {
    return detailedSchedule[selectedDay].sessions.map((session) => ({
      ...session,
      events: session.events.filter((event) => {
        const matchesSearch =
          searchQuery === '' ||
          event.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          event.category?.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesGender = selectedGender === 'All' || event.gender === selectedGender;
        const matchesCategory = selectedCategory === 'All' || event.category === selectedCategory;
        return matchesSearch && matchesGender && matchesCategory;
      }),
    }));
  }, [selectedDay, searchQuery, selectedGender, selectedCategory]);

  const categories = ['All', 'Track', 'Field', 'Relay', 'Fun & Fitness', 'Special', 'Ceremony'];
  const genders = ['All', 'Boys', 'Girls', 'Mixed'];

  const getTimeUntilNextEvent = () => {
    if (!nextEvent) return null;

    const now = new Date();
    const eventDate = new Date(detailedSchedule[selectedDay].date);

    let nextEventObj: DetailedEvent | null = null;
    detailedSchedule[selectedDay].sessions.forEach((session) => {
      const found = session.events.find((e) => e.id === nextEvent);
      if (found) nextEventObj = found;
    });

    if (!nextEventObj) return null;

    const [hours, minutes] = nextEventObj.time.split(':').map(Number);
    const eventTime = new Date(eventDate);
    eventTime.setHours(hours, minutes, 0, 0);

    const diff = eventTime.getTime() - now.getTime();
    if (diff <= 0) return null;

    const hoursLeft = Math.floor(diff / (1000 * 60 * 60));
    const minutesLeft = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));

    return { hours: hoursLeft, minutes: minutesLeft, eventName: nextEventObj.name };
  };

  const timeUntilNext = getTimeUntilNextEvent();

  return (
    <section id="schedule" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Event Schedule
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Complete timeline of all events across three days of competition
          </p>
        </div>

        {timeUntilNext && (
          <div className="mb-8 max-w-2xl mx-auto">
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl p-6 text-white text-center shadow-xl">
              <div className="flex items-center justify-center space-x-2 mb-2">
                <Clock className="animate-pulse" size={24} />
                <h3 className="text-xl font-bold">Next Event</h3>
              </div>
              <p className="text-2xl font-bold mb-2">{timeUntilNext.eventName}</p>
              <p className="text-blue-100">
                Starts in {timeUntilNext.hours}h {timeUntilNext.minutes}m
              </p>
            </div>
          </div>
        )}

        <div className="sticky top-20 z-40 bg-white rounded-xl shadow-lg mb-8 p-4">
          <div className="flex flex-wrap justify-center gap-3 mb-4">
            {detailedSchedule.map((day, index) => (
              <button
                key={index}
                onClick={() => setSelectedDay(index)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  selectedDay === index
                    ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg transform scale-105'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <div className="flex items-center space-x-2">
                  <Calendar size={18} />
                  <span>Day {index + 1}</span>
                </div>
                <div className="text-xs mt-1 opacity-90">
                  {new Date(day.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                </div>
              </button>
            ))}
          </div>

          <div className="border-t pt-4">
            <div className="relative mb-4">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search events..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
              />
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <div className="flex items-center space-x-2">
                <Filter size={18} className="text-gray-600" />
                <span className="text-sm font-semibold text-gray-700">Filters:</span>
              </div>

              <div className="flex flex-wrap gap-2">
                <span className="text-sm text-gray-600">Gender:</span>
                {genders.map((gender) => (
                  <button
                    key={gender}
                    onClick={() => setSelectedGender(gender)}
                    className={`px-3 py-1 rounded-full text-xs font-medium transition-all duration-300 ${
                      selectedGender === gender
                        ? gender === 'Boys'
                          ? 'bg-blue-600 text-white'
                          : gender === 'Girls'
                          ? 'bg-pink-600 text-white'
                          : gender === 'Mixed'
                          ? 'bg-purple-600 text-white'
                          : 'bg-gray-800 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {gender}
                  </button>
                ))}
              </div>

              <div className="flex flex-wrap gap-2">
                <span className="text-sm text-gray-600">Category:</span>
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-3 py-1 rounded-full text-xs font-medium transition-all duration-300 ${
                      selectedCategory === category
                        ? 'bg-green-600 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-6">
              <div className="flex items-center space-x-3">
                <Calendar size={28} />
                <div>
                  <h3 className="text-2xl font-bold">{detailedSchedule[selectedDay].day}</h3>
                  <p className="text-blue-100">
                    {new Date(detailedSchedule[selectedDay].date).toLocaleDateString('en-US', {
                      weekday: 'long',
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6 space-y-6">
              {filteredSessions.map((session, sessionIndex) => {
                const sessionKey = `${selectedDay}-${sessionIndex}`;
                const isExpanded = expandedSessions[sessionKey];

                return (
                  <div key={sessionIndex} className="border-l-4 border-blue-300 pl-6">
                    <button
                      onClick={() => toggleSession(selectedDay, sessionIndex)}
                      className="w-full flex items-center justify-between mb-4 hover:bg-blue-50 p-3 rounded-lg transition-colors"
                    >
                      <div className="flex items-center space-x-3">
                        <Clock className="text-blue-600" size={24} />
                        <div className="text-left">
                          <h4 className="text-xl font-semibold text-gray-900">{session.title}</h4>
                          <p className="text-sm text-gray-600">{session.timeRange}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <span className="text-sm text-gray-600 bg-blue-100 px-3 py-1 rounded-full font-medium">
                          {session.events.length} events
                        </span>
                        {isExpanded ? (
                          <ChevronUp className="text-gray-600" size={24} />
                        ) : (
                          <ChevronDown className="text-gray-600" size={24} />
                        )}
                      </div>
                    </button>

                    {isExpanded && (
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 animate-slide-up">
                        {session.events.map((event) => (
                          <ScheduleEventCard
                            key={event.id}
                            event={event}
                            isHappeningNow={event.id === currentEvent}
                            isNext={event.id === nextEvent}
                          />
                        ))}
                      </div>
                    )}

                    {isExpanded && session.events.length === 0 && (
                      <div className="text-center py-8 text-gray-500">
                        No events match your filters
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h4 className="font-semibold text-gray-900 mb-4 flex items-center space-x-2">
              <Filter className="text-blue-600" size={20} />
              <span>Legend - Gender</span>
            </h4>
            <div className="space-y-2">
              <div className="flex items-center space-x-3">
                <span className="px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800 border border-blue-300">
                  Boys
                </span>
                <span className="text-sm text-gray-700">Boys Category Events</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="px-3 py-1 rounded-full text-xs font-medium bg-pink-100 text-pink-800 border border-pink-300">
                  Girls
                </span>
                <span className="text-sm text-gray-700">Girls Category Events</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="px-3 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-800 border border-purple-300">
                  Mixed
                </span>
                <span className="text-sm text-gray-700">Mixed/Open Category Events</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6">
            <h4 className="font-semibold text-gray-900 mb-4 flex items-center space-x-2">
              <Filter className="text-blue-600" size={20} />
              <span>Legend - Rounds</span>
            </h4>
            <div className="space-y-2">
              <div className="flex items-center space-x-3">
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-yellow-100 text-yellow-900 border border-yellow-400">
                  Final
                </span>
                <span className="text-sm text-gray-700">Final Round / Championship</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="px-3 py-1 rounded-full text-xs font-medium bg-orange-100 text-orange-800 border border-orange-300">
                  Semifinal
                </span>
                <span className="text-sm text-gray-700">Semifinal Round</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800 border border-green-300">
                  Heat
                </span>
                <span className="text-sm text-gray-700">Qualifying Heat</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl p-6 text-white text-center">
          <h3 className="text-xl font-bold mb-3">Important Reminders</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <Clock className="mx-auto mb-2" size={24} />
              <p className="font-semibold mb-1">Reporting Time</p>
              <p className="text-orange-100">30 minutes before your event</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <Calendar className="mx-auto mb-2" size={24} />
              <p className="font-semibold mb-1">Check Daily</p>
              <p className="text-orange-100">Schedule may be updated</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <Filter className="mx-auto mb-2" size={24} />
              <p className="font-semibold mb-1">ID Required</p>
              <p className="text-orange-100">Bring your institute ID</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
