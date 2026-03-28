import { useState, useRef, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Envelope from "@/components/Envelope";
import InvitationCard from "@/components/InvitationCard";
import FloatingPetals from "@/components/FloatingPetals";
import CountdownTimer from "@/components/CountdownTimer";
import VenueMap from "@/components/VenueMap";
import EventTimeline from "@/components/EventTimeline";
import RSVPForm from "@/components/RSVPForm";
import ContactSection from "@/components/ContactSection";
import weddingMotif from "@/assets/wedding-motif.png";
import { Heart, MapPin, Clock, Send, Phone, ChevronDown } from "lucide-react";

const navItems = [
  { id: "invitation", label: "ఆహ్వానం", icon: Heart },
  { id: "timeline", label: "కార్యక్రమం", icon: Clock },
  { id: "venue", label: "వేదిక", icon: MapPin },
  { id: "rsvp", label: "RSVP", icon: Send },
  { id: "contact", label: "సంప్రదించు", icon: Phone },
];

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
          /* ========== LANDING / ENVELOPE PAGE ========== */
          <motion.div
            key="envelope-landing"
            className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-10"
            exit={{ y: -200, opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.5 }}
          >
            {/* Om Motif */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="mb-4"
            >
              <img
                src={weddingMotif}
                alt="శుభం"
                width={512}
                height={512}
                className="w-24 h-24 sm:w-32 sm:h-32 object-contain drop-shadow-lg"
              />
            </motion.div>

            {/* Blessing text */}
            <motion.p
              className="text-gold text-sm sm:text-base font-telugu font-semibold tracking-[0.2em] mb-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              శ్రీరస్తు | శుభమస్తు | అవిఘ్నమస్తు
            </motion.p>

            {/* Title */}
            <motion.div
              className="text-center mb-2"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <p className="text-gold font-cursive text-4xl sm:text-6xl mb-1 drop-shadow-md">
                Wedding Invitation
              </p>
              <h1 className="text-maroon font-telugu font-bold text-xl sm:text-3xl">
                వోలేటి వారి వివాహ ఆహ్వాన పత్రిక
              </h1>
            </motion.div>

            {/* Bride & Groom names */}
            <motion.div
              className="text-center my-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
            >
              <div className="flex items-center justify-center gap-3 sm:gap-6">
                <p className="text-maroon font-bold text-lg sm:text-2xl font-telugu">దేవి శ్రావణి</p>
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full gold-gradient flex items-center justify-center shimmer">
                  <Heart className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                </div>
                <p className="text-maroon font-bold text-lg sm:text-2xl font-telugu">నాగ కామరాజు</p>
              </div>
              <p className="text-muted-foreground text-sm mt-2 font-telugu">8 ఏప్రిల్ 2026, బుధవారం</p>
            </motion.div>

            {/* Countdown on landing */}
            <motion.div
              className="my-6 w-full max-w-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
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
          /* ========== FULL WEDDING APP ========== */
          <motion.div
            key="wedding-app"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="relative z-10"
          >
            {/* Sticky Navigation */}
            <nav className="sticky top-0 z-50 bg-primary/95 backdrop-blur-md border-b border-gold/20 shadow-lg">
              <div className="flex items-center justify-center gap-1 sm:gap-2 px-2 py-2 max-w-2xl mx-auto overflow-x-auto">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`flex items-center gap-1 px-2 sm:px-3 py-1.5 rounded-lg text-[10px] sm:text-xs font-semibold transition-all whitespace-nowrap ${
                      activeSection === item.id
                        ? "bg-gold/20 text-gold"
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
            <div className="text-center py-3">
              <button
                onClick={() => setIsOpen(false)}
                className="text-gold text-xs hover:underline font-telugu"
              >
                ✉ ఎన్వలప్ కు తిరిగి వెళ్ళు
              </button>
            </div>

            <div className="px-4 pb-20 space-y-12 max-w-2xl mx-auto">
              {/* Section: Invitation */}
              <section ref={(el) => { sectionRefs.current["invitation"] = el; }} id="invitation">
                <InvitationCard />
              </section>

              {/* Section: Countdown */}
              <section className="py-6">
                <CountdownTimer />
              </section>

              {/* Section: Timeline */}
              <section ref={(el) => { sectionRefs.current["timeline"] = el; }} id="timeline">
                <EventTimeline />
              </section>

              {/* Section: Venue */}
              <section ref={(el) => { sectionRefs.current["venue"] = el; }} id="venue">
                <VenueMap />
              </section>

              {/* Section: RSVP */}
              <section ref={(el) => { sectionRefs.current["rsvp"] = el; }} id="rsvp">
                <RSVPForm />
              </section>

              {/* Section: Contact */}
              <section ref={(el) => { sectionRefs.current["contact"] = el; }} id="contact">
                <ContactSection />
              </section>

              {/* Footer */}
              <footer className="text-center py-8 border-t border-gold/20">
                <img
                  src={weddingMotif}
                  alt="శుభం"
                  width={512}
                  height={512}
                  className="w-16 h-16 object-contain mx-auto mb-3 opacity-60"
                  loading="lazy"
                />
                <p className="text-muted-foreground text-xs font-telugu">
                  శ్రీరస్తు | శుభమస్తు | అవిఘ్నమస్తు
                </p>
                <p className="text-muted-foreground/50 text-[10px] mt-2">
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
