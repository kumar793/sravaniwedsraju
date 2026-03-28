import { motion } from "framer-motion";

interface EnvelopeProps {
  isOpen: boolean;
  onClick: () => void;
}

const Envelope = ({ isOpen, onClick }: EnvelopeProps) => {
  return (
    <motion.div
      className="relative cursor-pointer select-none"
      onClick={onClick}
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      style={{ perspective: 800 }}
    >
      {/* Envelope body */}
      <div className="relative w-[340px] h-[220px] sm:w-[420px] sm:h-[270px] mx-auto">
        {/* Back of envelope */}
        <div className="absolute inset-0 bg-primary rounded-lg ornate-border overflow-hidden">
          <div className="absolute inset-2 border border-gold/30 rounded" />
          {/* Decorative pattern */}
          <div className="absolute inset-0 opacity-10">
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className="absolute w-16 h-16 border border-gold/40 rounded-full"
                style={{
                  left: `${(i % 3) * 35 + 10}%`,
                  top: `${Math.floor(i / 3) * 50 + 15}%`,
                }}
              />
            ))}
          </div>
        </div>

        {/* Card peeking out (visible before open) */}
        {!isOpen && (
          <motion.div
            className="absolute left-[10%] right-[10%] -top-3 h-[40px] bg-cream rounded-t-lg border-2 border-gold/50 z-[1]"
            animate={{ y: [0, -4, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="flex items-center justify-center h-full">
              <span className="text-xs text-maroon font-telugu font-semibold tracking-wide">
                శ్రీరస్తు
              </span>
            </div>
          </motion.div>
        )}

        {/* Envelope flap */}
        <motion.div
          className="absolute inset-x-0 top-0 z-[2] origin-top"
          animate={isOpen ? { rotateX: 180 } : { rotateX: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          style={{ transformStyle: "preserve-3d" }}
        >
          {/* Front of flap */}
          <div
            className="absolute inset-x-0 top-0"
            style={{ backfaceVisibility: "hidden" }}
          >
            <svg viewBox="0 0 420 135" className="w-full" preserveAspectRatio="none">
              <defs>
                <linearGradient id="flapGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="hsl(0, 60%, 22%)" />
                  <stop offset="100%" stopColor="hsl(0, 72%, 35%)" />
                </linearGradient>
              </defs>
              <path d="M0,0 L210,135 L420,0 Z" fill="url(#flapGrad)" stroke="hsl(45,90%,55%)" strokeWidth="2" />
              <path d="M30,8 L210,115 L390,8" fill="none" stroke="hsl(45,90%,55%)" strokeWidth="0.5" opacity="0.4" />
            </svg>
          </div>
          {/* Back of flap */}
          <div
            className="absolute inset-x-0 top-0"
            style={{ backfaceVisibility: "hidden", transform: "rotateX(180deg)" }}
          >
            <svg viewBox="0 0 420 135" className="w-full" preserveAspectRatio="none">
              <path d="M0,0 L210,135 L420,0 Z" fill="hsl(0, 50%, 20%)" />
            </svg>
          </div>
        </motion.div>

        {/* Front face of envelope */}
        <div className="absolute inset-0 z-[3] pointer-events-none">
          <svg viewBox="0 0 420 270" className="w-full h-full" preserveAspectRatio="none">
            <path d="M0,0 L210,140 L420,0 L420,270 L0,270 Z" fill="hsl(0, 72%, 38%)" />
            <path d="M0,0 L210,140 L420,0" fill="none" stroke="hsl(45,90%,55%)" strokeWidth="1.5" />
            <path d="M15,15 L210,150 L405,15" fill="none" stroke="hsl(45,90%,55%)" strokeWidth="0.5" opacity="0.3" />
          </svg>
        </div>

        {/* Center seal */}
        <motion.div
          className="absolute z-[4] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
          animate={isOpen ? { scale: 0, opacity: 0 } : { scale: 1, opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full gold-gradient flex items-center justify-center shadow-lg">
            <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-primary flex items-center justify-center border-2 border-gold/60">
              <span className="text-gold font-cursive text-lg sm:text-2xl">వో</span>
            </div>
          </div>
        </motion.div>

        {/* "Click to open" text */}
        {!isOpen && (
          <motion.p
            className="absolute -bottom-10 left-0 right-0 text-center text-sm text-muted-foreground font-telugu"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            ✉ తెరవడానికి నొక్కండి
          </motion.p>
        )}
      </div>
    </motion.div>
  );
};

export default Envelope;
