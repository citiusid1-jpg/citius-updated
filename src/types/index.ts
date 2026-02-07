export interface Event {
  id: string;
  name: string;
  group: 'A' | 'B' | 'C' | 'Other';
  category: 'Track' | 'Field' | 'Fun & Fitness' | 'Relay' | 'Special';
  gender: 'Boys' | 'Girls' | 'Mixed';
  description?: string;
}

export interface ScheduleItem {
  day: string;
  date: string;
  sessions: {
    time: string;
    events: string[];
  }[];
}
