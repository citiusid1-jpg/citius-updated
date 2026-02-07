import { useEffect, useState } from 'react';

export default function CountdownTimer() {
  const targetDate = new Date('2026-02-13T07:00:00').getTime();
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        clearInterval(interval);
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <div className="grid grid-cols-4 gap-4 max-w-2xl mx-auto">
      {Object.entries(timeLeft).map(([key, value]) => (
        <div key={key} className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
          <div className="text-4xl md:text-5xl font-bold text-white mb-2">
            {value.toString().padStart(2, '0')}
          </div>
          <div className="text-sm md:text-base text-gray-200 capitalize">{key}</div>
        </div>
      ))}
    </div>
  );
}
