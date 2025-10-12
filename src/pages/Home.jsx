import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import ProductCard from "../components/ProductCard";

export default function Home() {
  const [active, setActive] = useState("Tous les produits");

  const categories = ["Tous les produits", "Fruits", "Légumes", "Céréales", "Aliments"];

  const products = [
    { name: "Concombres", img: "/images/concombre.jpg" },
    { name: "Maïs", img: "/images/mais.jpg" },
    { name: "Chou", img: "/images/chou.jpg" },
    { name: "Laitue", img: "/images/laitue.jpg" },
    { name: "Lentille", img: "/images/lentille.jpg" },
    { name: "Avocats", img: "/images/avocats.jpg" },
    { name: "Bananes", img: "/images/banane.jpg" },
    { name: "Piment", img: "/images/piment.jpg" },
    { name: "Ail", img: "/images/ail.jpg" },
    { name: "Oranges", img: "/images/orange.jpg" },
    { name: "Pastèques", img: "/images/pasteque.jpg" },
    { name: "Aubergines", img: "/images/aubergine.jpg" },
    { name: "Oignons", img: "/images/oignon.jpg" },
    { name: "Poivron", img: "/images/poivron.jpg" },
    { name: "Carottes", img: "/images/carotte.jpg" },
    { name: "Chou fleurs", img: "/images/choufleur.jpg" },
    { name: "Confitures", img: "/images/confiture.jpg" },
    { name: "Niébé", img: "/images/niebe.jpg" },
  ];

  return (
    <div className="flex mt-5">
      <Sidebar categories={categories} active={active} setActive={setActive} />

      <main className="flex-1 px-5">
        <h1 className="text-xl font-bold mb-4">
          Bienvenue au marché local
        </h1>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {products.map((p, i) => (
            <ProductCard key={i} {...p} />
          ))}
        </div>
      </main>
    </div>
  );
}