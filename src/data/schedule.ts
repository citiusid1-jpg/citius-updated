import { ScheduleItem } from '../types';

export const schedule: ScheduleItem[] = [
  {
    day: 'Day 1',
    date: '13th February, 2026',
    sessions: [
      {
        time: '7:00 AM - 12:00 PM',
        events: [
          'Opening Ceremony',
          '100m Sprint (Heats)',
          '200m Sprint (Heats)',
          'Long Jump',
          'Shot Put',
          'Javelin Throw',
          'Obstacle Race',
          'Sack Race'
        ]
      },
      {
        time: '2:00 PM - 6:00 PM',
        events: [
          '400m Sprint (Heats)',
          '800m Run',
          'High Jump',
          'Discus Throw',
          '3-Legged Race',
          'Slow Cycling',
          'Best Physique Competition'
        ]
      }
    ]
  },
  {
    day: 'Day 2',
    date: '14th February, 2026',
    sessions: [
      {
        time: '7:00 AM - 12:00 PM',
        events: [
          '100m Sprint (Finals)',
          '200m Sprint (Finals)',
          '1500m Run',
          'Triple Jump',
          'Hammer Throw',
          '110m/100m Hurdles',
          '3km Cycle Race',
          'Weight Lifting'
        ]
      },
      {
        time: '2:00 PM - 6:00 PM',
        events: [
          '400m Sprint (Finals)',
          '5000m Run',
          'Pole Vault',
          '400m Hurdles',
          'Chatti Race',
          'Tug of War (1st Year)',
          'Guest Events'
        ]
      }
    ]
  },
  {
    day: 'Day 3',
    date: '15th February, 2026',
    sessions: [
      {
        time: '7:00 AM - 12:00 PM',
        events: [
          '10000m Run',
          '4x100m Relay (Heats)',
          '4x400m Relay (Heats)',
          'Inter-Department Relay (Teaching)',
          'Inter-Department Relay (Non-Teaching)',
          'Children Race'
        ]
      },
      {
        time: '2:00 PM - 6:00 PM',
        events: [
          '4x100m Relay (Finals)',
          '4x400m Relay (Finals)',
          '4x100m Mixed Relay',
          'Tug of War (Teachers vs Captains)',
          'Closing Ceremony',
          'Prize Distribution'
        ]
      }
    ]
  }
];
