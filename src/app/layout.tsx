import type { Metadata } from "next";
import "./globals.css";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { Poppins } from "next/font/google";
import InitialLoad from "@/components/InitialLoad";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], // choose what you need
});

export const metadata: Metadata = {
  title: "Lwin Min Oo - Web Developer Portfolio",
  description:
    "Showcasing the projects and skills of Lwin Min Oo, a proficient web developer.",
  icons: {
    icon: "/lmo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} antialiased flex`}>
        <InitialLoad />
        <Sidebar />
        <div className="w-full">
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  );
}
