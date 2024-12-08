import React from "react";

// Basic card components for layout and styling
export function Card({ children, className = "" }: { children: React.ReactNode, className?: string }) {
  return <div className={`border rounded shadow p-4 ${className}`}>{children}</div>;
}

export function CardHeader({ children, className = "" }: { children: React.ReactNode, className?: string }) {
  return <div className={`mb-4 ${className}`}>{children}</div>;
}

export function CardTitle({ children }: { children: React.ReactNode }) {
  return <h2 className="text-xl font-bold">{children}</h2>;
}

export function CardDescription({ children }: { children: React.ReactNode }) {
  return <p className="text-gray-500">{children}</p>;
}

export function CardContent({ children, className = "" }: { children: React.ReactNode, className?: string }) {
  return <div className={`flex-1 ${className}`}>{children}</div>;
}

export function CardFooter({ children, className = "" }: { children: React.ReactNode, className?: string }) {
  return <div className={`mt-4 ${className}`}>{children}</div>;
}
