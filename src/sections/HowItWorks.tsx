import { motion } from "framer-motion";
import {
  MapPin,
  Car,
  ShieldCheck,
  CreditCard,
  ArrowRight,
  CheckCircle2,
  Navigation,
  Compass,
} from "lucide-react";

interface Step {
  id: string;
  number: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  tag: string;
}

const steps: Step[] = [
  {
    id: "step-1",
    number: "01",
    title: "Indiquez votre destination",
    description:
      "Ouvrez l'application Yougoo. Laissez le GPS vous localiser instantanément ou choisissez votre point de repère à Bamako (ACI 2000, Faladié, Badalabougou, Cité Administrative...).",
    icon: <MapPin className="w-6 h-6 text-emerald-600" />,
    tag: "Précision GPS 3D",
  },
  {
    id: "step-2",
    number: "02",
    title: "Prix garanti & choix du véhicule",
    description:
      "Sélectionnez la catégorie adaptée (Yougoo Standard, Confort climatisé, Taxi ou Pro). Le tarif en FCFA est calculé et bloqué à l'avance sans aucun marchandage.",
    icon: <Car className="w-6 h-6 text-emerald-600" />,
    tag: "0% Négociation",
  },
  {
    id: "step-3",
    number: "03",
    title: "Suivez votre chauffeur en direct",
    description:
      "Votre chauffeur Yougoo Pro est assigné en moins de 30 secondes. Suivez sa progression en temps réel sur la carte avec estimation précise de l'heure d'arrivée.",
    icon: <Compass className="w-6 h-6 text-emerald-600" />,
    tag: "Temps Réel WebSocket",
  },
  {
    id: "step-4",
    number: "04",
    title: "Arrivez détendu & payez facilement",
    description:
      "Profitez d'un habitacle propre et frais. Réglez selon vos préférences : espèces en main ou directement via votre solde numérique Yougoo Pay.",
    icon: <CreditCard className="w-6 h-6 text-emerald-600" />,
    tag: "Espèces ou Yougoo Pay",
  },
];

export function HowItWorks() {
  return (
    <section className="py-20 lg:py-28 bg-slate-50/70 dark:bg-slate-900/40 relative overflow-hidden">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 text-xs font-bold uppercase tracking-wider">
            <span>Simplicité & Efficacité</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-black text-slate-900 dark:text-white tracking-tight">
            Comment fonctionne <span className="text-emerald-600">Yougoo</span> ?
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed">
            De la commande à la destination finale, bénéficiez d'une expérience
            fluide, sécurisée et adaptée aux réalités du trafic de Bamako.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative p-6 sm:p-7 rounded-3xl bg-white dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700/80 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group flex flex-col justify-between"
            >
              {/* Step number badge */}
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-2xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  {step.icon}
                </div>
                <span className="font-heading font-black text-3xl text-slate-200 dark:text-slate-700 group-hover:text-emerald-500/40 transition-colors">
                  {step.number}
                </span>
              </div>

              {/* Step content */}
              <div className="space-y-3">
                <span className="inline-block text-[11px] font-bold text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950 px-2.5 py-0.5 rounded-full">
                  {step.tag}
                </span>
                <h3 className="text-lg font-heading font-bold text-slate-900 dark:text-white leading-snug">
                  {step.title}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Progress connector indicator */}
              <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-700/50 flex items-center text-xs font-semibold text-emerald-600 dark:text-emerald-400 gap-1.5">
                <span>Étape {step.number}</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Feature highlight bar */}
        <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-emerald-900 text-white flex flex-col lg:flex-row items-center justify-between gap-6 shadow-xl shadow-emerald-950/20">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-8 h-8 text-emerald-400" />
            </div>
            <div>
              <h4 className="text-lg font-heading font-bold">
                Sécurité & Chauffeurs Vérifiés à 100%
              </h4>
              <p className="text-sm text-emerald-200">
                Identité validée, permis de conduire contrôlé et véhicule inspecté avant toute validation.
              </p>
            </div>
          </div>

          <a
            href="#telecharger"
            className="shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-emerald-900 font-heading font-bold text-sm hover:bg-emerald-50 transition-colors shadow-sm"
          >
            <span>Tester Yougoo Maintenant</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
