import { motion } from "framer-motion";

const Divider = () => (
  <div className="flex items-center gap-3 my-4">
    <div className="flex-1 h-px bg-gold/40" />
    <span className="text-gold text-lg">✦</span>
    <div className="flex-1 h-px bg-gold/40" />
  </div>
);

const InvitationCard = () => {
  return (
    <motion.div
      className="w-full max-w-2xl mx-auto"
      initial={{ y: 100, opacity: 0, scale: 0.9 }}
      animate={{ y: 0, opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
    >
      <div className="bg-cream ornate-border rounded-xl p-6 sm:p-10 relative overflow-hidden">
        {/* Corner ornaments */}
        {["top-left", "top-right", "bottom-left", "bottom-right"].map((pos) => (
          <div
            key={pos}
            className="absolute w-20 h-20 opacity-20"
            style={{
              [pos.includes("top") ? "top" : "bottom"]: "8px",
              [pos.includes("left") ? "left" : "right"]: "8px",
              borderTop: pos.includes("top") ? "2px solid hsl(var(--gold))" : "none",
              borderBottom: pos.includes("bottom") ? "2px solid hsl(var(--gold))" : "none",
              borderLeft: pos.includes("left") ? "2px solid hsl(var(--gold))" : "none",
              borderRight: pos.includes("right") ? "2px solid hsl(var(--gold))" : "none",
            }}
          />
        ))}

        {/* Inner border */}
        <div className="border border-gold/20 rounded-lg p-4 sm:p-8">
          {/* Header */}
          <div className="text-center">
            <motion.p
              className="text-gold font-semibold text-sm tracking-[0.3em]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              శ్రీరస్తు &nbsp; | &nbsp; శుభమస్తు &nbsp; | &nbsp; అవిఘ్నమస్తు
            </motion.p>

            <Divider />

            <motion.h1
              className="text-maroon font-bold text-2xl sm:text-3xl font-telugu leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              వోలేటి వారి వివాహ ఆహ్వాన పత్రిక
            </motion.h1>

            <Divider />
          </div>

          {/* Muhurtam */}
          <motion.div
            className="text-center my-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            <div className="inline-block bg-primary/10 rounded-lg px-6 py-3 ornate-border">
              <p className="text-gold font-semibold text-sm mb-1">శుభ ముహూర్తం</p>
              <p className="text-maroon font-bold text-xl sm:text-2xl">8 ఏప్రిల్ 2026, బుధవారం</p>
              <p className="text-muted-foreground text-sm mt-1">రాత్రి గం|| 9-17 ని॥లకు</p>
            </div>
          </motion.div>

          {/* Shlokam */}
          <motion.div
            className="text-center my-6 px-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1 }}
          >
            <p className="text-gold text-xs font-semibold mb-2">శ్లోకం</p>
            <p className="text-foreground/80 text-xs sm:text-sm leading-relaxed italic">
              జానక్యాః కమలామలాంజలి పుటే యాః పద్మరాగాయితాః<br />
              న్యస్తా రాఘవమస్తకే చ విలసత్కుంద ప్రసూనాయితాః<br />
              స్రస్తాశ్యామలకాయకాంతి కలితా యా ఇంద్రనీలాయితాః<br />
              ముక్తాస్తాశ్శుభదా భవంతు భవతాం శ్రీరామవైవాహికాః
            </p>
          </motion.div>

          <Divider />

          {/* Ahvanam */}
          <motion.div
            className="text-center my-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
          >
            <p className="text-foreground/80 text-sm leading-loose">
              దివ్య ఆశీస్సులతో (లేటు) శ్రీ వోలేటి నరసింహులు, శ్రీమతి వెంకటరమణ గార్ల ప్రధమ కుమారుడు
            </p>
            <p className="text-foreground/90 text-sm leading-loose mt-1">
              <strong>శ్రీ వోలేటి బాలసుబ్రహ్మణ్యం, శ్రీమతి శ్రీలక్ష్మీ పద్మావతి</strong> దంపతులు వ్రాయు శుభలేఖార్ధములు
            </p>
          </motion.div>

          {/* Bride & Groom */}
          <motion.div
            className="my-8"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.4 }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-3 items-center gap-4">
              <div className="text-center">
                <p className="text-gold text-xs font-semibold mb-1">మా కుమార్తె (వధువు)</p>
                <p className="text-maroon font-bold text-xl sm:text-2xl">
                  దేవి శ్రావణి
                </p>
                <p className="text-xs text-muted-foreground mt-1">చి||ల సౌ||</p>
              </div>

              <div className="flex items-center justify-center">
                <div className="w-12 h-12 rounded-full gold-gradient flex items-center justify-center shimmer">
                  <span className="text-primary font-bold text-lg">&</span>
                </div>
              </div>

              <div className="text-center">
                <p className="text-gold text-xs font-semibold mb-1">వరుడు</p>
                <p className="text-maroon font-bold text-xl sm:text-2xl">
                  నాగ కామరాజు
                </p>
                <p className="text-xs text-muted-foreground mt-1">చి||</p>
              </div>
            </div>

            <p className="text-center text-xs text-muted-foreground mt-4 leading-relaxed px-2">
              (రాజానగరం మండలం, వెలుగుబంద వాస్తవ్యులు శ్రీ మండా వీరవెంకట సత్యనారాయణ, శ్రీమతి రత్నావతి దంపతుల అభిమాన దత్తత పుత్రుడు)
            </p>
            <p className="text-center text-sm text-foreground/80 mt-2">
              కు యిచ్చి వివాహము జరిపించుటకు పెద్దలు సుముహూర్తం నిశ్చయించినారు.
            </p>
          </motion.div>

          <Divider />

          {/* Event Details */}
          <motion.div
            className="my-6 space-y-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.6 }}
          >
            <h3 className="text-center text-gold font-semibold text-sm tracking-widest">కార్యక్రమ వివరాలు</h3>

            <div className="bg-primary/5 rounded-lg p-4 border border-gold/20 space-y-3">
              <div>
                <p className="text-gold text-xs font-semibold">సుముహూర్తం</p>
                <p className="text-foreground/80 text-xs leading-relaxed">
                  స్వస్తిశ్రీ చాంద్రమాన శ్రీ పరాభవ నామ సంవత్సర చైత్ర బహుళ షష్ఠి తత్కాల సప్తమి బుధవారం అనగా ది. 8-4-2026 రాత్రి గం|| 9-17 ని॥లకు మూల నక్షత్రయుక్త వృశ్చికలగ్నమునందు.
                </p>
              </div>

              <div>
                <p className="text-gold text-xs font-semibold">కళ్యాణవేదిక</p>
                <p className="text-foreground/80 text-xs">
                  YMVA ఫంక్షన్ హాలు, మార్కండేయేశ్వర స్వామివారి గుడి దగ్గర, గోదావరిగట్టు, రాజమహేంద్రవరం.
                </p>
              </div>

              <div>
                <p className="text-gold text-xs font-semibold">విందు</p>
                <p className="text-foreground/80 text-xs">
                  ది. 8-4-2026 బుధవారం రాత్రి 7-00 గం॥ల నుండి కళ్యాణవేదిక వద్ద.
                </p>
              </div>
            </div>
          </motion.div>

          <Divider />

          {/* Abhilasha */}
          <motion.div
            className="text-center my-6 px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.8 }}
          >
            <p className="text-foreground/70 text-xs sm:text-sm leading-loose italic">
              "ముత్యాల పందిరిలో వేదమంత్రాల నడుమ మంగళవాయిద్యాల మధ్య పవిత్రమైన మీ చల్లని దీవెనలే మా చిన్నారులకు శ్రీరామరక్ష కావాలని కోరుకుంటూ నూతన వధూవరులను ఆశీర్వదించ కోరుచున్నాము."
            </p>
          </motion.div>

          <Divider />

          {/* Family members */}
          <motion.div
            className="my-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2 }}
          >
            <p className="text-center text-gold text-xs font-semibold mb-3 tracking-widest">ఆగమనాభిలాషులు</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-1 text-xs text-foreground/70 text-center">
              <p>వోలేటి లక్ష్మివెంకటేశ్వరరావు, శ్రీమతి వెంకట లలిత కుమారి</p>
              <p>వోలేటి జానకి రాములు, శ్రీమతి మార్కండేశ్వరి</p>
              <p>శ్రీ యెంబులూరి కేశవరావు, శ్రీమతి వెంకటలక్ష్మి</p>
              <p>శ్రీ యెంబులూరి మణికంఠ, శ్రీమతి లక్ష్మి</p>
              <p>శ్రీ టంగుటూరి శివకేశవులు, శ్రీమతి భాస్కర మంగతాయారు</p>
              <p>శ్రీ తమ్మన గోపాలం, శ్రీమతి మహాలక్ష్మి</p>
            </div>
            <p className="text-center text-xs text-muted-foreground mt-2">మరియు బంధుమిత్రుల అభినందనలతో...</p>
          </motion.div>

          <Divider />

          {/* Footer */}
          <motion.div
            className="text-center mt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.2 }}
          >
            <p className="text-gold text-xs font-semibold mb-2">ఇట్లు భవదీయులు</p>
            <p className="text-foreground/80 text-sm font-semibold">
              వోలేటి బాలసుబ్రహ్మణ్యం, శ్రీమతి శ్రీలక్ష్మీ పద్మావతి
            </p>
            <p className="text-foreground/70 text-xs mt-1">చి|| నాగేంద్ర కుమారు</p>

            <div className="mt-4 bg-primary/5 rounded-lg p-3 border border-gold/20">
              <p className="text-gold text-xs font-semibold mb-1">చిరునామా</p>
              <p className="text-foreground/70 text-xs">
                డోర్ నెం. 36-35-5, వి.టి. కాలేజి రోడ్, ఇన్నీసుపేట, రాజమహేంద్రవరం.
              </p>
              <p className="text-foreground/70 text-xs mt-1">
                సెల్: 9515186575, 9949901588, 9182923534
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default InvitationCard;
