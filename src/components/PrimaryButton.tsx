import { cn } from "@/lib/utils";
import React from "react";

const PrimaryButton = ({
  className,
  name,
}: {
  className?: string;
  name: string;
}) => {
  return (
    <button
      className={cn("bg-black text-white rounded-lg px-12 py-2", className)}
    >
      {name}
    </button>
  );
};

export default PrimaryButton;
