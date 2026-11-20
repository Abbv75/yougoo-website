import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Car,
  Wind,
  Shield,
  Users,
  Briefcase,
  Check,
  Star,
  Plane,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";

interface VehicleCategory {
  id: string;
  name: string;
  subtitle: string;
  priceFrom: string;
  image: string;
  capacity: string;
  luggage: string;
  features: string[];
  recommendedFor: string;
  badge?: string;
}

const categories: VehicleCategory[] = [
  {
    id: "standard",
    name: "Yougoo Standard",
    subtitle: "La course quotidienne économique et agile",
    priceFrom: "1 500 FCFA",
    image: "/toyota_yaris.png",
    capacity: "4 passagers",
    luggage: "2 valises",
    badge: "Le plus populaire",
    recommendedFor: "Trajets quotidiens, travail, courses et sorties en ville",
    features: [
      "Véhicules récents et propres (Toyota Yaris, Hyundai i20)",
      "Temps d'attente moyen : 3 minutes",
      "Tarif économique garanti sans surcoût",
      "Paiement Espèces ou Yougoo Pay",
    ],
  },
  {
    id: "confort",
    name: "Yougoo Confort",
    subtitle: "Climatisation renforcée & berlines spacieuses",
    priceFrom: "2 500 FCFA",
    image: "/toyota_yaris.png",
    capacity: "4 passagers",
    luggage: "3 valises",
    badge: "Idéal forte chaleur",
    recommendedFor: "Rendez-vous professionnels, confort supérieur sous le soleil de Bamako",
    features: [
      "Climatisation automatique obligatoire",
      "Berlines spacieuses (Toyota Corolla, Hyundai Elantra)",
      "Chauffeurs d'élite notés 4.8+",
      "Bouteille d'eau et chargeur de téléphone à bord",
    ],
  },
  {
    id: "taxi",
    name: "Yougoo Taxi",
    subtitle: "Le taxi traditionnel de Bamako, numérisé et régulé",
    priceFrom: "1 250 FCFA",
    image: "/taxi.png",
    capacity: "4 passagers",
    luggage: "2 valises",
    badge: "Iconique",
    recommendedFor: "Amoureux du taxi bamankois avec la sécurité du prix fixé et du GPS",
    features: [
      "Taxis jaunes officiels certifiés de Bamako",
      "Fini le marchandage : tarif calculé par l'app",
      "Suivi de l'itinéraire sur la carte en temps réel",
      "Paiement direct au chauffeur",
    ],
  },
  {
    id: "aeroport",
    name: "Navette Aéroport Sénou",
    subtitle: "Liaison directe Aéroport International Modibo Keïta",
    priceFrom: "8 000 FCFA",
    image: "/toyota_yaris.png",
    capacity: "4 passagers",
    luggage: "Grand coffre",
    badge: "Transfert Garanti",
    recommendedFor: "Vols de départ ou d'arrivée avec prise en charge personnalisée",
    features: [
      "Prise en charge à domicile ou hall des arrivées",
      "Suivi des horaires de vol en direct",
      "Assistance bagages par votre chauffeur",
      "Réservation à l'avance 24/7 garantie",
    ],
  },
];

export function FleetSection() {
  const [selectedId, setSelectedId] = useState("standard");
  const selectedCategory = categories.find((c) => c.id === selectedId) || categories[0];

  return (
    <section className="py-20 lg:py-28 bg-white dark:bg-slate-900 relative overflow-hidden">
      <div className="section-container">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 text-xs font-bold uppercase tracking-wider">
            <span>Flotte Adaptée à Bamako</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-black text-slate-900 dark:text-white tracking-tight">
            Une gamme pensée pour{" "}
            <span className="text-emerald-600">tous vos besoins</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed">
            Du trajet quotidien express au confort climatisé grand format, choisissez le véhicule qui vous correspond.
          </p>
        </div>

        {/* Category Selector Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-12">
          {categories.map((cat) => {
            const isSelected = selectedId === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedId(cat.id)}
                className={`px-5 py-3 rounded-2xl text-xs sm:text-sm font-heading font-bold transition-all duration-200 flex items-center gap-2 ${
                  isSelected
                    ? "bg-emerald-600 text-white shadow-lg shadow-emerald-600/30 scale-105"
                    : "bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700"
                }`}
              >
                <Car className="w-4 h-4" />
                <span>{cat.name}</span>
                {cat.badge && (
                  <span
                    className={`text-[10px] px-2 py-0.5 rounded-full ${
                      isSelected
                        ? "bg-white/20 text-white"
                        : "bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300"
                    }`}
                  >
                    {cat.badge}
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* Display Card for Selected Category */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35 }}
            className="glass-panel p-6 sm:p-10 rounded-3xl border border-emerald-500/20 shadow-xl max-w-5xl mx-auto"
          >
            <div className="grid lg:grid-cols-12 gap-8 items-center">
              {/* Left Column: Specs & Features */}
              <div className="lg:col-span-7 space-y-6">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                      Dès {selectedCategory.priceFrom}
                    </span>
                    {selectedCategory.badge && (
                      <span className="text-[11px] font-semibold bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300 px-2.5 py-0.5 rounded-full">
                        {selectedCategory.badge}
                      </span>
                    )}
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-heading font-black text-slate-900 dark:text-white">
                    {selectedCategory.name}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300 font-medium">
                    {selectedCategory.subtitle}
                  </p>
                </div>

                {/* Capacity pills */}
                <div className="flex flex-wrap items-center gap-4 text-xs text-slate-600 dark:text-slate-300 py-1">
                  <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800">
                    <Users className="w-4 h-4 text-emerald-600" />
                    <span>{selectedCategory.capacity}</span>
                  </div>
                  <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800">
                    <Briefcase className="w-4 h-4 text-emerald-600" />
                    <span>{selectedCategory.luggage}</span>
                  </div>
                  <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800">
                    <Wind className="w-4 h-4 text-emerald-600" />
                    <span>Climatisation</span>
                  </div>
                </div>

                {/* Features List */}
                <div className="space-y-2.5 pt-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Avantages inclus :
                  </h4>
                  <div className="grid sm:grid-cols-2 gap-2.5">
                    {selectedCategory.features.map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700 dark:text-slate-200">
                        <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <div className="pt-4 flex flex-wrap items-center gap-4">
                  <a
                    href="#telecharger"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-heading font-bold text-xs uppercase tracking-wider shadow-md shadow-emerald-600/25 transition-all"
                  >
                    <span>Commander en {selectedCategory.name}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                  <Link
                    to="/services"
                    className="text-xs font-semibold text-slate-600 dark:text-slate-400 hover:text-emerald-600 transition-colors"
                  >
                    Voir toute la grille tarifaire →
                  </Link>
                </div>
              </div>

              {/* Right Column: Vehicle Visual */}
              <div className="lg:col-span-5 flex items-center justify-center relative">
                <div className="w-full aspect-[4/3] rounded-2xl bg-gradient-to-tr from-emerald-100/50 via-slate-100 to-emerald-50 dark:from-slate-800 dark:to-slate-850 p-6 flex items-center justify-center relative overflow-hidden group">
                  <div className="absolute inset-0 bg-emerald-500/5 rounded-2xl" />
                  <motion.img
                    src={selectedCategory.image}
                    alt={selectedCategory.name}
                    className="max-h-52 w-auto object-contain drop-shadow-2xl transition-transform duration-500 group-hover:scale-105"
                    animate={{ y: [0, -6, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

export default FleetSection;
