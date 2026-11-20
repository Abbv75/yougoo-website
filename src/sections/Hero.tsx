import { useState } from "react";
import { motion } from "framer-motion";
import {
  MapPin,
  Navigation,
  ShieldCheck,
  Star,
  ArrowRight,
  Smartphone,
  Car,
  Clock,
  Sparkles,
  CheckCircle2,
} from "lucide-react";
import { Link } from "react-router-dom";

// Predefined Bamako hotspots for quick fare estimate
const BAMAKO_LOCATIONS = [
  { id: "aci2000", name: "ACI 2000 (Place CAN)" },
  { id: "badalabougou", name: "Badalabougou (Colline)" },
  { id: "hamdallaye", name: "Hamdallaye ACI" },
  { id: "aeroport", name: "Aéroport Int. Modibo Keïta" },
  { id: "hippodrome", name: "Hippodrome (Rue Princesse)" },
  { id: "marche", name: "Grand Marché de Bamako" },
  { id: "pointg", name: "Point G (Hôpital)" },
  { id: "yirimadio", name: "Yirimadio (Stade du 26 Mars)" },
];

export function Hero() {
  const [pickup, setPickup] = useState("aci2000");
  const [dropoff, setDropoff] = useState("badalabougou");

  // Approximate realistic Bamako fare calculator in FCFA
  const calculateFare = () => {
    if (pickup === dropoff) return 1500;
    if (pickup === "aeroport" || dropoff === "aeroport") return 8000;
    if (pickup === "pointg" || dropoff === "pointg") return 3500;
    if (pickup === "yirimadio" || dropoff === "yirimadio") return 4000;
    return 2000;
  };

  const estimatedFare = calculateFare();

  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden bg-gradient-to-b from-emerald-50/60 via-background to-background">
      {/* Background Decorative Glows & Bogolan Motif */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[650px] overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-[-100px] left-1/4 w-[500px] h-[500px] bg-emerald-300/20 dark:bg-emerald-600/10 rounded-full blur-[120px]" />
        <div className="absolute top-[100px] right-1/4 w-[400px] h-[400px] bg-teal-200/20 dark:bg-teal-600/10 rounded-full blur-[100px]" />
        <div className="absolute inset-0 bg-[radial-gradient(#16a34a_0.75px,transparent_0.75px)] [background-size:24px_24px] opacity-15" />
      </div>

      <div className="section-container">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headlines & Instant Estimation */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6 text-center lg:text-left"
          >
            {/* Pill Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100/80 dark:bg-emerald-950/60 border border-emerald-500/20 text-emerald-800 dark:text-emerald-300 text-xs font-semibold">
              <Sparkles className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
              <span>✦ L'Écosystème VTC & Taxi de Bamako</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 dark:text-white tracking-tight leading-[1.1]">
              Votre course à Bamako en 1 clic.{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-600 via-green-500 to-teal-600">
                Zéro marchandage.
              </span>{" "}
              100% Sérénité.
            </h1>

            {/* Subtitle */}
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              Fini les négociations interminables sous la chaleur. Avec{" "}
              <strong className="text-emerald-700 dark:text-emerald-400 font-semibold">
                Yougoo
              </strong>
              , commandez un chauffeur vérifié, suivez votre trajet en 3D sur la
              carte et payez au juste prix garanti en FCFA (Espèces ou Yougoo
              Pay).
            </p>

            {/* Interactive Quick Fare Estimator */}
            <div className="glass-panel p-5 sm:p-6 rounded-3xl shadow-xl shadow-emerald-900/5 max-w-xl mx-auto lg:mx-0 text-left border border-emerald-500/20">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 dark:text-emerald-300 flex items-center gap-1.5">
                  <Navigation className="w-3.5 h-3.5 text-emerald-600" />
                  Simulateur de Tarif Immédiat
                </span>
                <span className="text-[11px] font-semibold text-emerald-600 bg-emerald-50 dark:bg-emerald-950 px-2.5 py-0.5 rounded-full border border-emerald-500/20">
                  Prix fixe garanti
                </span>
              </div>

              <div className="grid sm:grid-cols-2 gap-3 mb-4">
                {/* Depart */}
                <div className="space-y-1">
                  <label className="text-[11px] font-medium text-slate-500 flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-emerald-600" />
                    Lieu de départ
                  </label>
                  <select
                    value={pickup}
                    onChange={(e) => setPickup(e.target.value)}
                    className="w-full text-xs font-medium p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  >
                    {BAMAKO_LOCATIONS.map((loc) => (
                      <option key={`p-${loc.id}`} value={loc.id}>
                        {loc.name}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Arrivee */}
                <div className="space-y-1">
                  <label className="text-[11px] font-medium text-slate-500 flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-red-500" />
                    Destination
                  </label>
                  <select
                    value={dropoff}
                    onChange={(e) => setDropoff(e.target.value)}
                    className="w-full text-xs font-medium p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  >
                    {BAMAKO_LOCATIONS.map((loc) => (
                      <option key={`d-${loc.id}`} value={loc.id}>
                        {loc.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Price estimation result banner */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-3 p-3.5 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-500/20">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center font-bold">
                    <Car className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500">Estimation Yougoo Standard</div>
                    <div className="text-xl font-heading font-black text-slate-900 dark:text-white">
                      {estimatedFare.toLocaleString("fr-FR")}{" "}
                      <span className="text-emerald-600 text-sm font-bold">FCFA</span>
                    </div>
                  </div>
                </div>

                <a
                  href="#telecharger"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition-all shadow-sm shadow-emerald-600/30 text-center"
                >
                  <span>Commander cette course</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Badges / CTA Links */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
              <a
                href="#telecharger"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-2xl bg-slate-900 dark:bg-white hover:bg-slate-800 dark:hover:bg-slate-100 text-white dark:text-slate-900 font-heading font-bold text-sm shadow-lg shadow-slate-900/10 transition-all hover:-translate-y-0.5"
              >
                <Smartphone className="w-4 h-4 text-emerald-400 dark:text-emerald-600" />
                <span>Télécharger l'Application</span>
              </a>

              <Link
                to="/services"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200 font-semibold text-sm border border-slate-200 dark:border-slate-800 transition-all hover:-translate-y-0.5"
              >
                <span>Découvrir nos services</span>
                <ArrowRight className="w-4 h-4 text-slate-400" />
              </Link>
            </div>

            {/* Social proof trust pills */}
            <div className="flex items-center justify-center lg:justify-start gap-6 pt-2 text-xs text-slate-500">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Chauffeurs certifiés</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Paiement Espèces ou Yougoo Pay</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Assistance 24/7</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Visual Mockup Showcase with Interactive Floating Cards */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-5 relative flex justify-center items-center"
          >
            {/* Phone Mockup Frame */}
            <div className="relative mx-auto w-full max-w-[320px] sm:max-w-[340px] aspect-[9/19] rounded-[48px] p-3 bg-slate-900 shadow-[0_25px_60px_-15px_rgba(22,163,74,0.3)] ring-1 ring-white/20">
              {/* Speaker / Dynamic Island notch */}
              <div className="absolute top-5 left-1/2 -translate-x-1/2 w-28 h-4 bg-black rounded-full z-30" />

              {/* Screen Content */}
              <div className="relative w-full h-full rounded-[38px] overflow-hidden bg-slate-950 border border-slate-800">
                <img
                  src="/app-screen-home.png"
                  alt="Yougoo Client Mobile App"
                  className="w-full h-full object-cover object-top"
                />

                {/* Subtle Inner Glass Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Floating Live Badge 1: Driver Found */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="absolute -left-6 sm:-left-12 top-20 glass-panel p-3.5 rounded-2xl shadow-xl border border-emerald-500/20 max-w-[210px] hidden sm:block"
              >
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-600 font-bold shrink-0">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] font-bold uppercase tracking-wider text-emerald-700">
                      Arrivée rapide
                    </div>
                    <div className="text-xs font-bold text-slate-800">
                      Chauffeur à 3 min
                    </div>
                    <div className="text-[10px] text-slate-500">Toyota Yaris climatisée</div>
                  </div>
                </div>
              </motion.div>

              {/* Floating Live Badge 2: Guaranteed Fare */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7, duration: 0.5 }}
                className="absolute -right-6 sm:-right-10 bottom-24 glass-panel p-3.5 rounded-2xl shadow-xl border border-emerald-500/20 max-w-[220px]"
              >
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-xl bg-amber-100 flex items-center justify-center text-amber-600 font-bold shrink-0">
                    <Star className="w-4 h-4 fill-amber-500 text-amber-500" />
                  </div>
                  <div>
                    <div className="text-[10px] font-bold uppercase tracking-wider text-amber-700">
                      Tarif Garanti
                    </div>
                    <div className="text-xs font-black text-slate-900">
                      2 000 FCFA
                    </div>
                    <div className="text-[10px] text-slate-500">Sans négociation</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Key Metrics Strip */}
        <div className="mt-16 pt-10 border-t border-slate-200/80 dark:border-slate-800 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="space-y-1">
            <div className="text-3xl sm:text-4xl font-heading font-black text-emerald-600">
              30s
            </div>
            <div className="text-xs font-semibold uppercase tracking-wider text-slate-500">
              Temps moyen de commande
            </div>
          </div>

          <div className="space-y-1">
            <div className="text-3xl sm:text-4xl font-heading font-black text-slate-900 dark:text-white">
              +500
            </div>
            <div className="text-xs font-semibold uppercase tracking-wider text-slate-500">
              Chauffeurs certifiés à Bamako
            </div>
          </div>

          <div className="space-y-1">
            <div className="text-3xl sm:text-4xl font-heading font-black text-emerald-600">
              4.9/5
            </div>
            <div className="text-xs font-semibold uppercase tracking-wider text-slate-500">
              Satisfaction passagers
            </div>
          </div>

          <div className="space-y-1">
            <div className="text-3xl sm:text-4xl font-heading font-black text-slate-900 dark:text-white">
              100%
            </div>
            <div className="text-xs font-semibold uppercase tracking-wider text-slate-500">
              Tarifs garantis en FCFA
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
