import { motion } from "framer-motion";
import { Phone } from "lucide-react";

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
      <div className="bg-cream ornate-border rounded-xl p-6">
        <h3 className="text-center text-gold font-semibold text-sm tracking-[0.3em] mb-1 uppercase">
          సంప్రదించండి
        </h3>
        <p className="text-center text-muted-foreground text-xs mb-4 font-telugu">
          డోర్ నెం. 36-35-5, వి.టి. కాలేజి రోడ్, ఇన్నీసుపేట, రాజమహేంద్రవరం
        </p>
        <div className="space-y-3">
          {contacts.map((c) => (
            <a
              key={c.phone}
              href={`tel:${c.phone}`}
              className="flex items-center justify-between bg-primary/5 rounded-lg p-3 border border-gold/20 hover:border-gold/50 transition-colors"
            >
              <div>
                <p className="text-foreground/80 text-sm font-telugu font-semibold">{c.name}</p>
                <p className="text-muted-foreground text-xs">{c.phone}</p>
              </div>
              <Phone className="w-4 h-4 text-gold" />
            </a>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ContactSection;
