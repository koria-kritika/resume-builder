import { Check, Palette } from "lucide-react";
import React, { useState } from "react";

const ColorPicker = ({ selectedColor, onChange }) => {
  const colors = [
    { name: "Blue", value: "#90bdd4" },
    { name: "Indigo", value: "#6366F1" },
    { name: "Purple", value: "#8B5CF6" },
    { name: "Green", value: "#10B981" },
    { name: "Red", value: "#EF4444" },
    { name: "Orange", value: "#F97316" },
    { name: "Teal", value: "#14B8A6" },
    { name: "Pink", value: "#EC4899" },
    { name: "Gray", value: "#6B7280" },
    { name: "Black", value: "#1F2937" },
    { name: "Olive Green", value: "#4D7C0F" },
    { name: "Forest Green", value: "#065F46" },
    { name: "Muted Brown", value: "#7C3E1D" },
    { name: "Midnight Black", value: "#1F2937" },
    { name: "Slate Gray", value: "#4B5563" },
    { name: "Charcoal", value: "#374151" },
    { name: "Ash Blue", value: "#64748B" },
    { name: "Graphite", value: "#2D2F33" },
    { name: "Electric Purple", value: "#6A5ACD" },
    { name: "Coral Orange", value: "#F97316" },
    { name: "Royal Blue", value: "#3B82F6" },
    { name: "Modern Cyan", value: "#06B6D4" },
    { name: "Cool Mint", value: "#10B981" },
    { name: "Royal Wine", value: "#581C87" },
    { name: "Oxford Blue", value: "#14213D" },
    { name: "Congress Blue", value: "#024059" },
    { name: "Royal Indigo", value: "#4C1D95" },
    { name: "Electric Blue", value: "#2563EB" },
    { name: "Cyber Teal", value: "#0D9488" },
    { name: "Deep Navy", value: "#1E3A8A" },
    { name: "Slate Blue", value: "#475569" },
  ];

  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1 text-sm text-purple-600 bg-linear-to-br from-purple-50 to-purple-100 ring-purple-300 hover:ring transition-all px-3 py-2 rounded-lg"
      >
        <Palette size={16} /> <span className="max-sm:hidden">Accent</span>
      </button>
      {isOpen && (
        <div className="grid grid-cols-4 w-60 gap-2 absolute top-full left-0 right-0 p-3 mt-2 z-10 bg-white rounded-md border border-gray-200 shadow-sm">
          {colors.map((color) => (
            <div
              key={color.value}
              className="relative cursor-pointer group flex flex-col"
              onClick={() => {
                onChange(color.value);
                setIsOpen(false);
              }}
            >
              <div
                className="w-12 h-12 rounded-full border-2 border-transparent group-hover:border-black/25 transition-colors"
                style={{ backgroundColor: color.value }}
              ></div>
              {selectedColor === color.value && (
                <div className="absolute top-0 left-0 right-0 bottom-4.5 flex items-center justify-center">
                  <Check className="size-5 text-white" />
                </div>
              )}
              <p className="text-xs text-center mt-1 text-gray-600">
                {color.name}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ColorPicker;
