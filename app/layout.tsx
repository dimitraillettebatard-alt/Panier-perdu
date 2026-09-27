import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Panier Perdu — Récupérez vos paniers abandonnés",
  description:
    "La relance automatique des paniers abandonnés, pensée pour les petites boutiques Shopify et WooCommerce. 29€/mois, sans engagement.",
  openGraph: {
    title: "Panier Perdu — Récupérez vos paniers abandonnés",
    description:
      "La relance automatique des paniers abandonnés, pensée pour les petites boutiques.",
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
    <html lang="fr">
      <body className="font-texte">{children}</body>
    </html>
  );
    }
