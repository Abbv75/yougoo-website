import { MapPin, Phone, Mail, Shield, Smartphone, Heart } from "lucide-react";
import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-10 border-t border-slate-800">
      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-14">
          {/* Column 1: Brand & Presentation */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-950 border border-emerald-500/30 p-1 flex items-center justify-center">
                <img
                  src="/logo.png"
                  alt="Yougoo Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="font-heading font-black text-2xl text-white tracking-tight">
                You<span className="text-emerald-500">goo</span>
              </span>
            </Link>

            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              L'écosystème de mobilité VTC et taxi moderne à Bamako, Mali.
              Courses rapides, chauffeurs vérifiés, prix garantis en FCFA et
              paiements simplifiés.
            </p>

            <div className="pt-2 text-xs text-slate-500 flex items-center gap-1.5">
              <span>Une solution développée avec fierté par</span>
              <strong className="text-slate-300 font-semibold">ecoBoosterLink</strong>
            </div>
          </div>

          {/* Column 2: Services */}
          <div>
            <h4 className="font-heading font-bold text-white text-sm uppercase tracking-wider mb-4">
              Nos Services
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li>
                <Link to="/services#standard" className="hover:text-emerald-400 transition-colors">
                  Yougoo Standard
                </Link>
              </li>
              <li>
                <Link to="/services#confort" className="hover:text-emerald-400 transition-colors">
                  Yougoo Confort Climatisé
                </Link>
              </li>
              <li>
                <Link to="/services#taxi" className="hover:text-emerald-400 transition-colors">
                  Yougoo Taxi Traditionnel
                </Link>
              </li>
              <li>
                <Link to="/services#aeroport" className="hover:text-emerald-400 transition-colors">
                  Navette Aéroport Modibo Keïta
                </Link>
              </li>
              <li>
                <Link to="/services#pro" className="hover:text-emerald-400 transition-colors">
                  Comptes Entreprises & VIP
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Partenaires & Chauffeurs */}
          <div>
            <h4 className="font-heading font-bold text-white text-sm uppercase tracking-wider mb-4">
              Chauffeurs & Pros
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li>
                <Link to="/contact?tab=driver" className="hover:text-emerald-400 transition-colors">
                  Devenir Chauffeur Yougoo Pro
                </Link>
              </li>
              <li>
                <Link to="/features" className="hover:text-emerald-400 transition-colors">
                  Fonctionnalités de l'App
                </Link>
              </li>
              <li>
                <Link to="/politiques#driver-charter" className="hover:text-emerald-400 transition-colors">
                  Charte du Chauffeur Partenaire
                </Link>
              </li>
              <li>
                <Link to="/politiques" className="hover:text-emerald-400 transition-colors">
                  Politique de Confidentialité
                </Link>
              </li>
              <li>
                <Link to="/politiques#cgu" className="hover:text-emerald-400 transition-colors">
                  Conditions Générales (CGU)
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Bureau */}
          <div>
            <h4 className="font-heading font-bold text-white text-sm uppercase tracking-wider mb-4">
              Contact Bamako
            </h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>Bamako, District de Bamako, Mali</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <a href="tel:+22374043339" className="hover:text-emerald-400 transition-colors">
                  +223 74 04 33 39
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-emerald-400 shrink-0" />
                <a
                  href="mailto:ecoboosterlink@gmail.com"
                  className="hover:text-emerald-400 transition-colors"
                >
                  ecoboosterlink@gmail.com
                </a>
              </li>
              <li className="pt-2">
                <span className="inline-block px-2.5 py-1 rounded-md bg-emerald-950 border border-emerald-500/20 text-emerald-300 text-xs font-semibold">
                  Support disponible 24h/24 & 7j/7
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright line */}
        <div className="pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} <strong>Yougoo</strong> by ecoBoosterLink. Tous droits réservés.
          </div>
          <div className="flex items-center gap-6">
            <Link to="/politiques" className="hover:text-slate-300 transition-colors">
              Mentions Légales
            </Link>
            <Link to="/politiques" className="hover:text-slate-300 transition-colors">
              Confidentialité
            </Link>
            <Link to="/contact" className="hover:text-slate-300 transition-colors">
              Assistance
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
