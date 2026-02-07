import { Trophy, Users, User } from 'lucide-react';
import { Event } from '../types';

interface EventCardProps {
  event: Event;
}

export default function EventCard({ event }: EventCardProps) {
  const getGenderColor = (gender: string) => {
    switch (gender) {
      case 'Boys':
        return 'bg-blue-100 text-blue-800';
      case 'Girls':
        return 'bg-pink-100 text-pink-800';
      case 'Mixed':
        return 'bg-purple-100 text-purple-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getGroupColor = (group: string) => {
    switch (group) {
      case 'A':
        return 'bg-green-100 text-green-800';
      case 'B':
        return 'bg-orange-100 text-orange-800';
      case 'C':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getIcon = () => {
    if (event.gender === 'Mixed') return Users;
    return User;
  };

  const Icon = getIcon();

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-5 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center space-x-2">
          <div className="p-2 bg-blue-50 rounded-lg">
            <Trophy className="text-blue-600" size={20} />
          </div>
          <h3 className="font-semibold text-gray-900">{event.name}</h3>
        </div>
      </div>

      <div className="flex flex-wrap gap-2">
        <span className={`px-3 py-1 rounded-full text-xs font-medium ${getGroupColor(event.group)}`}>
          Group {event.group}
        </span>
        <span className={`px-3 py-1 rounded-full text-xs font-medium ${getGenderColor(event.gender)}`}>
          <Icon size={12} className="inline mr-1 mb-0.5" />
          {event.gender}
        </span>
        <span className="px-3 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-700">
          {event.category}
        </span>
      </div>

      {event.description && (
        <p className="mt-3 text-sm text-gray-600">{event.description}</p>
      )}
    </div>
  );
}
