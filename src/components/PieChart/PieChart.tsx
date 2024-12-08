"use client";

import React from "react";
import { PieChart, Pie, Label } from "recharts";

const chartData = [
  { car: "Sport Car", visitors: 17439, fill: "#0D3559" },
  { car: "SUV", visitors: 9478, fill: "#A6CEF2" },
  { car: "Coupe", visitors: 18197, fill: "#63A9E8" },
  { car: "Hatchback", visitors: 12510, fill: "#2185DE" },
  { car: "MPV", visitors:14406, fill: "#175D9C" },
];

export function PieChartComponent() {
  const totalVisitors = chartData.reduce((acc, curr) => acc + curr.visitors, 0);

  return (
    <div className="w-full max-w-[400px] mx-auto p-4 border rounded shadow">
      <h2 className="text-xl font-bold mb-2">Top 5 Car Rental</h2>
      <PieChart width={300} height={300}>
        <Pie
          data={chartData}
          dataKey="visitors"
          nameKey="browser"
          innerRadius={60}
          outerRadius={100}
          stroke="#fff"
          strokeWidth={2}
        >
          <Label
            content={({ viewBox }) => {
              if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                return (
                  <text
                    x={viewBox.cx}
                    y={viewBox.cy}
                    textAnchor="middle"
                    dominantBaseline="middle"
                    className="text-xl font-bold"
                  >
                    {totalVisitors.toLocaleString()}
                  </text>
                );
              }
            }}
          />
        </Pie>
      </PieChart>
    </div>
  );
}
