// PartSelector.js
import React from 'react';

export default function PartSelector({ selectedPart, onSelectPart, parts }) {
  return (
    <select
      value={selectedPart}
      onChange={(e) => onSelectPart(e.target.value)}
      className="absolute top-16 right-4 md:top-24 md:right-20 z-20 p-2 bg-white text-gray-800 border border-gray-300 rounded-md shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
    >
      <option key="original" value="Diseño Original">Diseño Original</option>
      {parts.map((part, index) => (
        <option key={index} value={part}>
          {part}
        </option>
      ))}
    </select>
  );
}
