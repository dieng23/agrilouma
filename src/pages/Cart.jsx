import React from "react";

export default function Cart() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6">
      <h2 className="text-3xl font-bold text-green-700 mb-8 text-center">
        🛒 Mon Panier
      </h2>
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-xl p-6">
        <p className="text-gray-500 text-center">
          Votre panier est vide pour le moment.
        </p>
      </div>
    </div>
  );
}