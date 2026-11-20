import { motion } from "framer-motion";
import {
  MapPin,
  Heart,
  Zap,
  ShieldCheck,
  Smartphone,
  CheckCircle,
  Sparkles,
} from "lucide-react";

export function StorySection() {
  return (
    <section className="py-20 lg:py-28 bg-gradient-to-b from-slate-900 to-slate-950 text-white relative overflow-hidden">
      {/* Subtle Bogolan background texture */}
      <div className="absolute inset-0 opacity-10 pointer-events-none mix-blend-overlay">
        <img
          src="/bogolan.png"
          alt="Motif Bogolan"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Ambient Emerald Glows */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-emerald-500/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-teal-500/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="section-container relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Story text & local commitments */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
              <span>Ancrage Local & Fierté Malienne</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-black tracking-tight leading-tight">
              Une technologie mondiale,{" "}
              <span className="text-emerald-400">façonnée pour Bamako</span>.
            </h2>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              Nous connaissons les embouteillages du Pont Fahd, la poussière des
              après-midis chauds, l'urgence des rendez-vous à l'ACI 2000 et le
              besoin d'un retour serein après minuit.
            </p>

            <p className="text-slate-400 text-sm leading-relaxed">
              Yougoo n'est pas une simple application importée : c'est un
              écosystème de mobilité conçu sur mesure pour la topographie de
              Bamako. Nous allions l'élégance du design Apple Liquid Glass avec
              l'hospitalité malienne (<strong>Diatiguiya</strong>) et des
              solutions concrètes aux défis du quotidien.
            </p>

            {/* Local Advantages Bento items */}
            <div className="grid sm:grid-cols-2 gap-4 pt-4">
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm space-y-2">
                <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm">
                  <MapPin className="w-4 h-4" />
                  <span>Repères 100% Familiers</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Recherche intuitive par carrefours, monuments, ministères et quartiers connus de tous.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm space-y-2">
                <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm">
                  <Zap className="w-4 h-4" />
                  <span>Résilience Réseau 2G/3G/4G</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Connexion WebSocket robuste : votre commande persiste même en cas de micro-coupure réseau.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm space-y-2">
                <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Paiements Hybrides</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Payez en liquide direct en FCFA ou rechargez votre solde numérique sans frais cachés.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm space-y-2">
                <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm">
                  <Heart className="w-4 h-4" />
                  <span>Chauffeurs Respectueux</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Formation au service client, courtoisie et rigueur pour garantir votre confort.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Visual Screen Preview */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 flex justify-center"
          >
            <div className="relative w-full max-w-sm">
              {/* Outer decorative card */}
              <div className="rounded-[40px] p-2 bg-gradient-to-b from-emerald-500/30 to-white/10 backdrop-blur-xl shadow-2xl border border-emerald-500/20">
                <div className="rounded-[34px] overflow-hidden bg-slate-900 border border-slate-800">
                  <img
                    src="/app-screen-booking.png"
                    alt="Interface de commande Yougoo"
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>

              {/* Floating review card */}
              <div className="absolute -bottom-6 -left-6 bg-slate-900/90 backdrop-blur-xl p-4 rounded-2xl border border-emerald-500/30 shadow-xl max-w-[240px]">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-emerald-400 font-bold text-xs">✦ Yougoo Smart Route</span>
                </div>
                <p className="text-[11px] text-slate-300">
                  Optimisation automatique des axes de circulation à Bamako.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default StorySection;
