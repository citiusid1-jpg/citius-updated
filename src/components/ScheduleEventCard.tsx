import { Clock, Award, Users, MapPin } from 'lucide-react';
import { DetailedEvent } from '../data/detailedSchedule';

interface ScheduleEventCardProps {
  event: DetailedEvent;
  isHappeningNow?: boolean;
  isNext?: boolean;
}

export default function ScheduleEventCard({ event, isHappeningNow, isNext }: ScheduleEventCardProps) {
  const getGenderColor = (gender: string) => {
    switch (gender) {
      case 'Boys':
        return 'bg-blue-100 text-blue-800 border-blue-300';
      case 'Girls':
        return 'bg-pink-100 text-pink-800 border-pink-300';
      case 'Mixed':
        return 'bg-purple-100 text-purple-800 border-purple-300';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-300';
    }
  };

  const getRoundColor = (round?: string) => {
    switch (round) {
      case 'Final':
        return 'bg-yellow-100 text-yellow-900 border-yellow-400 font-bold';
      case 'Semifinal':
        return 'bg-orange-100 text-orange-800 border-orange-300';
      case 'Heat':
        return 'bg-green-100 text-green-800 border-green-300';
      case 'Qualifier':
        return 'bg-cyan-100 text-cyan-800 border-cyan-300';
      default:
        return 'bg-gray-100 text-gray-700 border-gray-300';
    }
  };

  const getCategoryIcon = (category?: string) => {
    switch (category) {
      case 'Track':
      case 'Field':
        return Award;
      case 'Relay':
        return Users;
      case 'Ceremony':
      case 'Special':
        return MapPin;
      default:
        return Award;
    }
  };

  const Icon = getCategoryIcon(event.category);

  return (
    <div
      className={`relative bg-white rounded-lg p-4 border-l-4 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 ${
        isHappeningNow
          ? 'border-red-500 shadow-lg ring-2 ring-red-200 animate-pulse'
          : isNext
          ? 'border-blue-500 shadow-md ring-1 ring-blue-200'
          : 'border-gray-300'
      }`}
    >
      {isHappeningNow && (
        <div className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg animate-bounce">
          LIVE NOW
        </div>
      )}
      {isNext && !isHappeningNow && (
        <div className="absolute -top-2 -right-2 bg-blue-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
          UP NEXT
        </div>
      )}

      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center space-x-3">
          <div className="flex items-center space-x-2 text-gray-900">
            <Clock size={18} className="text-blue-600" />
            <span className="font-bold text-lg">{event.time}</span>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <Icon size={16} className="text-gray-600" />
          {event.category && (
            <span className="text-xs text-gray-600 font-medium">{event.category}</span>
          )}
        </div>
      </div>

      <h4 className="font-semibold text-gray-900 mb-3 text-base">{event.name}</h4>

      <div className="flex flex-wrap gap-2">
        <span
          className={`px-3 py-1 rounded-full text-xs font-medium border ${getGenderColor(
            event.gender
          )}`}
        >
          {event.gender}
        </span>
        {event.round && (
          <span
            className={`px-3 py-1 rounded-full text-xs font-medium border ${getRoundColor(
              event.round
            )}`}
          >
            {event.round}
          </span>
        )}
      </div>
    </div>
  );
}
