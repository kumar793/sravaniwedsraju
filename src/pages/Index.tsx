import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Envelope from "@/components/Envelope";
import InvitationCard from "@/components/InvitationCard";
import FloatingPetals from "@/components/FloatingPetals";

const Index = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background relative overflow-x-hidden">
      <FloatingPetals />

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-10">
        <AnimatePresence mode="wait">
          {!isOpen ? (
            <motion.div
              key="envelope"
              className="flex flex-col items-center"
              exit={{ y: -200, opacity: 0, scale: 0.5 }}
              transition={{ duration: 0.5 }}
            >
              {/* Title above envelope */}
              <motion.div
                className="text-center mb-10"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <p className="text-gold font-cursive text-3xl sm:text-5xl mb-2">
                  Wedding Invitation
                </p>
                <h1 className="text-maroon font-telugu font-bold text-xl sm:text-2xl">
                  వోలేటి వారి వివాహ ఆహ్వాన పత్రిక
                </h1>
              </motion.div>

              <Envelope isOpen={false} onClick={() => setIsOpen(true)} />
            </motion.div>
          ) : (
            <motion.div
              key="card"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="w-full"
            >
              {/* Back button */}
              <motion.button
                className="mx-auto mb-6 flex items-center gap-2 text-gold text-sm hover:underline"
                onClick={() => setIsOpen(false)}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.5 }}
              >
                ✉ ఎన్వలప్ కు తిరిగి వెళ్ళు
              </motion.button>
              <InvitationCard />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Index;
