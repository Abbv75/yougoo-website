import { useState } from "react";
import { motion } from "framer-motion";
import {
  Car,
  Wind,
  Shield,
  Plane,
  Briefcase,
  Package,
  MapPin,
  Clock,
  ArrowRight,
  CheckCircle2,
  Check,
  Star,
  Sparkles,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/sections/Footer";

// Comprehensive Bamako districts & landmarks
const BAMAKO_STATIONS = [
  { id: "aci2000", name: "ACI 2000 (Place CAN / Ambassades)", zone: "Commune IV" },
  { id: "badalabougou", name: "Badalabougou (Colline / Amphi)", zone: "Commune V" },
  { id: "hamdallaye", name: "Hamdallaye ACI", zone: "Commune IV" },
  { id: "hippodrome", name: "Hippodrome (Rue Princesse)", zone: "Commune II" },
  { id: "cite_admin", name: "Cité Administrative", zone: "Commune III" },
  { id: "marche", name: "Grand Marché / Dabanani", zone: "Commune III" },
  { id: "faladie", name: "Faladié (Tour de l'Afrique)", zone: "Commune VI" },
  { id: "yirimadio", name: "Yirimadio (Stade du 26 Mars)", zone: "Commune VI" },
  { id: "sotuba", name: "Sotuba (Troisième Pont)", zone: "Commune I" },
  { id: "pointg", name: "Point G (Hôpital)", zone: "Commune III" },
  { id: "aeroport", name: "Aéroport Int. Modibo Keïta (Sénou)", zone: "Sénou" },
];

export function ServicesPage() {
  const [origin, setOrigin] = useState("aci2000");
  const [destination, setDestination] = useState("aeroport");

  // Realistic dynamic pricing algorithm for Bamako
  const getRouteMetrics = () => {
    if (origin === destination) {
      return { distanceKm: 2, durationMin: 6, basePrice: 1250 };
    }
    const isAirport = origin === "aeroport" || destination === "aeroport";
    const isYirimadio = origin === "yirimadio" || destination === "yirimadio";
    const isPointG = origin === "pointg" || destination === "pointg";

    if (isAirport) {
      return { distanceKm: 22, durationMin: 35, basePrice: 8000 };
    }
    if (isYirimadio) {
      return { distanceKm: 14, durationMin: 28, basePrice: 3500 };
    }
    if (isPointG) {
      return { distanceKm: 9, durationMin: 22, basePrice: 3000 };
    }
    return { distanceKm: 6.5, durationMin: 15, basePrice: 2000 };
  };

  const metrics = getRouteMetrics();
  const originName = BAMAKO_STATIONS.find((s) => s.id === origin)?.name;
  const destName = BAMAKO_STATIONS.find((s) => s.id === destination)?.name;

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />

      <main className="pt-28 lg:pt-36 pb-20">
        {/* Page Hero */}
        <div className="section-container mb-16 text-center space-y-4 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 text-xs font-bold uppercase tracking-wider">
            <Car className="w-3.5 h-3.5 text-emerald-600" />
            <span>Grille & Simulateur de Tarifs</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-black text-slate-900 dark:text-white tracking-tight">
            Des services taillés pour{" "}
            <span className="text-emerald-600">vos trajets à Bamako</span>
          </h1>

          <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed">
            Transparence intégrale, absence totale de marchandage et véhicules
            sélectionnés pour votre sérénité.
          </p>
        </div>

        {/* Interactive Bamako Fare Simulator */}
        <section className="section-container mb-24">
          <div className="glass-panel p-6 sm:p-10 rounded-3xl border border-emerald-500/20 shadow-2xl max-w-4xl mx-auto">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 mb-6 pb-6 border-b border-slate-200 dark:border-slate-800">
              <div>
                <h2 className="text-2xl font-heading font-bold text-slate-900 dark:text-white">
                  Simulateur de Tarif en Direct
                </h2>
                <p className="text-xs text-slate-500">
                  Sélectionnez vos repères à Bamako pour connaître instantanément le coût estimé.
                </p>
              </div>
              <span className="text-xs font-semibold px-3 py-1 bg-emerald-50 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-400 rounded-full border border-emerald-500/20">
                100% garanti sans surcoût
              </span>
            </div>

            {/* Selectors */}
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              <div className="space-y-1.5">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-emerald-600" />
                  Point de départ
                </label>
                <select
                  value={origin}
                  onChange={(e) => setOrigin(e.target.value)}
                  className="w-full text-sm font-medium p-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:ring-2 focus:ring-emerald-500"
                >
                  {BAMAKO_STATIONS.map((st) => (
                    <option key={`orig-${st.id}`} value={st.id}>
                      {st.name} ({st.zone})
                    </option>
                  ))}
                </select>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-red-500" />
                  Destination finale
                </label>
                <select
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                  className="w-full text-sm font-medium p-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:ring-2 focus:ring-emerald-500"
                >
                  {BAMAKO_STATIONS.map((st) => (
                    <option key={`dest-${st.id}`} value={st.id}>
                      {st.name} ({st.zone})
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Metrics info pill */}
            <div className="flex flex-wrap items-center justify-between gap-4 p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 mb-8 text-xs text-slate-600 dark:text-slate-300">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-emerald-600" />
                <span>
                  Durée estimée : <strong>~{metrics.durationMin} minutes</strong>
                </span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-emerald-600" />
                <span>
                  Distance : <strong>~{metrics.distanceKm} km</strong>
                </span>
              </div>
              <div className="text-[11px] text-emerald-700 dark:text-emerald-400 font-semibold">
                Itinéraire optimisé par Yougoo Smart Route
              </div>
            </div>

            {/* Calculated Prices across categories */}
            <div className="grid sm:grid-cols-3 gap-4">
              {/* Standard */}
              <div className="p-5 rounded-2xl bg-white dark:bg-slate-800 border-2 border-emerald-500/40 relative shadow-sm">
                <div className="text-[10px] font-bold uppercase tracking-wider text-emerald-600">
                  Yougoo Standard
                </div>
                <div className="text-2xl font-heading font-black text-slate-900 dark:text-white mt-1">
                  {metrics.basePrice.toLocaleString("fr-FR")}{" "}
                  <span className="text-xs font-bold text-emerald-600">FCFA</span>
                </div>
                <div className="text-xs text-slate-500 mt-2">
                  Toyota Yaris, rapide et économique.
                </div>
              </div>

              {/* Confort */}
              <div className="p-5 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 relative shadow-sm">
                <div className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
                  Yougoo Confort
                </div>
                <div className="text-2xl font-heading font-black text-slate-900 dark:text-white mt-1">
                  {Math.round(metrics.basePrice * 1.35).toLocaleString("fr-FR")}{" "}
                  <span className="text-xs font-bold text-emerald-600">FCFA</span>
                </div>
                <div className="text-xs text-slate-500 mt-2">
                  Climatisation garantie, berline spacieuse.
                </div>
              </div>

              {/* Taxi */}
              <div className="p-5 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 relative shadow-sm">
                <div className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
                  Yougoo Taxi
                </div>
                <div className="text-2xl font-heading font-black text-slate-900 dark:text-white mt-1">
                  {Math.round(metrics.basePrice * 0.9).toLocaleString("fr-FR")}{" "}
                  <span className="text-xs font-bold text-emerald-600">FCFA</span>
                </div>
                <div className="text-xs text-slate-500 mt-2">
                  Taxi jaune officiel avec tarif compteur fixé.
                </div>
              </div>
            </div>

            <div className="mt-8 text-center">
              <a
                href="#telecharger"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-heading font-bold text-sm shadow-md shadow-emerald-600/30 transition-all hover:scale-105"
              >
                <span>Commander ce trajet avec l'application</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </section>

        {/* Detailed Service Cards */}
        <section className="section-container space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h2 className="text-3xl font-heading font-black text-slate-900 dark:text-white">
              Catalogue Complet de nos Prestations
            </h2>
            <p className="text-sm text-slate-500">
              Des solutions pensées pour les particuliers, les voyageurs et les professionnels.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="p-7 rounded-3xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 shadow-sm space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 dark:bg-emerald-950 flex items-center justify-center text-emerald-600">
                <Car className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-heading font-bold text-slate-900 dark:text-white">
                Course Quotidienne Express
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                Le moyen le plus rapide de traverser Bamako sans stress. Prise en charge en moins de 3 minutes devant votre porte ou votre bureau.
              </p>
              <div className="pt-2 text-xs font-semibold text-emerald-600">Dès 1 500 FCFA</div>
            </div>

            {/* Card 2 */}
            <div className="p-7 rounded-3xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 shadow-sm space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-blue-50 dark:bg-blue-950 flex items-center justify-center text-blue-600">
                <Plane className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-heading font-bold text-slate-900 dark:text-white">
                Navette Aéroport Modibo Keïta
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                Départ ou arrivée à l'aéroport de Sénou. Suivi des vols en direct, accueil avec pancarte nominative et coffre volumineux pour bagages.
              </p>
              <div className="pt-2 text-xs font-semibold text-blue-600">Tarif fixe 8 000 FCFA</div>
            </div>

            {/* Card 3 */}
            <div className="p-7 rounded-3xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 shadow-sm space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-amber-50 dark:bg-amber-950 flex items-center justify-center text-amber-600">
                <Briefcase className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-heading font-bold text-slate-900 dark:text-white">
                Comptes Entreprises & Pro
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                Centralisez la mobilité de vos collaborateurs et dirigeants. Facturation mensuelle unique, reçus détaillés et gestion via tableau de bord.
              </p>
              <div className="pt-2 text-xs font-semibold text-amber-600">Sur mesure corporate</div>
            </div>

            {/* Card 4 */}
            <div className="p-7 rounded-3xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 shadow-sm space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-purple-50 dark:bg-purple-950 flex items-center justify-center text-purple-600">
                <Wind className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-heading font-bold text-slate-900 dark:text-white">
                Mise à Disposition à l'Heure
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                Besoin d'un chauffeur pour plusieurs rendez-vous successifs, mariages ou délégations ? Réservez à la demi-journée ou journée complète.
              </p>
              <div className="pt-2 text-xs font-semibold text-purple-600">Forfaits horaires flexibles</div>
            </div>

            {/* Card 5 */}
            <div className="p-7 rounded-3xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 shadow-sm space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 dark:bg-emerald-950 flex items-center justify-center text-emerald-600">
                <Package className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-heading font-bold text-slate-900 dark:text-white">
                Yougoo Express Livraison
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                Faites livrer vos plis confidentiels, contrats ou colis urgents en main propre à travers Bamako avec suivi de livraison sécurisé.
              </p>
              <div className="pt-2 text-xs font-semibold text-emerald-600">Livraison express en direct</div>
            </div>

            {/* Card 6 */}
            <div className="p-7 rounded-3xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 shadow-sm space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-teal-50 dark:bg-teal-950 flex items-center justify-center text-teal-600">
                <Shield className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-heading font-bold text-slate-900 dark:text-white">
                Courses de Nuit Sécurisées
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                Rentrez chez vous après un dîner ou un événement nocturne en toute sécurité. Chauffeurs triés sur le volet et surveillance 24/7.
              </p>
              <div className="pt-2 text-xs font-semibold text-teal-600">Disponible 24h/24</div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default ServicesPage;
