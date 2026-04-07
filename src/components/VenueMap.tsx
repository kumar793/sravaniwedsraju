import { motion } from "framer-motion";
import { MapPin, Navigation, ExternalLink } from "lucide-react";

const VenueMap = () => {
  return (
    <motion.div
      className="w-full max-w-2xl mx-auto"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3, duration: 0.6 }}
    >
      <div className="bg-cream rounded-xl overflow-hidden border-2 border-gold/30 shadow-[0_8px_30px_rgba(0,0,0,0.1)]">
        <div className="p-5 sm:p-8 text-center">
          <motion.div
            className="w-14 h-14 rounded-full gold-gradient flex items-center justify-center mx-auto mb-4 shadow-[0_0_20px_rgba(200,160,60,0.25)]"
            animate={{ y: [0, -4, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            <MapPin className="w-7 h-7 text-primary" />
          </motion.div>
          <h3 className="text-maroon font-bold text-xl font-telugu mb-2">కళ్యాణవేదిక</h3>
          <p className="text-foreground/70 text-sm font-telugu leading-relaxed">
            YMVA ఫంక్షన్ హాలు, మార్కండేయేశ్వర స్వామివారి గుడి దగ్గర,
          </p>
          <p className="text-foreground/70 text-sm font-telugu">
            గోదావరిగట్టు, రాజమహేంద్రవరం
          </p>
        </div>

        <div className="w-full h-[220px] sm:h-[280px] border-t border-b border-gold/20">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3814.847!2d81.7842!3d17.0005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a3779a598988c0b%3A0x6e0e1e5c8e6c8c0a!2sGodavari%20Ghat%2C%20Rajahmundry!5e0!3m2!1sen!2sin!4v1700000000000"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Wedding Venue Location"
          />
        </div>

        <div className="p-5 flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href="https://www.google.com/maps/search/YMVA+Function+Hall+Godavari+Ghat+Rajahmundry"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-primary text-gold px-6 py-2.5 rounded-full text-sm font-semibold hover:opacity-90 transition-all border-2 border-gold/40 shadow-lg hover:shadow-xl"
          >
            <Navigation className="w-4 h-4" />
            దిశలు పొందండి
          </a>
          <a
            href="https://maps.google.com/?q=YMVA+Function+Hall+Godavari+Ghat+Rajahmundry"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-gold/80 text-xs hover:text-gold transition-colors"
          >
            <ExternalLink className="w-3 h-3" />
            Google Maps లో చూడండి
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default VenueMap;
