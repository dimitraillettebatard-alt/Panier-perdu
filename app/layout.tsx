import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";

const titre = Space_Grotesk({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-titre",
});
const texte = Inter({
  subsets: ["latin"],
  weight: ["500", "600"],
  variable: "--font-texte",
});

export const metadata: Metadata = {
  title: "Panier Perdu — Récupérez vos paniers abandonnés",
  description:
    "Relance automatique des paniers abandonnés pour les petites boutiques Shopify et WooCommerce. 29 €/mois, relances illimitées.",
  openGraph: {
    title: "Chaque panier abandonné, c'est de l'argent perdu.",
    description: "Récupérez-le automatiquement. 29 €/mois, relances illimitées.",
    locale: "fr_FR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={`${titre.variable} ${texte.variable}`}>
      <body className="font-texte">{children}</body>
    </html>
  );
}
