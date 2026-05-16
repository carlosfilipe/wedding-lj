
import { useEffect, useState } from "react";

export const useCountdown = (limitDate: Date) => {
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(limitDate));

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft(limitDate));
        }, 1000);

        return () => clearInterval(timer);
    }, [limitDate]);

    return { countDown: timeLeft };
};

type TimeLeft = {
    days: number;
    hour: number;
    minutes: number;
    seconds: number;
}

const calculateTimeLeft = (limitDate: Date): TimeLeft => {
    const now = new Date().getTime();
    const difference = limitDate.getTime() - now;

    const days = difference / 1000 / 60 / 60 / 24;
    const hour = (days - Math.floor(days)) * 24;
    const minutes = (hour - Math.floor(hour)) * 60;
    const seconds = (minutes - Math.floor(minutes)) * 60;

    return {
        days: Math.floor(days),
        hour: Math.floor(hour),
        minutes: Math.floor(minutes),
        seconds: Math.floor(seconds),
    };
};

const countDownWithTimePasted = (timeLeft: TimeLeft) => {
    return {
        days: Math.abs(timeLeft.days),
        hour: Math.abs(timeLeft.hour),
        minutes: Math.abs(timeLeft.minutes),
        seconds: Math.abs(timeLeft.seconds),
    };
}

