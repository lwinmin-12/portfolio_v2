"use client";
import { Analytics } from "@vercel/analytics/next";
import { useState } from "react";
import InitialLoad from "./InitialLoad";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

export function LayoutContent({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      <Analytics />
      <InitialLoad onLoadingComplete={() => setIsLoading(false)} />

      {!isLoading && (
        <div className="flex">
          <Sidebar />
          <div className="w-full">
            <Navbar />
            {children}
          </div>
        </div>
      )}
      <div className="flex">
        <Sidebar />
        <div className="w-full">
          <Navbar />
          {children}
        </div>
      </div>
    </>
  );
}
