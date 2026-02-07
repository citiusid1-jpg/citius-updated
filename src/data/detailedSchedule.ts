export interface DetailedEvent {
  id: string;
  time: string;
  name: string;
  gender: 'Boys' | 'Girls' | 'Mixed';
  round?: 'Heat' | 'Semifinal' | 'Final' | 'Qualifier';
  category?: string;
  venue?: string;
}

export interface DetailedSession {
  title: string;
  timeRange: string;
  events: DetailedEvent[];
}

export interface DetailedScheduleDay {
  date: string;
  day: string;
  sessions: DetailedSession[];
}

export const detailedSchedule: DetailedScheduleDay[] = [
  {
    date: '2026-02-13',
    day: 'Day 1 - 13th February, 2026',
    sessions: [
      {
        title: 'Morning Session',
        timeRange: '7:00 AM - 12:00 PM',
        events: [
          { id: 'e1', time: '7:00', name: 'Opening Ceremony', gender: 'Mixed', category: 'Ceremony' },
          { id: 'e2', time: '7:30', name: '100m Sprint', gender: 'Boys', round: 'Heat', category: 'Track' },
          { id: 'e3', time: '7:45', name: '100m Sprint', gender: 'Girls', round: 'Heat', category: 'Track' },
          { id: 'e4', time: '8:15', name: '4x100m Relay', gender: 'Boys', round: 'Heat', category: 'Relay' },
          { id: 'e5', time: '8:30', name: '4x100m Relay', gender: 'Girls', round: 'Heat', category: 'Relay' },
          { id: 'e6', time: '9:00', name: 'Long Jump', gender: 'Boys', round: 'Final', category: 'Field' },
          { id: 'e7', time: '9:00', name: 'Shot Put', gender: 'Girls', round: 'Final', category: 'Field' },
          { id: 'e8', time: '10:00', name: 'Tug of War (1st Year)', gender: 'Boys', category: 'Fun & Fitness' },
          { id: 'e9', time: '10:30', name: 'Obstacle Race', gender: 'Boys', category: 'Fun & Fitness' },
          { id: 'e10', time: '11:00', name: 'Obstacle Race', gender: 'Girls', category: 'Fun & Fitness' },
          { id: 'e11', time: '11:30', name: 'Sack Race', gender: 'Boys', category: 'Fun & Fitness' },
          { id: 'e12', time: '11:45', name: 'Sack Race', gender: 'Girls', category: 'Fun & Fitness' },
        ],
      },
      {
        title: 'Evening Session',
        timeRange: '2:00 PM - 6:00 PM',
        events: [
          { id: 'e13', time: '14:00', name: '100m Sprint', gender: 'Boys', round: 'Final', category: 'Track' },
          { id: 'e14', time: '14:15', name: '100m Sprint', gender: 'Girls', round: 'Final', category: 'Track' },
          { id: 'e15', time: '14:30', name: '800m Run', gender: 'Boys', round: 'Final', category: 'Track' },
          { id: 'e16', time: '14:45', name: '800m Run', gender: 'Girls', round: 'Final', category: 'Track' },
          { id: 'e17', time: '15:00', name: '3-Legged Race', gender: 'Boys', category: 'Fun & Fitness' },
          { id: 'e18', time: '15:15', name: 'Chatti Race', gender: 'Girls', category: 'Fun & Fitness' },
          { id: 'e19', time: '15:30', name: 'Shot Put', gender: 'Boys', round: 'Final', category: 'Field' },
          { id: 'e20', time: '15:30', name: 'Long Jump', gender: 'Girls', round: 'Final', category: 'Field' },
          { id: 'e21', time: '16:30', name: '4x400m Relay', gender: 'Boys', round: 'Heat', category: 'Relay' },
          { id: 'e22', time: '16:45', name: '4x400m Relay', gender: 'Girls', round: 'Heat', category: 'Relay' },
        ],
      },
    ],
  },
  {
    date: '2026-02-14',
    day: 'Day 2 - 14th February, 2026',
    sessions: [
      {
        title: 'Morning Session',
        timeRange: '7:00 AM - 12:00 PM',
        events: [
          { id: 'e23', time: '7:00', name: '110m Hurdles', gender: 'Boys', round: 'Heat', category: 'Track' },
          { id: 'e24', time: '7:15', name: '100m Hurdles', gender: 'Girls', round: 'Heat', category: 'Track' },
          { id: 'e25', time: '7:45', name: '200m Sprint', gender: 'Boys', round: 'Heat', category: 'Track' },
          { id: 'e26', time: '8:00', name: '200m Sprint', gender: 'Girls', round: 'Heat', category: 'Track' },
          { id: 'e27', time: '8:30', name: 'Discus Throw', gender: 'Boys', round: 'Final', category: 'Field' },
          { id: 'e28', time: '8:30', name: 'High Jump', gender: 'Girls', round: 'Final', category: 'Field' },
          { id: 'e29', time: '9:30', name: 'Triple Jump', gender: 'Boys', round: 'Final', category: 'Field' },
          { id: 'e30', time: '10:00', name: '1500m Run', gender: 'Boys', round: 'Final', category: 'Track' },
          { id: 'e31', time: '10:15', name: '1500m Run', gender: 'Girls', round: 'Final', category: 'Track' },
          { id: 'e32', time: '10:45', name: 'Best Physique', gender: 'Boys', category: 'Fun & Fitness' },
          { id: 'e33', time: '11:15', name: '400m Sprint', gender: 'Boys', round: 'Heat', category: 'Track' },
          { id: 'e34', time: '11:30', name: '400m Sprint', gender: 'Girls', round: 'Heat', category: 'Track' },
        ],
      },
      {
        title: 'Evening Session',
        timeRange: '2:00 PM - 6:00 PM',
        events: [
          { id: 'e35', time: '14:00', name: '110m Hurdles', gender: 'Boys', round: 'Final', category: 'Track' },
          { id: 'e36', time: '14:15', name: '100m Hurdles', gender: 'Girls', round: 'Final', category: 'Track' },
          { id: 'e37', time: '14:30', name: 'Triple Jump', gender: 'Girls', round: 'Final', category: 'Field' },
          { id: 'e38', time: '14:30', name: 'Hammer Throw', gender: 'Boys', round: 'Final', category: 'Field' },
          { id: 'e39', time: '15:00', name: '3km Cycle Race', gender: 'Boys', category: 'Fun & Fitness' },
          { id: 'e40', time: '15:20', name: '3km Cycle Race', gender: 'Girls', category: 'Fun & Fitness' },
          { id: 'e41', time: '15:45', name: 'Slow Cycling', gender: 'Boys', category: 'Fun & Fitness' },
          { id: 'e42', time: '16:00', name: 'Slow Cycling', gender: 'Girls', category: 'Fun & Fitness' },
          { id: 'e43', time: '16:15', name: 'Weight Lifting', gender: 'Boys', category: 'Fun & Fitness' },
          { id: 'e44', time: '16:30', name: 'Weight Lifting', gender: 'Girls', category: 'Fun & Fitness' },
          { id: 'e45', time: '17:00', name: '5000m Run', gender: 'Boys', round: 'Final', category: 'Track' },
        ],
      },
    ],
  },
  {
    date: '2026-02-15',
    day: 'Day 3 - 15th February, 2026',
    sessions: [
      {
        title: 'Morning Session',
        timeRange: '7:00 AM - 12:00 PM',
        events: [
          { id: 'e46', time: '7:00', name: '400m Hurdles', gender: 'Boys', round: 'Heat', category: 'Track' },
          { id: 'e47', time: '7:15', name: '400m Hurdles', gender: 'Girls', round: 'Heat', category: 'Track' },
          { id: 'e48', time: '7:45', name: '4x100m Relay', gender: 'Boys', round: 'Final', category: 'Relay' },
          { id: 'e49', time: '8:00', name: '4x100m Relay', gender: 'Girls', round: 'Final', category: 'Relay' },
          { id: 'e50', time: '8:30', name: 'Long Jump', gender: 'Boys', round: 'Final', category: 'Field' },
          { id: 'e51', time: '8:30', name: 'Discus Throw', gender: 'Girls', round: 'Final', category: 'Field' },
          { id: 'e52', time: '9:30', name: 'Javelin Throw', gender: 'Boys', round: 'Final', category: 'Field' },
          { id: 'e53', time: '9:30', name: 'Javelin Throw', gender: 'Girls', round: 'Final', category: 'Field' },
          { id: 'e54', time: '10:00', name: '400m Sprint', gender: 'Boys', round: 'Final', category: 'Track' },
          { id: 'e55', time: '10:15', name: '400m Sprint', gender: 'Girls', round: 'Final', category: 'Track' },
          { id: 'e56', time: '10:45', name: 'Pole Vault', gender: 'Boys', round: 'Final', category: 'Field' },
          { id: 'e57', time: '11:00', name: 'Children Race (U-14)', gender: 'Mixed', category: 'Special' },
          { id: 'e58', time: '11:15', name: 'Children Race (U-10)', gender: 'Mixed', category: 'Special' },
          { id: 'e59', time: '11:30', name: '10000m Run', gender: 'Boys', round: 'Final', category: 'Track' },
        ],
      },
      {
        title: 'Evening Session',
        timeRange: '2:00 PM - 6:00 PM',
        events: [
          { id: 'e60', time: '14:00', name: '400m Hurdles', gender: 'Boys', round: 'Final', category: 'Track' },
          { id: 'e61', time: '14:15', name: '400m Hurdles', gender: 'Girls', round: 'Final', category: 'Track' },
          { id: 'e62', time: '14:30', name: '200m Sprint', gender: 'Boys', round: 'Final', category: 'Track' },
          { id: 'e63', time: '14:45', name: '200m Sprint', gender: 'Girls', round: 'Final', category: 'Track' },
          { id: 'e64', time: '15:00', name: 'High Jump', gender: 'Boys', round: 'Final', category: 'Field' },
          { id: 'e65', time: '15:00', name: 'Hammer Throw', gender: 'Girls', round: 'Final', category: 'Field' },
          { id: 'e66', time: '15:30', name: '4x400m Relay', gender: 'Boys', round: 'Final', category: 'Relay' },
          { id: 'e67', time: '15:45', name: '4x400m Relay', gender: 'Girls', round: 'Final', category: 'Relay' },
          { id: 'e68', time: '16:00', name: '4x100m Mixed Relay', gender: 'Mixed', round: 'Final', category: 'Relay' },
          { id: 'e69', time: '16:15', name: 'Inter-Department Relay (Teaching)', gender: 'Mixed', category: 'Special' },
          { id: 'e70', time: '16:30', name: 'Inter-Department Relay (Non-Teaching)', gender: 'Mixed', category: 'Special' },
          { id: 'e71', time: '16:45', name: 'Spoon Race (Guest Event)', gender: 'Mixed', category: 'Special' },
          { id: 'e72', time: '17:00', name: 'Tug of War (Teachers vs Captains)', gender: 'Mixed', category: 'Special' },
          { id: 'e73', time: '17:30', name: 'Closing Ceremony', gender: 'Mixed', category: 'Ceremony' },
          { id: 'e74', time: '18:00', name: 'Prize Distribution', gender: 'Mixed', category: 'Ceremony' },
        ],
      },
    ],
  },
];
