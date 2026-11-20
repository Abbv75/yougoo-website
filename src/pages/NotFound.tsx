import { Link } from "react-router-dom";
import { ArrowLeft, Home, Navigation } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/sections/Footer";

export function NotFound() {
  return (
    <div className="min-h-screen bg-background flex flex-col justify-between">
      <Navbar />

      <main className="flex-1 flex items-center justify-center py-32 px-4 text-center">
        <div className="max-w-md space-y-6">
          <div className="w-20 h-20 rounded-3xl bg-emerald-100 dark:bg-emerald-950 text-emerald-600 flex items-center justify-center mx-auto shadow-inner">
            <Navigation className="w-10 h-10 animate-bounce" />
          </div>

          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-600">
              Erreur 404
            </span>
            <h1 className="text-3xl sm:text-4xl font-heading font-black text-slate-900 dark:text-white">
              Destination introuvable
            </h1>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Oups ! Il semble que cet itinéraire n'existe pas ou ait été déplacé.
            </p>
          </div>

          <div className="pt-2">
            <Link
              to="/"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-heading font-bold text-sm shadow-md shadow-emerald-600/30 transition-all hover:scale-105"
            >
              <Home className="w-4 h-4" />
              <span>Retour à l'accueil Yougoo</span>
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default NotFound;
