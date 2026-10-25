import React from "react";

type GridCardProps = {
  icon: React.ReactNode;
  label: string;
};

export default function GridCard({ icon, label }: GridCardProps) {
  return (
    <div className="bg-ice p-4 text-center text-sm">
      <div className="mb-2 flex justify-center text-navy-950/80">{icon}</div>
      <div>{label}</div>
    </div>
  );
}
