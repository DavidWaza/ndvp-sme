"use client";
import React, { useEffect, useState } from "react";

interface CountdownProps {
  targetDate: Date;
}

const CountdownTimer: React.FC<CountdownProps> = ({ targetDate }) => {
  const calculateTimeLeft = () => {
    const difference = targetDate.getTime() - new Date().getTime();
    let timeLeft: any = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  const addLeadingZero = (value: number) => {
    return value < 10 ? `0${value}` : value;
  };

  return (
    <div className="grid lg:grid-cols-2">
    <div className="text-white grid grid-cols-4 items-center py-5 lg:justify-start justify-center">
      {timeLeft.days > 0 && (
        <p className="flex flex-col border rounded-full w-20 h-20 p-4 justify-center text-center font-bold text-xl items-center">
          {`${timeLeft.days}  `}{" "}
          <span className="!font-normal text-[14px]">days</span>
        </p>
      )}
      <p className="flex flex-col border rounded-full w-20 h-20 p-4 justify-center text-center font-bold text-xl items-center">
        {`${addLeadingZero(timeLeft.hours)}`}{" "}
        <span className="!font-normal text-[14px]">hours</span>
      </p>
      <p className="flex flex-col border rounded-full w-20 h-20 p-4 justify-center text-center font-bold text-xl items-center">
        {`${addLeadingZero(timeLeft.minutes)}`}{" "}
        <span className="!font-normal text-[14px]">Mins</span>{" "}
      </p>
      <p className="flex flex-col border rounded-full w-20 h-20 p-4 justify-center text-center font-bold text-xl items-center">
        {`${addLeadingZero(timeLeft.seconds)}`}
        <span className="!font-normal text-[14px]">seconds</span>
      </p>
    </div>
  </div>
  
  );
};

export default CountdownTimer;
