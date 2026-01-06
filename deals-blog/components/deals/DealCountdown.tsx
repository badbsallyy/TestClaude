"use client";

import { useEffect, useState, useMemo } from "react";
import { Clock } from "lucide-react";

interface DealCountdownProps {
  expiryDate: string;
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

function calculateTimeLeft(expiryDate: string): TimeLeft | null {
  const difference = new Date(expiryDate).getTime() - new Date().getTime();

  if (difference <= 0) {
    return null;
  }

  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / 1000 / 60) % 60),
    seconds: Math.floor((difference / 1000) % 60),
  };
}

export function DealCountdown({ expiryDate }: DealCountdownProps) {
  // Initial calculation for SSR
  const initialTimeLeft = useMemo(() => calculateTimeLeft(expiryDate), [expiryDate]);
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(initialTimeLeft);

  useEffect(() => {
    // Update every second
    const timer = setInterval(() => {
      const newTimeLeft = calculateTimeLeft(expiryDate);
      setTimeLeft(newTimeLeft);
    }, 1000);

    return () => clearInterval(timer);
  }, [expiryDate]);

  const isExpired = timeLeft === null;

  if (isExpired) {
    return (
      <div className="flex items-center gap-2 text-red-500">
        <Clock className="w-5 h-5" />
        <span className="font-semibold">Deal abgelaufen</span>
      </div>
    );
  }

  return (
    <div className="bg-zinc-900 dark:bg-zinc-800 rounded-xl p-4">
      <div className="flex items-center gap-2 mb-3 text-gray-400">
        <Clock className="w-5 h-5" />
        <span className="text-sm">Angebot endet in:</span>
      </div>
      <div className="grid grid-cols-4 gap-2 text-center">
        <TimeBlock value={timeLeft.days} label="Tage" />
        <TimeBlock value={timeLeft.hours} label="Std" />
        <TimeBlock value={timeLeft.minutes} label="Min" />
        <TimeBlock value={timeLeft.seconds} label="Sek" />
      </div>
    </div>
  );
}

function TimeBlock({ value, label }: { value: number; label: string }) {
  return (
    <div className="bg-zinc-800 dark:bg-zinc-700 rounded-lg p-2">
      <div className="text-2xl font-bold text-white">
        {value.toString().padStart(2, "0")}
      </div>
      <div className="text-xs text-gray-400">{label}</div>
    </div>
  );
}
