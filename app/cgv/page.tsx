export const metadata = { title: "Conditions générales de vente — Panier Perdu" };

function A({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded bg-corail/20 px-1 font-semibold">
      [À COMPLÉTER : {children}]
    </span>
  );
}

const articles = [
  {
    t: "1. Objet",
    d: "Les présentes conditions régissent l'abonnement au service Panier Perdu, un logiciel de relance des paniers abandonnés destiné aux boutiques en ligne Shopify et WooCommerce.",
  },
  {
    t: "2. Clients concernés",
    d: "Le service est destiné aux professionnels qui exploitent une boutique en ligne.",
  },
  {
    t: "3. Prix",
    d: "L'abonnement coûte 29 € par mois et par boutique. Les relances sont illimitées. Le prix est indiqué en euros. Le régime de TVA applicable est précisé au moment du paiement.",
  },
  {
    t: "4. Paiement",
    d: "Le paiement est mensuel, par carte bancaire, via le prestataire sécurisé Stripe. Panier Perdu ne conserve aucun numéro de carte.",
  },
  {
    t: "5. Durée et résiliation",
    d: "L'abonnement est sans engagement. Vous pouvez le résilier à tout moment depuis l'espace client. La résiliation prend effet à la fin de la période mensuelle déjà payée, sans remboursement du mois en cours.",
  },
  {
    t: "6. Disponibilité et responsabilité",
    d: "L'éditeur met en œuvre les moyens raisonnables pour assurer le bon fonctionnement du service, sans garantir un niveau de récupération de paniers. Les résultats dépendent de la boutique du client. La responsabilité de l'éditeur est limitée au montant payé sur les trois derniers mois.",
  },
  {
    t: "7. Données personnelles",
    d: "Le traitement des données est décrit dans la politique de confidentialité, accessible depuis le pied de page.",
  },
  {
    t: "8. Droit applicable",
    d: "Les présentes conditions sont soumises au droit français. En cas de litige, une solution amiable sera recherchée avant toute action devant les tribunaux compétents.",
  },
];

export default function Cgv() {
  return (
    <main className="mx-auto max-w-xl px-5 py-8">
      <a href="/" className="font-titre font-bold">← Panier Perdu</a>
      <h1 className="mt-6 font-titre text-3xl font-bold">
        Conditions générales de vente
      </h1>
      <p className="mt-4 leading-relaxed">
        Éditeur : <A>nom ou raison sociale</A>, SIRET <A>numéro</A>. Contact :
        dimitribatard06@gmail.com
      </p>
      {articles.map((a) => (
        <section key={a.t}>
          <h2 className="mt-8 font-titre text-xl font-bold">{a.t}</h2>
          <p className="mt-2 leading-relaxed">{a.d}</p>
        </section>
      ))}
    </main>
  );
}
