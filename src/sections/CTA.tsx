import { motion } from "framer-motion";
import {
  Smartphone,
  QrCode,
  ArrowRight,
  ShieldCheck,
  CheckCircle,
  Download,
} from "lucide-react";

export function CTA() {
  return (
    <section id="telecharger" className="py-20 lg:py-28 bg-white dark:bg-slate-900 relative overflow-hidden">
      <div className="section-container">
        <div className="relative rounded-[40px] bg-gradient-to-br from-slate-950 via-emerald-950 to-slate-900 text-white p-8 sm:p-12 lg:p-16 overflow-hidden shadow-2xl border border-emerald-500/20">
          {/* Ambient Glows */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-500/20 rounded-full blur-[140px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-teal-500/15 rounded-full blur-[120px] pointer-events-none" />

          {/* Shimmer line */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent pointer-events-none"
            initial={{ x: "-100%" }}
            animate={{ x: "200%" }}
            transition={{ duration: 3, repeat: Infinity, repeatDelay: 3 }}
          />

          <div className="grid lg:grid-cols-12 gap-10 items-center relative z-10">
            {/* Left Column: Heading and Store Links */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 text-xs font-bold uppercase tracking-wider">
                <Smartphone className="w-3.5 h-3.5 text-emerald-400" />
                <span>Disponible gratuitement</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-black tracking-tight leading-tight">
                Prêt pour votre prochaine course ?{" "}
                <span className="text-emerald-400">Téléchargez Yougoo</span>.
              </h2>

              <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0">
                Installez l'application en quelques secondes et commencez à vous
                déplacer à Bamako sans compromis entre confort, sécurité et
                transparence tarifaire.
              </p>

              {/* Store Buttons */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
                {/* App Store button */}
                <a
                  href="#telecharger"
                  className="flex items-center gap-3 px-5 py-3 rounded-2xl bg-white/10 hover:bg-white/20 border border-white/20 transition-all hover:scale-105 group"
                >
                  <img
                    src="/appStore.png"
                    alt="App Store"
                    className="w-7 h-7 object-contain"
                  />
                  <div className="text-left">
                    <div className="text-[10px] uppercase tracking-wider text-slate-300">
                      Télécharger sur
                    </div>
                    <div className="text-sm font-heading font-bold text-white leading-none">
                      App Store
                    </div>
                  </div>
                </a>

                {/* Google Play button */}
                <a
                  href="#telecharger"
                  className="flex items-center gap-3 px-5 py-3 rounded-2xl bg-white/10 hover:bg-white/20 border border-white/20 transition-all hover:scale-105 group"
                >
                  <img
                    src="/playStore.png"
                    alt="Google Play"
                    className="w-7 h-7 object-contain"
                  />
                  <div className="text-left">
                    <div className="text-[10px] uppercase tracking-wider text-slate-300">
                      DISPONIBLE SUR
                    </div>
                    <div className="text-sm font-heading font-bold text-white leading-none">
                      Google Play
                    </div>
                  </div>
                </a>
              </div>

              {/* Security & Local confirmation */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 pt-4 text-xs text-slate-300">
                <div className="flex items-center gap-1.5">
                  <CheckCircle className="w-4 h-4 text-emerald-400" />
                  <span>Compatible iOS & Android</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle className="w-4 h-4 text-emerald-400" />
                  <span>Installation rapide (&lt; 25 Mo)</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle className="w-4 h-4 text-emerald-400" />
                  <span>Zéro frais d'abonnement</span>
                </div>
              </div>
            </div>

            {/* Right Column: QR Code & Mockup Card */}
            <div className="lg:col-span-5 flex flex-col sm:flex-row items-center justify-center gap-6">
              {/* QR Code Card */}
              <div className="p-6 rounded-3xl bg-white/10 backdrop-blur-xl border border-white/20 text-center space-y-3 w-full max-w-[220px]">
                <div className="p-3 bg-white rounded-2xl mx-auto w-36 h-36 flex items-center justify-center shadow-md">
                  {/* High visual fidelity QR Code SVG pattern */}
                  <svg
                    viewBox="0 0 100 100"
                    className="w-full h-full text-slate-900 fill-current"
                  >
                    <rect x="0" y="0" width="30" height="30" rx="4" />
                    <rect x="5" y="5" width="20" height="20" fill="white" rx="2" />
                    <rect x="10" y="10" width="10" height="10" />

                    <rect x="70" y="0" width="30" height="30" rx="4" />
                    <rect x="75" y="5" width="20" height="20" fill="white" rx="2" />
                    <rect x="80" y="10" width="10" height="10" />

                    <rect x="0" y="70" width="30" height="30" rx="4" />
                    <rect x="5" y="75" width="20" height="20" fill="white" rx="2" />
                    <rect x="10" y="80" width="10" height="10" />

                    <rect x="35" y="10" width="10" height="10" />
                    <rect x="50" y="15" width="15" height="10" />
                    <rect x="35" y="35" width="30" height="30" rx="4" />
                    <rect x="42" y="42" width="16" height="16" fill="white" />
                    <rect x="46" y="46" width="8" height="8" fill="#16a34a" />

                    <rect x="75" y="40" width="20" height="10" />
                    <rect x="75" y="60" width="10" height="25" />
                    <rect x="40" y="75" width="15" height="15" />
                  </svg>
                </div>
                <div className="text-xs font-bold text-white">Scannez pour installer</div>
                <div className="text-[10px] text-slate-300">
                  Ouverture directe du store selon votre téléphone
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CTA;
