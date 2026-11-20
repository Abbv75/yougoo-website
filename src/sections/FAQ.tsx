import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";
import { Link } from "react-router-dom";

const faqs = [
  {
    q: "Comment réserver une course sur Yougoo ?",
    a: "Téléchargez l'application Yougoo sur iOS ou Android, créez votre compte avec votre numéro de téléphone en 30 secondes. Indiquez votre destination, choisissez la catégorie de véhicule souhaitée (Standard, Confort, Taxi) et validez. Votre chauffeur le plus proche arrive en quelques minutes.",
  },
  {
    q: "Comment les tarifs sont-ils calculés ? Y a-t-il des frais cachés ?",
    a: "Aucun frais caché ni mauvaise surprise. Le tarif en FCFA est calculé précisément selon la distance de l'itinéraire et l'état estimé de la circulation, puis verrouillé avant votre confirmation. Le montant affiché à l'écran est le montant exact que vous réglez.",
  },
  {
    q: "Quels sont les moyens de paiement acceptés ?",
    a: "Yougoo accepte deux modes de paiement très pratiques : en espèces (FCFA) directement remises au chauffeur à la fin de la course, ou de manière digitale et sans contact via votre portefeuille in-app Yougoo Pay (rechargeable par Orange Money, Wave, Moov Africa et carte bancaire).",
  },
  {
    q: "Quelles sont les zones couvertes par Yougoo à Bamako ?",
    a: "Yougoo couvre l'ensemble des 6 communes du District de Bamako (ACI 2000, Badalabougou, Hamdallaye, Faladié, Hippodrome, Titibougou, Sébénikoro, Cité Administrative, Point G, Yirimadio...) ainsi que les liaisons directes vers l'Aéroport International Modibo Keïta de Sénou et les grands axes périphériques.",
  },
  {
    q: "Comment la sécurité des passagers est-elle garantie ?",
    a: "Tous nos chauffeurs partenaires font l'objet d'un contrôle rigoureux : permis de conduire valide, antécédents vérifiés, inspection technique du véhicule. Pendant la course, vous pouvez partager votre trajet en temps réel avec vos proches et déclencher le bouton SOS d'assistance 24/7 en un clic.",
  },
  {
    q: "Comment puis-je devenir chauffeur partenaire Yougoo Pro ?",
    a: "Si vous possédez un véhicule récent en bon état et un permis de conduire valide, vous pouvez postuler directement en ligne via notre onglet 'Devenir Chauffeur' ou vous rendre à notre bureau de Bamako. Vous recevrez une formation rapide et commencerez à générer des revenus dès votre activation.",
  },
  {
    q: "Que faire si j'ai oublié un objet personnel dans la voiture ?",
    a: "Rendez-vous dans la rubrique 'Historique' de l'application Yougoo, sélectionnez la course concernée et appuyez sur 'Signaler un objet oublié'. Vous pouvez contacter directement le chauffeur ou joindre notre service client local au +223 74 04 33 39 pour une restitution rapide.",
  },
];

export function FAQ() {
  return (
    <section className="py-20 lg:py-28 bg-white dark:bg-slate-900 relative">
      <div className="section-container max-w-4xl">
        {/* Header */}
        <div className="text-center space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 text-xs font-bold uppercase tracking-wider">
            <HelpCircle className="w-3.5 h-3.5 text-emerald-600" />
            <span>Foire Aux Questions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-black text-slate-900 dark:text-white tracking-tight">
            Tout ce que vous devez savoir sur{" "}
            <span className="text-emerald-600">Yougoo</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg">
            Retrouvez les réponses aux questions les plus fréquentes posées par nos utilisateurs et partenaires.
          </p>
        </div>

        {/* Accordion */}
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="p-2 sm:p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/80 data-[state=open]:border-emerald-500/40 transition-colors"
            >
              <AccordionTrigger className="text-base sm:text-lg font-heading font-bold text-slate-900 dark:text-white hover:text-emerald-600 hover:no-underline px-2 py-3">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed px-2 pt-2 pb-4">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        {/* Support Callout */}
        <div className="mt-12 text-center p-6 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-500/20">
          <p className="text-sm font-medium text-slate-700 dark:text-slate-300">
            Vous avez une question spécifique ou besoin d'une assistance directe ?
          </p>
          <div className="mt-3 flex items-center justify-center gap-4">
            <Link
              to="/contact"
              className="text-xs font-heading font-bold text-emerald-700 dark:text-emerald-400 hover:underline"
            >
              Contacter notre service client local →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FAQ;
