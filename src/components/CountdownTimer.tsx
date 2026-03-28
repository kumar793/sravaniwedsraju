import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const WEDDING_DATE = new Date("2026-04-08T21:17:00+05:30").getTime();

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft());

  function getTimeLeft() {
    const now = Date.now();
    const diff = WEDDING_DATE - now;
    if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((diff / (1000 * 60)) % 60),
      seconds: Math.floor((diff / 1000) % 60),
    };
  }

  useEffect(() => {
    const timer = setInterval(() => setTimeLeft(getTimeLeft()), 1000);
    return () => clearInterval(timer);
  }, []);

  const units = [
    { label: "రోజులు", value: timeLeft.days },
    { label: "గంటలు", value: timeLeft.hours },
    { label: "నిమిషాలు", value: timeLeft.minutes },
    { label: "సెకన్లు", value: timeLeft.seconds },
  ];

  return (
    <motion.div
      className="w-full max-w-md mx-auto"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 0.6 }}
    >
      <p className="text-center text-gold font-semibold text-xs tracking-[0.3em] mb-4 uppercase">
        వివాహానికి మిగిలిన సమయం
      </p>
      <div className="grid grid-cols-4 gap-2 sm:gap-4">
        {units.map((u) => (
          <div key={u.label} className="text-center">
            <div className="bg-primary/90 rounded-lg p-2 sm:p-3 ornate-border">
              <motion.span
                key={u.value}
                className="block text-gold font-bold text-2xl sm:text-3xl font-display"
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                {String(u.value).padStart(2, "0")}
              </motion.span>
            </div>
            <p className="text-muted-foreground text-[10px] sm:text-xs mt-1 font-telugu">
              {u.label}
            </p>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default CountdownTimer;
