import { motion } from "framer-motion";
import { Star, Quote, CheckCircle2 } from "lucide-react";

const testimonials = [
  {
    name: "Awa Traoré",
    role: "Consultante Financière",
    location: "ACI 2000, Bamako",
    comment:
      "Travaillant à l'ACI 2000, Yougoo a changé mes matins. Plus besoin de héler des taxis sous le soleil pendant 20 minutes : la voiture arrive climatisée, le chauffeur est poli et le prix en FCFA est connu dès le départ.",
    rating: 5,
    tag: "Passagère régulière",
  },
  {
    name: "Mamadou Diarra",
    role: "Chauffeur Partenaire Yougoo Pro",
    location: "Hamdallaye, Bamako",
    comment:
      "Avant, je tournais dans tout Bamako en brûlant du carburant sans savoir si j'allais trouver un client. Avec Yougoo Pro, les courses s'enchaînent sur mon téléphone et mes revenus ont augmenté de 40% dès le premier mois.",
    rating: 5,
    tag: "Chauffeur Partenaire",
  },
  {
    name: "Fatoumata Keïta",
    role: "Entrepreneure & Créatrice",
    location: "Badalabougou, Bamako",
    comment:
      "La sécurité était mon angoisse principale lors des trajets de nuit. Avec le bouton SOS et le partage de position en direct avec mes proches, je voyage l'esprit tranquille.",
    rating: 5,
    tag: "Passagère",
  },
  {
    name: "Ousmane Coulibaly",
    role: "Directeur des Opérations",
    location: "Cité Administrative, Bamako",
    comment:
      "Pour nos transferts urgents vers l'Aéroport Modibo Keïta de Sénou, Yougoo est d'une ponctualité remarquable. De plus, les reçus électroniques facilitent grandement la comptabilité de notre société.",
    rating: 5,
    tag: "Client Entreprise",
  },
];

export function Testimonials() {
  return (
    <section className="py-20 lg:py-28 bg-slate-50/70 dark:bg-slate-900/40 relative">
      <div className="section-container">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 text-xs font-bold uppercase tracking-wider">
            <span>Témoignages & Confiance</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-black text-slate-900 dark:text-white tracking-tight">
            Ils se déplacent avec{" "}
            <span className="text-emerald-600">Yougoo</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed">
            Découvrez les retours de nos passagers quotidiens et de nos chauffeurs partenaires à travers Bamako.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.1 }}
              className="p-6 rounded-3xl bg-white dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700/80 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-4">
                {/* Stars and Tag */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-amber-500">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-950 px-2 py-0.5 rounded-full">
                    {item.tag}
                  </span>
                </div>

                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed italic">
                  "{item.comment}"
                </p>
              </div>

              {/* Author info */}
              <div className="pt-6 mt-4 border-t border-slate-100 dark:border-slate-700/60 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-emerald-600 to-teal-500 text-white font-heading font-black text-sm flex items-center justify-center shrink-0">
                  {item.name.charAt(0)}
                </div>
                <div>
                  <div className="text-sm font-heading font-bold text-slate-900 dark:text-white flex items-center gap-1">
                    <span>{item.name}</span>
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  </div>
                  <div className="text-xs text-slate-500">{item.role}</div>
                  <div className="text-[11px] text-emerald-600 font-medium">{item.location}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
