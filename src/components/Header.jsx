import React from "react";
import { ShoppingCart, HelpCircle, User } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png"; // Assure-toi que ton logo est dans /src/assets/

export default function Header() {
  return (
    <header className="bg-gray-50 shadow p-4 flex items-center justify-between sticky top-0 z-50">

      {/* Logo + Recherche */}
      <div className="flex items-center space-x-3">
        {/* Lien vers la page d'accueil */}
        <Link to="/">
          <img
            src={logo}
            alt="Agrilouma Logo"
            className="w-12 h-12 object-contain cursor-pointer"
          />
        </Link>

        {/* Barre de recherche */}
        <div className="flex items-center border rounded-full overflow-hidden">
          <input
            type="text"
            placeholder="Chercher un produit, catégorie..."
            className="px-3 py-1 text-sm outline-none w-64"
          />
          <button className="bg-green-600 text-white px-4 py-1 text-sm font-semibold">
            Rechercher
          </button>
        </div>
      </div>

      {/* Menu droit */}
      <div className="flex items-center space-x-6 text-sm font-medium">
        {/* Se connecter */}
        <Link
          to="/auth"
          className="flex items-center space-x-1 hover:text-green-600 transition"
        >
          <User size={16} />
          <span>Se connecter</span>
        </Link>

        {/* Aide */}
        <div className="flex items-center space-x-1 cursor-pointer hover:text-green-600 transition">
          <HelpCircle size={16} />
          <span>Aide</span>
        </div>

        {/* Panier */}
        <Link
          to="/panier"
          className="flex items-center space-x-1 hover:text-green-600 transition"
        >
          <ShoppingCart size={16} />
          <span>Panier</span>
        </Link>
      </div>
    </header>
  );
}