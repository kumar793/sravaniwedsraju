import { motion } from "framer-motion";
import { MapPin, Navigation } from "lucide-react";

const VenueMap = () => {
  return (
    <motion.div
      className="w-full max-w-2xl mx-auto"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3, duration: 0.6 }}
    >
      <div className="bg-cream ornate-border rounded-xl overflow-hidden">
        <div className="p-4 sm:p-6 text-center">
          <MapPin className="w-6 h-6 text-gold mx-auto mb-2" />
          <h3 className="text-maroon font-bold text-lg font-telugu">కళ్యాణవేదిక</h3>
          <p className="text-foreground/70 text-sm mt-1 font-telugu">
            YMVA ఫంక్షన్ హాలు, మార్కండేయేశ్వర స్వామివారి గుడి దగ్గర,
          </p>
          <p className="text-foreground/70 text-sm font-telugu">
            గోదావరిగట్టు, రాజమహేంద్రవరం
          </p>
        </div>
        <div className="w-full h-[250px] sm:h-[300px]">
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
        <div className="p-4 text-center">
          <a
            href="https://www.google.com/maps/search/YMVA+Function+Hall+Godavari+Ghat+Rajahmundry"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-primary text-gold px-5 py-2.5 rounded-lg text-sm font-semibold hover:opacity-90 transition-opacity ornate-border"
          >
            <Navigation className="w-4 h-4" />
            దిశలు పొందండి (Get Directions)
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default VenueMap;
