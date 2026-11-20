import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { motion } from "framer-motion";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Car,
  User,
  ShieldCheck,
  Send,
  CheckCircle2,
  HelpCircle,
  Briefcase,
  Smartphone,
} from "lucide-react";
import { toast } from "sonner";
import Navbar from "@/components/Navbar";
import Footer from "@/sections/Footer";

export function ContactPage() {
  const [searchParams] = useSearchParams();
  const initialTab = searchParams.get("tab") === "driver" ? "driver" : "passenger";
  const [activeTab, setActiveTab] = useState<"passenger" | "driver" | "business">(initialTab);

  useEffect(() => {
    if (searchParams.get("tab") === "driver") {
      setActiveTab("driver");
    }
  }, [searchParams]);

  // Passenger form state
  const [passengerForm, setPassengerForm] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "Aide générale",
    message: "",
  });

  // Driver form state
  const [driverForm, setDriverForm] = useState({
    fullName: "",
    phone: "",
    cityZone: "ACI 2000",
    carModel: "",
    carYear: "2018",
    hasLicense: "yes",
    experienceYears: "2",
  });

  // Business form state
  const [businessForm, setBusinessForm] = useState({
    companyName: "",
    contactPerson: "",
    phone: "",
    email: "",
    estimatedRidesMonth: "50+",
    message: "",
  });

  const handlePassengerSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Votre message a été transmis avec succès !", {
      description: "Notre équipe du support client à Bamako vous contactera sous 2 heures.",
    });
    setPassengerForm({ name: "", phone: "", email: "", subject: "Aide générale", message: "" });
  };

  const handleDriverSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Candidature Yougoo Pro bien reçue !", {
      description: "Notre responsable recrutement vous appellera au numéro indiqué pour planifier votre session d'activation.",
    });
    setDriverForm({
      fullName: "",
      phone: "",
      cityZone: "ACI 2000",
      carModel: "",
      carYear: "2018",
      hasLicense: "yes",
      experienceYears: "2",
    });
  };

  const handleBusinessSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Demande d'ouverture de compte Entreprise reçue !", {
      description: "Un conseiller dédié vous transmettra notre proposition tarifaire corporate.",
    });
    setBusinessForm({
      companyName: "",
      contactPerson: "",
      phone: "",
      email: "",
      estimatedRidesMonth: "50+",
      message: "",
    });
  };

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />

      <main className="pt-28 lg:pt-36 pb-20">
        {/* Header */}
        <div className="section-container mb-16 text-center space-y-4 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 text-xs font-bold uppercase tracking-wider">
            <Mail className="w-3.5 h-3.5 text-emerald-600" />
            <span>Contact & Recrutement</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-black text-slate-900 dark:text-white tracking-tight">
            Nous sommes à votre{" "}
            <span className="text-emerald-600">écoute à Bamako</span>
          </h1>

          <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed">
            Une question sur une course, une candidature chauffeur Yougoo Pro ou une demande d'ouverture de compte entreprise ? Écrivez-nous.
          </p>
        </div>

        <div className="section-container">
          <div className="grid lg:grid-cols-12 gap-12">
            {/* Left: Contact Info & Bureau Bamako */}
            <div className="lg:col-span-5 space-y-8">
              <div className="glass-panel p-8 rounded-3xl border border-emerald-500/20 shadow-xl space-y-6">
                <h3 className="text-2xl font-heading font-bold text-slate-900 dark:text-white">
                  Coordonnées Officielles
                </h3>

                <div className="space-y-5 text-sm text-slate-600 dark:text-slate-300">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-emerald-100 dark:bg-emerald-950 text-emerald-600 flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-heading font-bold text-slate-900 dark:text-white">
                        Bureau Principal
                      </div>
                      <div>Bamako, District de Bamako, Mali</div>
                      <div className="text-xs text-slate-500">Zone ACI 2000 & Hamdallaye</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-emerald-100 dark:bg-emerald-950 text-emerald-600 flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-heading font-bold text-slate-900 dark:text-white">
                        Ligne Téléphonique & WhatsApp
                      </div>
                      <a
                        href="tel:+22374043339"
                        className="text-emerald-600 font-semibold hover:underline"
                      >
                        +223 74 04 33 39
                      </a>
                      <div className="text-xs text-slate-500">Disponible 24h/24 et 7j/7</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-emerald-100 dark:bg-emerald-950 text-emerald-600 flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-heading font-bold text-slate-900 dark:text-white">
                        Courrier Électronique
                      </div>
                      <a
                        href="mailto:ecoboosterlink@gmail.com"
                        className="text-emerald-600 font-semibold hover:underline"
                      >
                        ecoboosterlink@gmail.com
                      </a>
                      <div className="text-xs text-slate-500">Réponse sous 2 heures ouvrées</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-emerald-100 dark:bg-emerald-950 text-emerald-600 flex items-center justify-center shrink-0">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-heading font-bold text-slate-900 dark:text-white">
                        Heures d'Ouverture du Bureau
                      </div>
                      <div>Lundi au Samedi : 08h00 — 19h00</div>
                      <div className="text-xs text-slate-500">Centrale d'assistance active 24/7</div>
                    </div>
                  </div>
                </div>

                {/* Assurance box */}
                <div className="pt-4 border-t border-slate-200 dark:border-slate-800">
                  <div className="flex items-center gap-2 text-xs font-semibold text-emerald-700 dark:text-emerald-400">
                    <ShieldCheck className="w-4 h-4 text-emerald-600" />
                    <span>ecoBoosterLink — Enregistré au Registre du Commerce du Mali</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Dynamic Multi-tab Form */}
            <div className="lg:col-span-7">
              <div className="glass-panel p-6 sm:p-10 rounded-3xl border border-emerald-500/20 shadow-xl">
                {/* Tabs Switcher */}
                <div className="flex flex-wrap gap-2 p-1.5 bg-slate-100 dark:bg-slate-800/80 rounded-2xl mb-8">
                  <button
                    onClick={() => setActiveTab("passenger")}
                    className={`flex-1 py-2.5 px-3 rounded-xl text-xs sm:text-sm font-heading font-bold transition-all ${
                      activeTab === "passenger"
                        ? "bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow-sm"
                        : "text-slate-600 dark:text-slate-400 hover:text-slate-900"
                    }`}
                  >
                    Passager / Support
                  </button>

                  <button
                    onClick={() => setActiveTab("driver")}
                    className={`flex-1 py-2.5 px-3 rounded-xl text-xs sm:text-sm font-heading font-bold transition-all flex items-center justify-center gap-1.5 ${
                      activeTab === "driver"
                        ? "bg-emerald-600 text-white shadow-sm"
                        : "text-slate-600 dark:text-slate-400 hover:text-emerald-600"
                    }`}
                  >
                    <Car className="w-3.5 h-3.5" />
                    <span>Devenir Chauffeur Pro</span>
                  </button>

                  <button
                    onClick={() => setActiveTab("business")}
                    className={`flex-1 py-2.5 px-3 rounded-xl text-xs sm:text-sm font-heading font-bold transition-all ${
                      activeTab === "business"
                        ? "bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow-sm"
                        : "text-slate-600 dark:text-slate-400 hover:text-slate-900"
                    }`}
                  >
                    Entreprises
                  </button>
                </div>

                {/* Tab 1: Passenger Support */}
                {activeTab === "passenger" && (
                  <form onSubmit={handlePassengerSubmit} className="space-y-4">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">
                          Nom & Prénom
                        </label>
                        <input
                          type="text"
                          required
                          value={passengerForm.name}
                          onChange={(e) => setPassengerForm({ ...passengerForm, name: e.target.value })}
                          placeholder="Ex: Awa Traoré"
                          className="w-full text-sm p-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 focus:ring-2 focus:ring-emerald-500"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">
                          Numéro de Téléphone
                        </label>
                        <input
                          type="tel"
                          required
                          value={passengerForm.phone}
                          onChange={(e) => setPassengerForm({ ...passengerForm, phone: e.target.value })}
                          placeholder="+223 70 00 00 00"
                          className="w-full text-sm p-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 focus:ring-2 focus:ring-emerald-500"
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">
                          Email (Optionnel)
                        </label>
                        <input
                          type="email"
                          value={passengerForm.email}
                          onChange={(e) => setPassengerForm({ ...passengerForm, email: e.target.value })}
                          placeholder="votre.email@gmail.com"
                          className="w-full text-sm p-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 focus:ring-2 focus:ring-emerald-500"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">
                          Objet de votre demande
                        </label>
                        <select
                          value={passengerForm.subject}
                          onChange={(e) => setPassengerForm({ ...passengerForm, subject: e.target.value })}
                          className="w-full text-sm p-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 focus:ring-2 focus:ring-emerald-500"
                        >
                          <option value="Aide générale">Aide générale</option>
                          <option value="Objet oublié dans un véhicule">Objet oublié dans un véhicule</option>
                          <option value="Question sur un tarif ou reçu">Question sur un tarif ou reçu</option>
                          <option value="Problème avec Yougoo Pay">Problème avec Yougoo Pay</option>
                          <option value="Autre réclamation">Autre réclamation</option>
                        </select>
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">
                        Votre message
                      </label>
                      <textarea
                        required
                        rows={4}
                        value={passengerForm.message}
                        onChange={(e) => setPassengerForm({ ...passengerForm, message: e.target.value })}
                        placeholder="Décrivez votre situation..."
                        className="w-full text-sm p-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 focus:ring-2 focus:ring-emerald-500"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3.5 px-6 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-heading font-bold text-sm shadow-md shadow-emerald-600/25 transition-all flex items-center justify-center gap-2"
                    >
                      <Send className="w-4 h-4" />
                      <span>Envoyer le message</span>
                    </button>
                  </form>
                )}

                {/* Tab 2: Driver Application */}
                {activeTab === "driver" && (
                  <form onSubmit={handleDriverSubmit} className="space-y-4">
                    <div className="p-3.5 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-500/20 text-xs text-emerald-800 dark:text-emerald-300">
                      <strong>Rejoignez Yougoo Pro :</strong> Remplissez ce formulaire express. Notre équipe de Bamako vous convoquera pour l'inspection du véhicule et l'activation immédiate de votre compte.
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">
                          Nom complet
                        </label>
                        <input
                          type="text"
                          required
                          value={driverForm.fullName}
                          onChange={(e) => setDriverForm({ ...driverForm, fullName: e.target.value })}
                          placeholder="Ex: Mamadou Diarra"
                          className="w-full text-sm p-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 focus:ring-2 focus:ring-emerald-500"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">
                          Téléphone mobile
                        </label>
                        <input
                          type="tel"
                          required
                          value={driverForm.phone}
                          onChange={(e) => setDriverForm({ ...driverForm, phone: e.target.value })}
                          placeholder="+223 7X XX XX XX"
                          className="w-full text-sm p-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 focus:ring-2 focus:ring-emerald-500"
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">
                          Modèle & Marque du véhicule
                        </label>
                        <input
                          type="text"
                          required
                          value={driverForm.carModel}
                          onChange={(e) => setDriverForm({ ...driverForm, carModel: e.target.value })}
                          placeholder="Ex: Toyota Yaris / Corolla"
                          className="w-full text-sm p-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 focus:ring-2 focus:ring-emerald-500"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">
                          Année du véhicule
                        </label>
                        <input
                          type="text"
                          required
                          value={driverForm.carYear}
                          onChange={(e) => setDriverForm({ ...driverForm, carYear: e.target.value })}
                          placeholder="Ex: 2018"
                          className="w-full text-sm p-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 focus:ring-2 focus:ring-emerald-500"
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">
                          Zone de résidence à Bamako
                        </label>
                        <input
                          type="text"
                          required
                          value={driverForm.cityZone}
                          onChange={(e) => setDriverForm({ ...driverForm, cityZone: e.target.value })}
                          placeholder="Ex: Faladié, Hamdallaye, ACI..."
                          className="w-full text-sm p-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 focus:ring-2 focus:ring-emerald-500"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">
                          Permis de conduire valide
                        </label>
                        <select
                          value={driverForm.hasLicense}
                          onChange={(e) => setDriverForm({ ...driverForm, hasLicense: e.target.value })}
                          className="w-full text-sm p-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 focus:ring-2 focus:ring-emerald-500"
                        >
                          <option value="yes">Oui, permis B valide</option>
                          <option value="pro">Oui, permis professionnel / transport</option>
                        </select>
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3.5 px-6 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-heading font-bold text-sm shadow-md shadow-emerald-600/25 transition-all flex items-center justify-center gap-2"
                    >
                      <Car className="w-4 h-4" />
                      <span>Soumettre ma candidature Yougoo Pro</span>
                    </button>
                  </form>
                )}

                {/* Tab 3: Business Corporate */}
                {activeTab === "business" && (
                  <form onSubmit={handleBusinessSubmit} className="space-y-4">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">
                          Nom de l'entreprise
                        </label>
                        <input
                          type="text"
                          required
                          value={businessForm.companyName}
                          onChange={(e) => setBusinessForm({ ...businessForm, companyName: e.target.value })}
                          placeholder="Ex: Société Sahélienne SARL"
                          className="w-full text-sm p-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 focus:ring-2 focus:ring-emerald-500"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">
                          Responsable / Fonction
                        </label>
                        <input
                          type="text"
                          required
                          value={businessForm.contactPerson}
                          onChange={(e) => setBusinessForm({ ...businessForm, contactPerson: e.target.value })}
                          placeholder="Ex: Oumar Sissoko (DG)"
                          className="w-full text-sm p-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 focus:ring-2 focus:ring-emerald-500"
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">
                          Téléphone
                        </label>
                        <input
                          type="tel"
                          required
                          value={businessForm.phone}
                          onChange={(e) => setBusinessForm({ ...businessForm, phone: e.target.value })}
                          placeholder="+223 70 00 00 00"
                          className="w-full text-sm p-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 focus:ring-2 focus:ring-emerald-500"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">
                          Volume estimé de courses / mois
                        </label>
                        <select
                          value={businessForm.estimatedRidesMonth}
                          onChange={(e) => setBusinessForm({ ...businessForm, estimatedRidesMonth: e.target.value })}
                          className="w-full text-sm p-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 focus:ring-2 focus:ring-emerald-500"
                        >
                          <option value="10-50">10 à 50 courses / mois</option>
                          <option value="50-150">50 à 150 courses / mois</option>
                          <option value="150+">Plus de 150 courses / mois</option>
                        </select>
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">
                        Besoins particuliers
                      </label>
                      <textarea
                        rows={3}
                        value={businessForm.message}
                        onChange={(e) => setBusinessForm({ ...businessForm, message: e.target.value })}
                        placeholder="Transferts aéroport réguliers, navette collaborateurs, facturation fin de mois..."
                        className="w-full text-sm p-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 focus:ring-2 focus:ring-emerald-500"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3.5 px-6 rounded-xl bg-slate-900 dark:bg-emerald-600 hover:bg-slate-800 dark:hover:bg-emerald-700 text-white font-heading font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2"
                    >
                      <Briefcase className="w-4 h-4" />
                      <span>Demander une convention entreprise</span>
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default ContactPage;
