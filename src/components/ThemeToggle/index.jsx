import React from "react";

const ThemeToggle = ({ theme = "light", onToggle }) => {
  return (
    <div
      className="flex items-center gap-2 text-sm text-gray-600 cursor-pointer hover:text-gray-900 transition-colors"
      onClick={onToggle}
    >
      <div className="w-2 h-2 rounded-full bg-gray-400"></div>
      <span>{theme === "light" ? "Light" : "Dark"}</span>
    </div>
  );
};

export default ThemeToggle;
