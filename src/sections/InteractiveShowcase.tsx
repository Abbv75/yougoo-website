import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Smartphone,
  Navigation,
  Car,
  Clock,
  ShieldCheck,
  CreditCard,
  MapPin,
  Sparkles,
  Layers,
} from "lucide-react";

interface ScreenView {
  id: string;
  label: string;
  image: string;
  title: string;
  description: string;
  statBadge: string;
  statValue: string;
}

const views: ScreenView[] = [
  {
    id: "home",
    label: "1. Carte & Recherche",
    image: "/app-screen-home.png",
    title: "Cartographie fluide & Repères locaux",
    description:
      "Une vue satellite ou vectorielle MapLibre optimisée pour Bamako. Localisez instantanément les chauffeurs actifs à proximité de votre position.",
    statBadge: "Temps de réponse",
    statValue: "< 300 ms",
  },
  {
    id: "booking",
    label: "2. Bottom Sheet & Tarifs",
    image: "/app-screen-booking.png",
    title: "Le OrderBottomSheet Apple-style",
    description:
      "Balayez du bout du doigt pour comparer les classes de véhicules et visualiser le prix verrouillé en FCFA avant toute validation.",
    statBadge: "Tarifs affichés",
    statValue: "100% Garantis",
  },
  {
    id: "trip",
    label: "3. Trajet en Direct",
    image: "/app-screen-trip.png",
    title: "Suivi en Temps Réel WebSocket",
    description:
      "Observez l'approche de votre chauffeur virage par virage. Contactez-le par appel masqué ou messagerie instantanée intégrée.",
    statBadge: "Fréquence GPS",
    statValue: "10 secondes",
  },
  {
    id: "tablet",
    label: "4. Cockpit Tablette & Duo",
    image: "/app-screen-tablet.png",
    title: "Interface Adaptative Multi-Écrans",
    description:
      "Conçue pour s'adapter aussi bien aux smartphones de poche qu'aux grands écrans cockpit de tablette utilisés par nos chauffeurs partenaires.",
    statBadge: "Compatibilité",
    statValue: "iOS & Android",
  },
];

export function InteractiveShowcase() {
  const [activeViewId, setActiveViewId] = useState("home");
  const currentView = views.find((v) => v.id === activeViewId) || views[0];

  return (
    <section className="py-20 lg:py-32 bg-slate-50/70 dark:bg-slate-900/50 relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-400/10 dark:bg-emerald-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="section-container relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
            <span>Expérience Interactive</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-black text-slate-900 dark:text-white tracking-tight">
            Explorez l'application{" "}
            <span className="text-emerald-600">dans le détail</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg">
            Découvrez comment Yougoo allie artisanat mobile moderne (React Native, Tamagui) et ergonomie pensée pour l'Afrique de l'Ouest.
          </p>
        </div>

        {/* View Switcher Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-14">
          {views.map((v) => {
            const isActive = activeViewId === v.id;
            return (
              <button
                key={v.id}
                onClick={() => setActiveViewId(v.id)}
                className={`px-4 sm:px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 ${
                  isActive
                    ? "bg-slate-900 dark:bg-white text-white dark:text-slate-900 shadow-md scale-105"
                    : "bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 border border-slate-200/80 dark:border-slate-700"
                }`}
              >
                {v.label}
              </button>
            );
          })}
        </div>

        {/* Interactive Showcase Box */}
        <div className="glass-panel p-6 sm:p-12 rounded-3xl border border-emerald-500/20 shadow-2xl max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            {/* Left: Explanations for the active screen */}
            <div className="lg:col-span-6 space-y-6">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentView.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-4"
                >
                  <span className="inline-block text-xs font-bold uppercase tracking-wider text-emerald-600 bg-emerald-50 dark:bg-emerald-950 px-3 py-1 rounded-full border border-emerald-500/20">
                    Écran : {currentView.label}
                  </span>

                  <h3 className="text-2xl sm:text-3xl font-heading font-black text-slate-900 dark:text-white leading-tight">
                    {currentView.title}
                  </h3>

                  <p className="text-slate-600 dark:text-slate-300 text-base leading-relaxed">
                    {currentView.description}
                  </p>

                  <div className="p-4 rounded-2xl bg-emerald-50/80 dark:bg-emerald-950/40 border border-emerald-500/20 flex items-center justify-between">
                    <span className="text-xs font-medium text-slate-600 dark:text-slate-300">
                      {currentView.statBadge}
                    </span>
                    <span className="font-heading font-black text-lg text-emerald-700 dark:text-emerald-400">
                      {currentView.statValue}
                    </span>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Quick specs */}
              <div className="space-y-2 pt-2 border-t border-slate-200 dark:border-slate-800 text-xs text-slate-500">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-emerald-500" />
                  <span>Architecture React Native 0.88 + Tamagui v2</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-emerald-500" />
                  <span>Retour haptique haute fidélité (Expo Haptics)</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-emerald-500" />
                  <span>Lisibilité maximale sous le fort ensoleillement équatorial</span>
                </div>
              </div>
            </div>

            {/* Right: Realistic Device Mockup displaying the screenshot */}
            <div className="lg:col-span-6 flex justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentView.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.35 }}
                  className="relative max-w-[280px] sm:max-w-[310px] aspect-[9/19] rounded-[44px] p-2.5 bg-slate-900 shadow-2xl ring-1 ring-white/10"
                >
                  {/* Dynamic Island */}
                  <div className="absolute top-4 left-1/2 -translate-x-1/2 w-24 h-3.5 bg-black rounded-full z-20" />

                  {/* Device screen */}
                  <div className="w-full h-full rounded-[34px] overflow-hidden bg-black border border-slate-800">
                    <img
                      src={currentView.image}
                      alt={currentView.title}
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default InteractiveShowcase;
