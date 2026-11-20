import { useState, useEffect } from "react";
import { Menu, X, Smartphone, ArrowRight, ShieldCheck } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation, Link } from "react-router-dom";

const navLinks = [
  { label: "Accueil", href: "/" },
  { label: "Services & Tarifs", href: "/services" },
  { label: "Fonctionnalités", href: "/features" },
  { label: "Devenir Chauffeur", href: "/contact?tab=driver" },
  { label: "Contact", href: "/contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (href: string) => {
    if (href === "/") return location.pathname === "/";
    if (href.includes("?")) {
      const [path, query] = href.split("?");
      return location.pathname === path && location.search.includes(query);
    }
    return location.pathname === href;
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/85 dark:bg-slate-950/85 backdrop-blur-xl shadow-sm border-b border-emerald-500/10 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="section-container flex items-center justify-between">
        {/* Brand Logo */}
        <Link
          to="/"
          className="flex items-center gap-3 group"
          onClick={() => setMobileOpen(false)}
        >
          <div className="relative flex items-center justify-center w-12 h-12 rounded-2xl bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-500/20 shadow-sm p-1.5 transition-transform duration-300 group-hover:scale-105">
            <img
              src="/logo.png"
              alt="Yougoo Logo"
              className="w-full h-full object-contain"
            />
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-1.5">
              <span className="font-heading font-black text-2xl tracking-tight text-slate-900 dark:text-white">
                You<span className="text-emerald-600">goo</span>
              </span>
              <span className="px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-wider bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300 rounded-md">
                Bamako
              </span>
            </div>
            <span className="text-[11px] font-medium text-slate-500 dark:text-slate-400">
              VTC & Taxi Mobilité
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1 bg-white/70 dark:bg-slate-900/70 backdrop-blur-md px-3 py-1.5 rounded-full border border-slate-200/80 dark:border-slate-800 shadow-sm">
          {navLinks.map((link) => {
            const active = isActive(link.href);
            return (
              <Link
                key={link.href}
                to={link.href}
                onMouseEnter={() => setHoveredLink(link.href)}
                onMouseLeave={() => setHoveredLink(null)}
                className="relative px-4 py-2 text-sm font-semibold transition-colors duration-200"
              >
                <span
                  className={`relative z-10 transition-colors duration-200 ${
                    active
                      ? "text-emerald-600 dark:text-emerald-400"
                      : "text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white"
                  }`}
                >
                  {link.label}
                </span>

                {/* Active Indicator */}
                {active && (
                  <motion.div
                    layoutId="navbarActiveIndicator"
                    className="absolute inset-0 bg-emerald-50 dark:bg-emerald-950/60 rounded-full -z-0 border border-emerald-500/20"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}

                {/* Hover Underline */}
                {hoveredLink === link.href && !active && (
                  <motion.div
                    layoutId="navbarHoverIndicator"
                    className="absolute bottom-1 left-3 right-3 h-0.5 bg-emerald-400/80 rounded-full"
                    transition={{ duration: 0.2 }}
                  />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Action Button & Store CTA */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            to="/contact?tab=driver"
            className="text-xs font-semibold px-3 py-2 text-slate-600 dark:text-slate-300 hover:text-emerald-600 transition-colors"
          >
            Chauffeur Yougoo Pro ?
          </Link>
          <a
            href="#telecharger"
            className="relative inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-700 hover:to-green-700 text-white font-heading font-semibold text-xs uppercase tracking-wider shadow-lg shadow-emerald-600/25 transition-all duration-300 hover:shadow-emerald-600/40 hover:-translate-y-0.5 overflow-hidden group"
          >
            {/* Shimmer effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
              initial={{ x: "-100%" }}
              animate={{ x: "200%" }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 2.5 }}
            />
            <Smartphone className="w-4 h-4" />
            <span className="relative z-10">Télécharger l'App</span>
          </a>
        </div>

        {/* Mobile Toggle Button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden p-2 text-slate-700 dark:text-slate-200 hover:text-emerald-600 transition-colors"
          aria-label={mobileOpen ? "Fermer le menu" : "Ouvrir le menu"}
        >
          {mobileOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="lg:hidden bg-white/95 dark:bg-slate-950/95 backdrop-blur-2xl border-b border-emerald-500/10 shadow-xl overflow-hidden"
          >
            <div className="section-container py-6 flex flex-col gap-2">
              {navLinks.map((link, index) => {
                const active = isActive(link.href);
                return (
                  <Link
                    key={link.href}
                    to={link.href}
                    onClick={() => setMobileOpen(false)}
                    className={`flex items-center justify-between px-4 py-3 rounded-xl font-medium text-sm transition-all ${
                      active
                        ? "bg-emerald-50 dark:bg-emerald-950/50 text-emerald-600 dark:text-emerald-400 font-semibold"
                        : "text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-900"
                    }`}
                  >
                    <span>{link.label}</span>
                    {active ? (
                      <span className="w-2 h-2 rounded-full bg-emerald-500" />
                    ) : (
                      <ArrowRight className="w-4 h-4 text-slate-400" />
                    )}
                  </Link>
                );
              })}

              <div className="pt-4 mt-2 border-t border-slate-100 dark:border-slate-800 flex flex-col gap-3">
                <a
                  href="#telecharger"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center justify-center gap-2 w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-emerald-600 to-green-600 text-white font-heading font-semibold text-sm shadow-md shadow-emerald-600/25 text-center"
                >
                  <Smartphone className="w-4 h-4" />
                  <span>Télécharger Yougoo App</span>
                </a>
                <Link
                  to="/contact?tab=driver"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center justify-center gap-2 w-full py-3 px-4 rounded-xl bg-emerald-50 dark:bg-emerald-950/50 text-emerald-700 dark:text-emerald-300 font-medium text-xs border border-emerald-500/20 text-center"
                >
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>Devenir Chauffeur Partenaire Yougoo Pro</span>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
