import React from "react";
import { Card } from "antd";

const StatsCard = ({ icon, value, label, suffix }) => {
  return (
    <Card
      className="rounded-xl border border-gray-100 shadow-sm hover:shadow-md hover:border-gray-200 transition-all duration-300"
      bodyStyle={{ padding: "10px 14px" }}
    >
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 flex items-center justify-center rounded-md bg-gray-50 text-gray-600">
          {icon}
        </div>
        <div className="flex flex-col">
          <div className="flex items-baseline gap-1">
            <h3 className="text-base font-semibold text-gray-900 leading-tight">
              {value}
            </h3>
            {suffix && (
              <span className="text-[11px] text-gray-500 font-medium">
                {suffix}
              </span>
            )}
          </div>
          <p className="text-[11px] text-gray-500 mt-0.5">{label}</p>
        </div>
      </div>
    </Card>
  );
};

export default StatsCard;
