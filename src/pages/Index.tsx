import { useState, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Envelope from "@/components/Envelope";
import InvitationCard from "@/components/InvitationCard";
import FloatingPetals from "@/components/FloatingPetals";
import CountdownTimer from "@/components/CountdownTimer";
import VenueMap from "@/components/VenueMap";
import EventTimeline from "@/components/EventTimeline";
import ContactSection from "@/components/ContactSection";
import weddingMotif from "@/assets/wedding-motif.png";
import { Heart, MapPin, Clock, Phone, ChevronDown } from "lucide-react";

const navItems = [
  { id: "invitation", label: "ఆహ్వానం", icon: Heart },
  { id: "timeline", label: "కార్యక్రమం", icon: Clock },
  { id: "venue", label: "వేదిక", icon: MapPin },
  { id: "contact", label: "సంప్రదించు", icon: Phone },
];

const SectionDivider = ({ symbol = "✦" }: { symbol?: string }) => (
  <div className="flex items-center gap-4 max-w-xs mx-auto my-2">
    <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
    <span className="text-gold text-sm opacity-60">{symbol}</span>
    <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
  </div>
);

const Index = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("invitation");
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    sectionRefs.current[id]?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="min-h-screen bg-background relative overflow-x-hidden">
      <FloatingPetals />

      <AnimatePresence mode="wait">
        {!isOpen ? (
          <motion.div
            key="envelope-landing"
            className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-10"
            exit={{ y: -200, opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.5 }}
          >
            {/* Radial glow behind motif */}
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full bg-gold/5 blur-3xl pointer-events-none" />

            {/* Om Motif */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="mb-5"
            >
              <div className="relative">
                <div className="absolute inset-0 rounded-full bg-gold/10 blur-xl scale-150" />
                <img
                  src={weddingMotif}
                  alt="శుభం"
                  width={512}
                  height={512}
                  className="relative w-28 h-28 sm:w-36 sm:h-36 object-contain drop-shadow-[0_4px_20px_rgba(200,160,60,0.3)]"
                />
              </div>
            </motion.div>

            {/* Blessing text */}
            <motion.p
              className="text-gold text-[11px] sm:text-base font-telugu font-semibold tracking-[0.15em] sm:tracking-[0.2em] mb-3 whitespace-nowrap"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              శ్రీరస్తు &nbsp;|&nbsp; శుభమస్తు &nbsp;|&nbsp; అవిఘ్నమస్తు
            </motion.p>

            {/* Decorative line */}
            <motion.div
              className="flex items-center gap-3 w-56 sm:w-72 mb-4"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gold/60 to-transparent" />
              <span className="text-gold text-xs">✦</span>
              <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gold/60 to-transparent" />
            </motion.div>

            {/* Title */}
            <motion.div
              className="text-center mb-3"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <p className="text-gold font-cursive text-4xl sm:text-6xl mb-2 drop-shadow-[0_2px_10px_rgba(200,160,60,0.3)]">
                Wedding Invitation
              </p>
              <h1 className="text-maroon font-telugu font-bold text-xl sm:text-3xl drop-shadow-sm">
                వోలేటి వారి వివాహ ఆహ్వాన పత్రిక
              </h1>
            </motion.div>

            {/* Decorative line */}
            <motion.div
              className="flex items-center gap-3 w-56 sm:w-72 mb-4"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.7, duration: 0.8 }}
            >
              <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gold/60 to-transparent" />
              <span className="text-gold text-xs">❖</span>
              <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gold/60 to-transparent" />
            </motion.div>

            {/* Bride & Groom names */}
            <motion.div
              className="text-center my-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
            >
              <div className="flex items-center justify-center gap-4 sm:gap-6">
                <div className="text-center">
                  <p className="text-maroon font-bold text-lg sm:text-2xl font-telugu">దేవి శ్రావణి</p>
                  <p className="text-gold/60 text-[10px] font-telugu mt-0.5">వధువు</p>
                </div>
                <motion.div
                  className="w-11 h-11 sm:w-14 sm:h-14 rounded-full gold-gradient flex items-center justify-center shadow-[0_0_20px_rgba(200,160,60,0.3)]"
                  animate={{ scale: [1, 1.08, 1] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                  <Heart className="w-5 h-5 sm:w-6 sm:h-6 text-primary" fill="hsl(var(--primary))" />
                </motion.div>
                <div className="text-center">
                  <p className="text-maroon font-bold text-lg sm:text-2xl font-telugu">నాగ కామరాజు</p>
                  <p className="text-gold/60 text-[10px] font-telugu mt-0.5">వరుడు</p>
                </div>
              </div>
              <p className="text-muted-foreground text-sm mt-4 font-telugu">
                8 ఏప్రిల్ 2026, బుధవారం
              </p>
            </motion.div>

            {/* Countdown on landing */}
            <motion.div
              className="my-6 w-full max-w-sm"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1 }}
            >
              <CountdownTimer />
            </motion.div>

            {/* Envelope */}
            <Envelope isOpen={false} onClick={() => setIsOpen(true)} />

            {/* Scroll hint */}
            <motion.div
              className="mt-12"
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ChevronDown className="w-5 h-5 text-gold/50" />
            </motion.div>
          </motion.div>
        ) : (
          <motion.div
            key="wedding-app"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="relative z-10"
          >
            {/* Sticky Navigation */}
            <nav className="sticky top-0 z-50 bg-primary/95 backdrop-blur-md border-b border-gold/20 shadow-[0_4px_20px_rgba(0,0,0,0.3)]">
              <div className="flex items-center justify-center gap-1 sm:gap-2 px-2 py-2.5 max-w-2xl mx-auto overflow-x-auto">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`flex items-center gap-1.5 px-3 sm:px-4 py-2 rounded-full text-[10px] sm:text-xs font-semibold transition-all whitespace-nowrap ${
                      activeSection === item.id
                        ? "bg-gold/20 text-gold shadow-inner"
                        : "text-gold/60 hover:text-gold hover:bg-gold/10"
                    }`}
                  >
                    <item.icon className="w-3 h-3" />
                    {item.label}
                  </button>
                ))}
              </div>
            </nav>

            {/* Back to envelope */}
            <div className="text-center py-4">
              <button
                onClick={() => setIsOpen(false)}
                className="text-gold/70 text-xs hover:text-gold transition-colors font-telugu inline-flex items-center gap-1"
              >
                ✉ ఎన్వలప్ కు తిరిగి వెళ్ళు
              </button>
            </div>

            <div className="px-4 pb-20 space-y-6 max-w-2xl mx-auto">
              {/* Section: Invitation */}
              <section ref={(el) => { sectionRefs.current["invitation"] = el; }} id="invitation">
                <InvitationCard />
              </section>

              <SectionDivider symbol="❖" />

              {/* Section: Countdown */}
              <section className="py-4">
                <CountdownTimer />
              </section>

              <SectionDivider symbol="✦" />

              {/* Section: Timeline */}
              <section ref={(el) => { sectionRefs.current["timeline"] = el; }} id="timeline">
                <EventTimeline />
              </section>

              <SectionDivider symbol="❖" />

              {/* Section: Venue */}
              <section ref={(el) => { sectionRefs.current["venue"] = el; }} id="venue">
                <VenueMap />
              </section>

              <SectionDivider symbol="✦" />

              {/* Section: Contact */}
              <section ref={(el) => { sectionRefs.current["contact"] = el; }} id="contact">
                <ContactSection />
              </section>

              {/* Footer */}
              <footer className="text-center py-10 border-t border-gold/20">
                <div className="relative inline-block">
                  <div className="absolute inset-0 rounded-full bg-gold/10 blur-xl scale-150" />
                  <img
                    src={weddingMotif}
                    alt="శుభం"
                    width={512}
                    height={512}
                    className="relative w-16 h-16 object-contain mx-auto mb-3 opacity-50"
                    loading="lazy"
                  />
                </div>
                <p className="text-muted-foreground text-xs font-telugu">
                  శ్రీరస్తు | శుభమస్తు | అవిఘ్నమస్తు
                </p>
                <p className="text-muted-foreground/40 text-[10px] mt-3">
                  Made with ❤️ for Voleti Family
                </p>
              </footer>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Index;
