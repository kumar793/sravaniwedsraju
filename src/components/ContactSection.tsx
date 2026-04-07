import { motion } from "framer-motion";
import { Phone, MapPin } from "lucide-react";

const contacts = [
  { name: "వోలేటి బాలసుబ్రహ్మణ్యం", phone: "9515186575" },
  { name: "శ్రీమతి శ్రీలక్ష్మీ పద్మావతి", phone: "9949901588" },
  { name: "చి|| నాగేంద్ర కుమారు", phone: "9182923534" },
];

const ContactSection = () => {
  return (
    <motion.div
      className="w-full max-w-md mx-auto"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.4 }}
    >
      <div className="bg-cream rounded-xl p-6 sm:p-8 border-2 border-gold/30 shadow-[0_8px_30px_rgba(0,0,0,0.1)]">
        <h3 className="text-center text-gold font-semibold text-sm tracking-[0.3em] mb-2 uppercase">
          సంప్రదించండి
        </h3>

        <div className="flex items-center justify-center gap-2 mb-6">
          <MapPin className="w-3 h-3 text-gold/60" />
          <p className="text-center text-muted-foreground text-xs font-telugu">
            డోర్ నెం. 36-35-5, వి.టి. కాలేజి రోడ్, ఇన్నీసుపేట, రాజమహేంద్రవరం
          </p>
        </div>

        <div className="space-y-3">
          {contacts.map((c, i) => (
            <motion.a
              key={c.phone}
              href={`tel:${c.phone}`}
              className="flex items-center justify-between bg-background/60 rounded-xl p-4 border border-gold/20 hover:border-gold/50 hover:shadow-md transition-all duration-300 group"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 + i * 0.1 }}
            >
              <div>
                <p className="text-foreground/80 text-sm font-telugu font-semibold group-hover:text-maroon transition-colors">
                  {c.name}
                </p>
                <p className="text-muted-foreground text-xs mt-0.5">{c.phone}</p>
              </div>
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <Phone className="w-4 h-4 text-gold" />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ContactSection;
