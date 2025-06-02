import React from "react";

type GridCardProps = {
  icon: React.ReactNode;
  label: string;
};

export default function GridCard({ icon, label }: GridCardProps) {
  return (
    <div className="bg-[#f9f3e9] p-4 rounded-md text-center text-sm shadow-sm">
      <div className="mb-2 flex justify-center text-gray-700">{icon}</div>
      <div>{label}</div>
    </div>
  );
}
