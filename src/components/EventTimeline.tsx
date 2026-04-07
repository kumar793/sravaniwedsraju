import { motion } from "framer-motion";
import { Clock, Utensils, Heart } from "lucide-react";

const events = [
  {
    time: "సాయంత్రం 5:00",
    title: "అతిథుల ఆగమనం",
    desc: "స్వాగతం & ఆహ్వానం",
    icon: Heart,
  },
  {
    time: "రాత్రి 7:00",
    title: "విందు భోజనం",
    desc: "కళ్యాణవేదిక వద్ద",
    icon: Utensils,
  },
  {
    time: "రాత్రి 9:17",
    title: "శుభ ముహూర్తం",
    desc: "వివాహ వేడుక",
    icon: Clock,
  },
];

const EventTimeline = () => {
  return (
    <motion.div
      className="w-full max-w-md mx-auto"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.4 }}
    >
      <h3 className="text-center text-gold font-semibold text-sm tracking-[0.3em] mb-8 uppercase font-telugu">
        కార్యక్రమ సమయపట్టిక
      </h3>
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-gold/10 via-gold/40 to-gold/10" />

        <div className="space-y-5">
          {events.map((event, i) => (
            <motion.div
              key={event.title}
              className="flex gap-4 items-start"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 + i * 0.2 }}
            >
              <div className="relative z-10 w-12 h-12 rounded-full bg-primary flex items-center justify-center border-2 border-gold/50 shrink-0 shadow-[0_0_15px_rgba(200,160,60,0.2)]">
                <event.icon className="w-5 h-5 text-gold" />
              </div>
              <div className="flex-1 bg-cream/80 rounded-xl p-4 border border-gold/20 shadow-sm hover:shadow-md hover:border-gold/40 transition-all duration-300">
                <p className="text-gold text-[10px] font-bold tracking-[0.2em] uppercase">
                  {event.time}
                </p>
                <p className="text-maroon font-bold text-base font-telugu mt-1">
                  {event.title}
                </p>
                <p className="text-muted-foreground text-xs font-telugu mt-0.5">
                  {event.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default EventTimeline;
