import { motion } from "framer-motion";
import { useMemo } from "react";

const FloatingPetals = () => {
  const petals = useMemo(
    () =>
      Array.from({ length: 15 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        delay: Math.random() * 5,
        duration: 6 + Math.random() * 6,
        size: 8 + Math.random() * 14,
        rotation: Math.random() * 360,
      })),
    []
  );

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {petals.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full opacity-20"
          style={{
            left: `${p.x}%`,
            top: -20,
            width: p.size,
            height: p.size * 0.7,
            background: `radial-gradient(ellipse, hsl(var(--gold) / 0.6), hsl(var(--primary) / 0.4))`,
            borderRadius: "50% 0 50% 0",
            rotate: `${p.rotation}deg`,
          }}
          animate={{
            y: ["0vh", "110vh"],
            x: [0, Math.sin(p.id) * 60],
            rotate: [p.rotation, p.rotation + 360],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
};

export default FloatingPetals;
