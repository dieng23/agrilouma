import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-100 p-6 text-center text-sm mt-10">
      <p className="font-semibold">
        Des produits 100% locales chez <span className="text-green-600">Agri-LOUMA</span>
      </p>

      <div className="mt-3 space-y-1">
        <p>Tel: +221 77 832 58 56 / +221 77 283 04 33</p>
        <p>Recevoir les informations par courrier électronique</p>
      </div>

      <div className="mt-2">
        <input
          type="email"
          placeholder="Votre email"
          className="border px-3 py-1 rounded text-sm"
        />
      </div>
    </footer>
  );
}
