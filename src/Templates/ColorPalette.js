// ColorPalette.js
import React from 'react';

const colors = ['#000000', '#FF0000', '#00FF00', '#0000FF', '#FFFF00', '#FF00FF', '#00FFFF'];

export default function ColorPalette({ onChangeColor }) {
  return (
    <div className="absolute bottom-4 right-4 md:bottom-8 md:right-10 z-10 flex flex-row gap-2 p-2 bg-black bg-opacity-70 rounded-full shadow-md">
      {colors.map((color) => (
        <button
          key={color}
          onClick={() => onChangeColor(color)}
          className="w-6 h-6 md:w-8 md:h-8 rounded-full border-2 border-white cursor-pointer transition-transform duration-300 transform hover:scale-110"
          style={{ backgroundColor: color }}
        />
      ))}
    </div>
  );
}
