import React from "react";

export default function ProductCard({ name, img }) {
  return (
    <div className="bg-gray-100 rounded shadow-sm text-center p-3 hover:shadow-md transition">
      <img src={img} alt={name} className="h-24 w-24 mx-auto object-cover rounded" />
      <p className="mt-2 text-sm font-semibold">{name}</p>
    </div>
  );
}
