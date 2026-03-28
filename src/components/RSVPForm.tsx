import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle, User, Users, Phone } from "lucide-react";

const RSVPForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [guests, setGuests] = useState("1");
  const [attending, setAttending] = useState<"yes" | "no" | "">("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Store in localStorage as a simple approach
    const rsvps = JSON.parse(localStorage.getItem("wedding-rsvps") || "[]");
    rsvps.push({ name, phone, guests, attending, timestamp: Date.now() });
    localStorage.setItem("wedding-rsvps", JSON.stringify(rsvps));
    setSubmitted(true);
  };

  return (
    <motion.div
      className="w-full max-w-md mx-auto"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
    >
      <div className="bg-cream ornate-border rounded-xl p-6">
        <h3 className="text-center text-gold font-semibold text-sm tracking-[0.3em] mb-1 uppercase">
          RSVP
        </h3>
        <p className="text-center text-muted-foreground text-xs mb-6 font-telugu">
          మీ హాజరు నిర్ధారించండి
        </p>

        <AnimatePresence mode="wait">
          {!submitted ? (
            <motion.form
              key="form"
              onSubmit={handleSubmit}
              className="space-y-4"
              exit={{ opacity: 0, scale: 0.95 }}
            >
              <div>
                <label className="flex items-center gap-2 text-xs text-foreground/70 mb-1">
                  <User className="w-3 h-3" /> పేరు
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-background border border-gold/30 rounded-lg px-3 py-2 text-sm text-foreground focus:outline-none focus:border-gold transition-colors"
                  placeholder="మీ పేరు"
                />
              </div>

              <div>
                <label className="flex items-center gap-2 text-xs text-foreground/70 mb-1">
                  <Phone className="w-3 h-3" /> ఫోన్ నంబర్
                </label>
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full bg-background border border-gold/30 rounded-lg px-3 py-2 text-sm text-foreground focus:outline-none focus:border-gold transition-colors"
                  placeholder="మీ ఫోన్ నంబర్"
                />
              </div>

              <div>
                <label className="flex items-center gap-2 text-xs text-foreground/70 mb-1">
                  <Users className="w-3 h-3" /> అతిథుల సంఖ్య
                </label>
                <select
                  value={guests}
                  onChange={(e) => setGuests(e.target.value)}
                  className="w-full bg-background border border-gold/30 rounded-lg px-3 py-2 text-sm text-foreground focus:outline-none focus:border-gold transition-colors"
                >
                  {[1, 2, 3, 4, 5].map((n) => (
                    <option key={n} value={n}>
                      {n} {n === 1 ? "వ్యక్తి" : "మంది"}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <p className="text-xs text-foreground/70 mb-2">హాజరు అవుతారా?</p>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { val: "yes" as const, label: "అవును, వస్తాను ✨" },
                    { val: "no" as const, label: "రాలేను 😔" },
                  ].map((opt) => (
                    <button
                      key={opt.val}
                      type="button"
                      onClick={() => setAttending(opt.val)}
                      className={`py-2 px-3 rounded-lg text-xs font-semibold transition-all border ${
                        attending === opt.val
                          ? "bg-primary text-gold border-gold"
                          : "bg-background border-gold/30 text-foreground/70 hover:border-gold/60"
                      }`}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              </div>

              <button
                type="submit"
                disabled={!name || !attending}
                className="w-full bg-primary text-gold py-3 rounded-lg font-semibold text-sm flex items-center justify-center gap-2 ornate-border hover:opacity-90 transition-opacity disabled:opacity-50"
              >
                <Send className="w-4 h-4" />
                పంపండి
              </button>
            </motion.form>
          ) : (
            <motion.div
              key="success"
              className="text-center py-8"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
            >
              <CheckCircle className="w-12 h-12 text-gold mx-auto mb-3" />
              <p className="text-maroon font-bold text-lg font-telugu">ధన్యవాదాలు!</p>
              <p className="text-muted-foreground text-sm mt-1 font-telugu">
                మీ ప్రతిస్పందన నమోదు అయినది
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default RSVPForm;
