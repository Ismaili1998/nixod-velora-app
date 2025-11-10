import React from "react";

const Logo = ({ collapsed }) => {
  return (
    <div className="flex items-center justify-center h-16 px-4 border-b border-gray-100">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-gray-900 rounded flex items-center justify-center">
          <span className="text-white font-bold text-lg">P</span>
        </div>
        {!collapsed && (
          <span className="text-gray-900 font-semibold text-lg">Velora</span>
        )}
      </div>
    </div>
  );
};

export default Logo;
