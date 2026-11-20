import { motion } from "framer-motion";
import {
  Shield,
  Lock,
  FileText,
  UserCheck,
  CreditCard,
  Clock,
  Car,
  AlertTriangle,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/sections/Footer";

interface PoliticCardProps {
  title: string;
  icon: React.ElementType;
  children: React.ReactNode;
}

const PoliticCard = ({ title, icon: Icon, children }: PoliticCardProps) => (
  <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-emerald-500/20 shadow-md space-y-4">
    <div className="flex items-center gap-3">
      <div className="w-10 h-10 rounded-xl bg-emerald-100 dark:bg-emerald-950 text-emerald-600 flex items-center justify-center shrink-0">
        <Icon className="w-5 h-5" />
      </div>
      <h3 className="text-xl font-heading font-bold text-slate-900 dark:text-white">
        {title}
      </h3>
    </div>
    <div className="space-y-3 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
      {children}
    </div>
  </div>
);

export function PoliticsPage() {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />

      <main className="pt-28 lg:pt-36 pb-20">
        <div className="section-container mb-16 text-center space-y-4 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 text-xs font-bold uppercase tracking-wider">
            <Shield className="w-3.5 h-3.5 text-emerald-600" />
            <span>Cadre Légal & Sécurité</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-black text-slate-900 dark:text-white tracking-tight">
            Politiques, Confidentialité &{" "}
            <span className="text-emerald-600">Conditions</span>
          </h1>

          <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed">
            Transparence, respect de la vie privée et sécurité de nos passagers et chauffeurs à Bamako.
          </p>
        </div>

        <div className="section-container max-w-4xl space-y-8">
          {/* Card 1: Mentions légales */}
          <PoliticCard title="1. Mentions Légales & Éditeur" icon={FileText}>
            <p>
              La plateforme <strong>Yougoo</strong> (comprenant l'application passager Yougoo Client, l'application chauffeur Yougoo Pro et la solution Yougoo Pay) est éditée et exploitée par la société <strong>ecoBoosterLink</strong>, société de droit malien immatriculée au Registre du Commerce et du Crédit Mobilier (RCCM) de Bamako.
            </p>
            <p>
              <strong>Siège social :</strong> Bamako, District de Bamako, République du Mali.
            </p>
            <p>
              <strong>Contact officiel :</strong> +223 74 04 33 39 | ecoboosterlink@gmail.com
            </p>
          </PoliticCard>

          {/* Card 2: Données personnelles */}
          <PoliticCard title="2. Protection des Données Personnelles" icon={Lock}>
            <p>
              Nous collectons uniquement les données strictement nécessaires au bon déroulement de vos courses : numéro de téléphone pour l'authentification, coordonnées GPS pour la mise en relation et le calcul d'itinéraire, et historique des transactions.
            </p>
            <p>
              Vos données ne sont <strong>jamais revendues</strong> à des tiers. La localisation du passager n'est partagée avec le chauffeur que pendant la durée de la course active et s'interrompt dès la fin du trajet.
            </p>
            <p>
              Conformément à la législation malienne sur la protection des données à caractère personnel (Loi n° 2013-015), vous disposez d'un droit permanent d'accès, de rectification et de suppression de vos données sur simple demande à notre support.
            </p>
          </PoliticCard>

          {/* Card 3: CGU Passagers */}
          <PoliticCard title="3. Conditions Générales d'Utilisation (Passagers)" icon={UserCheck}>
            <p>
              En confirmant une course sur Yougoo, le passager s'engage à être présent au point de rendez-vous indiqué. Le tarif affiché à l'écran avant confirmation est ferme et définitif, sauf en cas de modification d'itinéraire ou d'arrêts intermédiaires demandés expressément par le passager en cours de route.
            </p>
            <p>
              Le règlement s'effectue en espèces en FCFA directement auprès du chauffeur ou par débit automatique du solde Yougoo Pay. En cas d'annulation abusive après l'arrivée du chauffeur sur le lieu de prise en charge, des frais d'annulation forfaitaires peuvent être appliqués.
            </p>
          </PoliticCard>

          {/* Card 4: Charte Chauffeurs Yougoo Pro */}
          <PoliticCard title="4. Charte des Chauffeurs Partenaires Yougoo Pro" icon={Car}>
            <p>
              Tout chauffeur partenaire s'engage à respecter le code de la route malien, à maintenir son véhicule en parfait état de propreté mécanique et esthétique, et à faire preuve de courtoisie exemplaire (accueil Diatiguiya).
            </p>
            <p>
              Tout comportement discriminatoire, refus injustifié de prise en charge, ou tentative de négociation tarifaire en dehors de l'application entraîne la suspension immédiate du compte partenaire.
            </p>
          </PoliticCard>

          {/* Card 5: Sécurité des paiements */}
          <PoliticCard title="5. Sécurité des Transactions & Yougoo Pay" icon={CreditCard}>
            <p>
              Les rechargements Yougoo Pay effectués par Mobile Money (Orange Money, Wave, Moov Africa) ou carte bancaire sont sécurisés par des protocoles bancaires chiffrés de bout en bout (TLS 1.3 / HTTPS). Aucun identifiant bancaire ni code secret n'est conservé sur nos serveurs.
            </p>
          </PoliticCard>

          {/* Card 6: Droit applicable */}
          <PoliticCard title="6. Droit Applicable & Résolution des Litiges" icon={Shield}>
            <p>
              Les présentes conditions sont régies par le droit de la République du Mali. En cas de différend relatif à l'interprétation ou à l'exécution du service, une solution amiable sera systématiquement recherchée avec notre service client. À défaut d'accord, les tribunaux compétents du District de Bamako seront seuls habilités.
            </p>
          </PoliticCard>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default PoliticsPage;
