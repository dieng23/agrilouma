import React from "react";

export default function Sidebar({ categories, active, setActive }) {
  return (
    <aside className="w-48 bg-white p-3 space-y-3">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => setActive(cat)}
          className={`block w-full py-2 font-semibold rounded ${
            active === cat ? "bg-green-600 text-white" : "bg-green-100"
          }`}
        >
          {cat}
        </button>
      ))}
    </aside>
  );
}