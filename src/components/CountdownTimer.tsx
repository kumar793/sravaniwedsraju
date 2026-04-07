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
      <p className="text-center text-gold font-semibold text-xs tracking-[0.3em] mb-5 uppercase font-telugu">
        వివాహానికి మిగిలిన సమయం
      </p>
      <div className="grid grid-cols-4 gap-3 sm:gap-4">
        {units.map((u, i) => (
          <motion.div
            key={u.label}
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 + i * 0.1 }}
          >
            <div className="relative bg-primary rounded-xl p-3 sm:p-4 border-2 border-gold/40 shadow-[0_4px_15px_rgba(0,0,0,0.2),inset_0_1px_0_rgba(255,255,255,0.05)]">
              <div className="absolute inset-0 rounded-xl bg-gradient-to-b from-gold/5 to-transparent pointer-events-none" />
              <motion.span
                key={u.value}
                className="relative block text-gold font-bold text-2xl sm:text-4xl font-display"
                initial={{ y: -8, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                {String(u.value).padStart(2, "0")}
              </motion.span>
            </div>
            <p className="text-muted-foreground text-[10px] sm:text-xs mt-2 font-telugu font-medium">
              {u.label}
            </p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default CountdownTimer;
