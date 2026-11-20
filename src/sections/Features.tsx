import { motion } from "framer-motion";
import {
  MapPin,
  ShieldCheck,
  CreditCard,
  Clock,
  Navigation,
  FileText,
  Smartphone,
  PhoneCall,
  Lock,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";

const features = [
  {
    icon: MapPin,
    title: "Cartographie Vectorielle 3D",
    description:
      "Propulsée par MapLibre et des tuiles haute définition adaptées au réseau routier de Bamako : des grands boulevards d'ACI 2000 aux carrefours de Badalabougou.",
    color: "from-emerald-500 to-green-600",
  },
  {
    icon: ShieldCheck,
    title: "Tarif Fixé au FCFA Près",
    description:
      "Finis les malentendus. Le tarif est calculé selon la distance et la circulation, puis verrouillé avant votre confirmation de course.",
    color: "from-green-500 to-teal-600",
  },
  {
    icon: CreditCard,
    title: "Double Mode de Paiement",
    description:
      "Liberté totale : payez en espèces remises au chauffeur ou utilisez votre portefeuille Yougoo Pay rechargé par Orange Money, Wave ou Moov Africa.",
    color: "from-emerald-600 to-emerald-700",
  },
  {
    icon: Lock,
    title: "Sécurité & Bouton SOS 24/7",
    description:
      "Partagez votre itinéraire en direct avec votre famille d'un simple clic. Accédez au bouton d'assistance d'urgence relié à notre centrale locale.",
    color: "from-teal-500 to-cyan-600",
  },
  {
    icon: Clock,
    title: "Disponibilité Immédiate ou Programmée",
    description:
      "Commandez pour un départ instantané en 3 minutes ou réservez votre course à l'avance pour un vol à l'aéroport ou une réunion matinale.",
    color: "from-amber-500 to-emerald-600",
  },
  {
    icon: FileText,
    title: "Reçus Numériques pour Pros",
    description:
      "Recevez instantanément un justificatif officiel par email ou dans l'app, idéal pour les notes de frais et la gestion d'entreprise.",
    color: "from-emerald-700 to-slate-800",
  },
];

export function Features() {
  return (
    <section className="py-20 lg:py-28 bg-white dark:bg-slate-900 relative">
      <div className="section-container">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 text-xs font-bold uppercase tracking-wider">
            <span>Technologies & Sécurité</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-black text-slate-900 dark:text-white tracking-tight">
            Des fonctionnalités créées pour votre{" "}
            <span className="text-emerald-600">tranquillité</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed">
            Chaque détail de Yougoo a été pensé pour éliminer le stress du transport urbain et vous garantir une course sans friction.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feat, index) => {
            const Icon = feat.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className="p-7 rounded-3xl bg-slate-50/70 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/80 hover:border-emerald-500/30 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
              >
                <div
                  className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${feat.color} text-white flex items-center justify-center mb-6 shadow-md shadow-emerald-600/20 group-hover:scale-110 transition-transform duration-300`}
                >
                  <Icon className="w-6 h-6" />
                </div>

                <h3 className="text-xl font-heading font-bold text-slate-900 dark:text-white mb-3">
                  {feat.title}
                </h3>

                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                  {feat.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Extra Banner */}
        <div className="mt-14 text-center">
          <Link
            to="/features"
            className="inline-flex items-center gap-2 text-sm font-heading font-bold text-emerald-600 hover:text-emerald-700 transition-colors"
          >
            <span>Explorer toutes les spécifications techniques de Yougoo</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Features;
