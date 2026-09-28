const benefices = [
  {
    t: "Deux relances, zéro effort",
    d: "Un premier email quelques heures après l'abandon, un second le lendemain. Vous ne touchez à rien.",
  },
  {
    t: "Un code promo, si vous voulez",
    d: "Ajoutez une réduction sur la seconde relance pour convaincre les hésitants. C'est facultatif.",
  },
  {
    t: "Vos euros récupérés, en clair",
    d: "Un compteur vous montre combien d'argent les relances ont ramené. Pas de jargon.",
  },
];

export default function Home() {
  return (
    <main className="mx-auto max-w-xl px-5 pb-10">
      <p className="pt-6 font-titre text-lg font-bold">Panier Perdu</p>

      <section className="pt-10">
        <h1 className="font-titre text-4xl font-bold leading-tight">
          Chaque panier abandonné, c&apos;est de l&apos;argent perdu.{" "}
          <span className="text-corail">Récupérez-le automatiquement.</span>
        </h1>
        <p className="mt-4 text-lg text-nuit/80">
          Pour les boutiques Shopify et WooCommerce. 29 €/mois, relances
          illimitées.
        </p>
        <a
          href="/inscription"
          className="mt-6 block rounded-lg bg-corail px-6 py-4 text-center text-lg font-semibold text-white"
        >
          Essayer Panier Perdu
        </a>
      </section>

      <section className="mt-12 rounded-lg bg-nuit p-6 text-white">
        <p className="font-titre text-3xl font-bold">Près de 7 paniers sur 10</p>
        <p className="mt-2 text-white/80">
          sont abandonnés avant le paiement. Sans relance, ces ventes ne
          reviennent jamais.
        </p>
      </section>

      <section className="mt-12 space-y-6">
        {benefices.map((b) => (
          <div key={b.t} className="border-l-4 border-corail pl-4">
            <h2 className="font-titre text-xl font-bold">{b.t}</h2>
            <p className="mt-1 text-nuit/80">{b.d}</p>
          </div>
        ))}
      </section>

      <section className="mt-12 rounded-lg border-2 border-dashed border-nuit/30 p-6">
        <p className="text-sm font-semibold uppercase text-nuit/60">
          [À COMPLÉTER] Avis client
        </p>
        <p className="mt-2 text-nuit/60">
          Emplacement réservé : on y mettra un vrai témoignage après tes
          premiers clients.
        </p>
      </section>

      <section className="mt-12 text-center">
        <p className="font-titre text-2xl font-bold">29 € par mois</p>
        <p className="mt-1 text-nuit/80">Par boutique. Sans engagement.</p>
        <a
          href="/inscription"
          className="mt-4 block rounded-lg bg-corail px-6 py-4 text-lg font-semibold text-white"
        >
          Essayer Panier Perdu
        </a>
      </section>

      <footer className="mt-14 flex flex-wrap gap-x-5 gap-y-2 border-t border-nuit/15 pt-6 text-sm text-nuit/70">
        <a href="/mentions-legales">Mentions légales</a>
        <a href="/cgv">CGV</a>
        <a href="/confidentialite">Confidentialité</a>
      </footer>
    </main>
  );
}
