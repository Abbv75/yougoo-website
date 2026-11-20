import { motion } from "framer-motion";
import {
  Car,
  TrendingUp,
  Clock,
  ShieldCheck,
  Smartphone,
  ArrowRight,
  CheckCircle2,
  Wallet,
} from "lucide-react";
import { Link } from "react-router-dom";

export function DriverCTA() {
  return (
    <section className="py-20 lg:py-28 bg-emerald-950 text-white relative overflow-hidden">
      {/* Decorative radial glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-600/20 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-teal-500/15 rounded-full blur-[120px] pointer-events-none" />

      <div className="section-container relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Heading and Value Proposition */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 text-xs font-bold uppercase tracking-wider">
              <Car className="w-4 h-4 text-emerald-400" />
              <span>Chauffeurs Partenaires • Yougoo Pro</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-black tracking-tight leading-tight">
              Prenez le volant de vos revenus.{" "}
              <span className="text-emerald-400">Devenez Chauffeur Yougoo Pro</span>.
            </h2>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              Propriétaire de véhicule ou chauffeur professionnel à Bamako ?
              Rejoignez une communauté respectée et bénéficiez d'un flux continu
              de courses sans passer votre journée à attendre au carrefour.
            </p>

            {/* Advantages grid */}
            <div className="grid sm:grid-cols-2 gap-4 pt-2">
              <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-white/5 border border-white/10">
                <Wallet className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <div className="font-heading font-bold text-sm text-white">Revenus Supérieurs</div>
                  <div className="text-xs text-slate-300">Commission la plus avantageuse de Bamako et pourboires 100% pour vous.</div>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-white/5 border border-white/10">
                <Clock className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <div className="font-heading font-bold text-sm text-white">Liberté Totale</div>
                  <div className="text-xs text-slate-300">Activez l'app quand vous voulez. Vous êtes votre propre patron.</div>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-white/5 border border-white/10">
                <Smartphone className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <div className="font-heading font-bold text-sm text-white">Application Yougoo Pro</div>
                  <div className="text-xs text-slate-300">Navigation GPS vocale intégrée et affichage cockpit pensé pour la route.</div>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-white/5 border border-white/10">
                <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <div className="font-heading font-bold text-sm text-white">Paiements Rapides</div>
                  <div className="text-xs text-slate-300">Encaissez immédiatement le cash ou recevez vos virements sur Mobile Money.</div>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <Link
                to="/contact?tab=driver"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-heading font-bold text-sm shadow-xl shadow-emerald-500/20 transition-all hover:-translate-y-0.5"
              >
                <span>Rejoindre Yougoo Pro</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <a
                href="tel:+22374043339"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-white/10 hover:bg-white/20 text-white font-semibold text-sm border border-white/15 transition-colors"
              >
                <span>Appeler le support recrutement</span>
              </a>
            </div>
          </motion.div>

          {/* Right Column: Earnings Calculator Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5"
          >
            <div className="p-7 sm:p-8 rounded-3xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl space-y-6">
              <div className="space-y-1">
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-300">
                  Potentiel d'activité
                </span>
                <h3 className="text-2xl font-heading font-bold text-white">
                  Ce que gagnent nos chauffeurs partenaires
                </h3>
              </div>

              <div className="space-y-4">
                <div className="p-4 rounded-2xl bg-emerald-900/60 border border-emerald-500/30">
                  <div className="text-xs text-emerald-200">Revenus moyens estimés par semaine</div>
                  <div className="text-3xl font-heading font-black text-white mt-1">
                    120 000 — 250 000 <span className="text-emerald-400 text-lg">FCFA</span>
                  </div>
                  <div className="text-[11px] text-slate-300 mt-1">
                    *Selon le volume horaire et la catégorie de véhicule
                  </div>
                </div>

                <div className="space-y-2 text-xs text-slate-200">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span>Prime de démarrage dès la 10ème course validée</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span>Assistance mécanique & réseau de garages partenaires</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span>Support dédié basé à notre bureau de Bamako</span>
                  </div>
                </div>
              </div>

              <Link
                to="/contact?tab=driver"
                className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-white text-emerald-950 font-heading font-bold text-sm hover:bg-emerald-50 transition-colors shadow-md text-center"
              >
                <span>Remplir le formulaire d'inscription</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default DriverCTA;
