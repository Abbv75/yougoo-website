import { motion } from "framer-motion";
import {
  Smartphone,
  Navigation,
  ShieldCheck,
  CreditCard,
  Zap,
  MapPin,
  Lock,
  Layers,
  Sparkles,
  CheckCircle2,
  Cpu,
  Wifi,
  Eye,
  ArrowRight,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/sections/Footer";

export function FeaturesPage() {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />

      <main className="pt-28 lg:pt-36 pb-20">
        {/* Page Hero */}
        <div className="section-container mb-20 text-center space-y-4 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 text-xs font-bold uppercase tracking-wider">
            <Cpu className="w-3.5 h-3.5 text-emerald-600" />
            <span>Ingénierie & Expérience</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-black text-slate-900 dark:text-white tracking-tight">
            Une technologie de pointe pour la{" "}
            <span className="text-emerald-600">mobilité de Bamako</span>
          </h1>

          <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed">
            Découvrez les innovations logicielles et l'attention extrême portée aux détails qui font de Yougoo l'écosystème le plus fiable et fluide du Mali.
          </p>
        </div>

        {/* Feature Block 1: Cartography & Navigation */}
        <section className="section-container mb-24">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center font-bold">
                <Navigation className="w-6 h-6" />
              </div>

              <h2 className="text-3xl font-heading font-black text-slate-900 dark:text-white">
                Cartographie 3D Haute Précision propulsée par MapLibre
              </h2>

              <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm sm:text-base">
                La majorité des applications importées peinent à localiser les
                ruelles ou les adresses informelles de Bamako. Yougoo intègre un
                moteur vectoriel 3D MapLibre nativement synchronisé avec les
                monuments, places et carrefours emblématiques de la capitale.
              </p>

              <div className="space-y-3 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Représentation tridimensionnelle des ponts et grands axes routiers</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Moteur de géocodage inversé intelligent reconnaissant le parler local</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Tracé polyline haute résolution pour anticiper les bouchons</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 flex justify-center">
              <div className="rounded-3xl p-3 bg-slate-900 shadow-2xl max-w-md w-full border border-slate-800">
                <img
                  src="/app-screen-home.png"
                  alt="Cartographie MapLibre Yougoo"
                  className="rounded-2xl w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Feature Block 2: Liquid Glass & BottomSheet UI */}
        <section className="section-container mb-24">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 order-2 lg:order-1 flex justify-center">
              <div className="rounded-3xl p-3 bg-slate-900 shadow-2xl max-w-md w-full border border-slate-800">
                <img
                  src="/app-screen-booking.png"
                  alt="OrderBottomSheet Yougoo"
                  className="rounded-2xl w-full h-auto object-cover"
                />
              </div>
            </div>

            <div className="lg:col-span-6 order-1 lg:order-2 space-y-6">
              <div className="w-12 h-12 rounded-2xl bg-teal-100 text-teal-600 flex items-center justify-center font-bold">
                <Layers className="w-6 h-6" />
              </div>

              <h2 className="text-3xl font-heading font-black text-slate-900 dark:text-white">
                Artisanat Mobile & OrderBottomSheet Apple-Style
              </h2>

              <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm sm:text-base">
                Yougoo est bâti sur React Native 0.88, React 19 et Tamagui.
                Notre volet de commande (<code>OrderBottomSheet</code>) offre un
                geste fluide, dynamique et réactif avec un retour haptique
                vibrant (Expo Haptics) à chaque sélection.
              </p>

              <div className="space-y-3 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Effets de verre translucide Liquid Glass adaptatifs</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Manipulation à une main ultra-ergonomique sur le trottoir</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Contraste élevé certifié pour la forte luminosité ensoleillée</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Feature Block 3: WebSocket Real-time & Network Resilience */}
        <section className="section-container mb-24">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-600 flex items-center justify-center font-bold">
                <Wifi className="w-6 h-6" />
              </div>

              <h2 className="text-3xl font-heading font-black text-slate-900 dark:text-white">
                Résilience Réseau 2G/3G & Synchronisation Temps Réel
              </h2>

              <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm sm:text-base">
                Les coupures de réseau cellulaire sont monnaie courante à
                Bamako. Notre architecture WebSocket propriétaire assure une
                persistance locale de l'état de votre course : si vous perdez le
                signal quelques secondes, la reconnexion est instantanée et
                invisible, sans aucune interruption du trajet.
              </p>

              <div className="space-y-3 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Heartbeat GPS toutes les 10 secondes pour un suivi fluide</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Zustand State Persistence pour préserver vos données en cas de reboot</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Consommation de data réduite pour préserver vos forfaits mobiles</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 flex justify-center">
              <div className="rounded-3xl p-3 bg-slate-900 shadow-2xl max-w-md w-full border border-slate-800">
                <img
                  src="/app-screen-trip.png"
                  alt="Suivi GPS temps réel Yougoo"
                  className="rounded-2xl w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Feature Block 4: Yougoo Pay & Hybrid Payments */}
        <section className="section-container mb-12">
          <div className="p-8 sm:p-12 rounded-3xl bg-emerald-950 text-white relative overflow-hidden shadow-2xl border border-emerald-500/20">
            <div className="grid lg:grid-cols-12 gap-8 items-center relative z-10">
              <div className="lg:col-span-8 space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold uppercase">
                  <CreditCard className="w-4 h-4" />
                  <span>Paiements Hybrides Mali</span>
                </div>

                <h3 className="text-2xl sm:text-4xl font-heading font-black">
                  Yougoo Pay : Le Portefeuille Digital In-App
                </h3>

                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  Pas de monnaie en poche ? Aucun problème. Rechargez votre
                  solde Yougoo Pay en 10 secondes via Orange Money, Wave ou Moov
                  Africa. Votre chauffeur est crédité automatiquement à
                  l'arrivée, sans manipulation de billets. Et pour ceux qui
                  préfèrent les espèces, le cash est bien sûr toujours accepté !
                </p>

                <div className="flex flex-wrap items-center gap-6 pt-2 text-xs text-emerald-200">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span>Rechargement Orange Money & Wave</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span>Zéro frais de transaction</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span>Sécurité bancaire chiffrée</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-4 text-center">
                <div className="p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 inline-block text-left w-full max-w-xs">
                  <div className="text-[10px] text-slate-300 uppercase tracking-wider">
                    Solde Yougoo Pay
                  </div>
                  <div className="text-3xl font-heading font-black text-white mt-1">
                    25 000 <span className="text-emerald-400 text-lg">FCFA</span>
                  </div>
                  <div className="mt-4 pt-3 border-t border-white/10 text-xs text-emerald-300">
                    ✓ Débit automatique sans contact
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default FeaturesPage;
