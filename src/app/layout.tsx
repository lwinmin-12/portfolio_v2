import type { Metadata } from "next";
import "./globals.css";
import { Poppins } from "next/font/google";
import { LayoutContent } from "@/components/LayoutContent";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Lwin Min Oo - Web Developer Portfolio",
  description:
    "Showcasing the projects and skills of Lwin Min Oo, a proficient web developer.",
  icons: {
    icon: "/lmo.svg",
  },
  openGraph: {
    title: "Lwin Min Oo - Web Developer Portfolio",
    description:
      "Showcasing the projects and skills of Lwin Min Oo, a proficient web developer.",
    siteName: "Lwin Min Oo Portfolio",
    images: [
      {
        url: "/lmo.svg",
        width: 1200,
        height: 630,
        alt: "Lwin Min Oo Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lwin Min Oo - Web Developer Portfolio",
    description:
      "Showcasing the projects and skills of Lwin Min Oo, a proficient web developer.",
    images: ["/lmo.svg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // We'll use a client component wrapper since we need state
  return (
    <html lang="en">
      <body className={`${poppins.className} antialiased`}>
        <LayoutContent>{children}</LayoutContent>
      </body>
    </html>
  );
}
