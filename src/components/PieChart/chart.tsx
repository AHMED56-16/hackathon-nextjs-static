import React from "react";
import { Tooltip } from "recharts";

// ChartContainer component to wrap and provide styling to the chart
export function ChartContainer({ children, className = "" }: { children: React.ReactNode, className?: string }) {
  return <div className={`relative ${className}`}>{children}</div>;
}

// ChartTooltip component to customize tooltip behavior and appearance
export function ChartTooltip({ content, cursor }: { content: React.ReactNode, cursor?: boolean }) {
  return <Tooltip content={<>{content}</>} cursor={cursor} />;
}

// ChartTooltipContent component to display custom content in the tooltip
export function ChartTooltipContent({ hideLabel }: { hideLabel?: boolean }) {
  return (
    <div className="bg-white p-2 rounded shadow-lg">
      {!hideLabel && <div className="text-sm font-semibold">Tooltip Content</div>}
    </div>
  );
}
