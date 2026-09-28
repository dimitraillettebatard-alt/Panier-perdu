export const metadata = { title: "Politique de confidentialité — Panier Perdu" };

function A({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded bg-corail/20 px-1 font-semibold">
      [À COMPLÉTER : {children}]
    </span>
  );
}

const sections = [
  {
    t: "1. Données que nous collectons",
    d: "Pour votre compte : votre adresse email et votre mot de passe (stocké de façon chiffrée). Pour le service : les paniers abandonnés de votre boutique, avec l'adresse email et le contenu du panier de vos clients. Pour le paiement : Stripe gère votre carte bancaire, Panier Perdu ne la voit jamais.",
  },
  {
    t: "2. Pourquoi nous les utilisons",
    d: "Uniquement pour créer votre compte, envoyer les relances à vos clients, calculer le chiffre d'affaires récupéré et gérer votre abonnement. Nous ne vendons aucune donnée.",
  },
  {
    t: "3. Votre rôle et le nôtre",
    d: "Pour les données de vos clients, votre boutique est responsable du traitement et Panier Perdu agit comme sous-traitant. Vous devez informer vos clients de l'envoi de relances, dans votre propre politique de confidentialité.",
  },
  {
    t: "4. Nos prestataires",
    d: "Supabase (base de données et connexion), Vercel (hébergement), Stripe (paiement), un service d'envoi d'emails (à préciser).",
  },
  {
    t: "5. Durée de conservation",
    d: "Vos données sont conservées tant que votre compte est actif. Elles sont supprimées à la suppression du compte, disponible dans les réglages.",
  },
  {
    t: "6. Vos droits",
    d: "Vous pouvez demander l'accès, la correction ou la suppression de vos données en écrivant à dimitribatard06@gmail.com. Vous pouvez aussi saisir la CNIL (cnil.fr).",
  },
  {
    t: "7. Mesure d'audience",
    d: "Nous utiliserons un outil de mesure d'audience respectueux de la vie privée, sans cookie publicitaire.",
  },
];

export default function Confidentialite() {
  return (
    <main className="mx-auto max-w-xl px-5 py-8">
      <a href="/" className="font-titre font-bold">← Panier Perdu</a>
      <h1 className="mt-6 font-titre text-3xl font-bold">
        Politique de confidentialité
      </h1>
      <p className="mt-4 leading-relaxed">
        Responsable du traitement : <A>nom ou raison sociale</A>. Contact :
        dimitribatard06@gmail.com
      </p>
      {sections.map((s) => (
        <section key={s.t}>
          <h2 className="mt-8 font-titre text-xl font-bold">{s.t}</h2>
          <p className="mt-2 leading-relaxed">{s.d}</p>
        </section>
      ))}
    </main>
  );
}
