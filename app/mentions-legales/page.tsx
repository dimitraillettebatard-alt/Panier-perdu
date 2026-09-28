export const metadata = { title: "Mentions légales — Panier Perdu" };

function A({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded bg-corail/20 px-1 font-semibold">
      [À COMPLÉTER : {children}]
    </span>
  );
}

export default function MentionsLegales() {
  return (
    <main className="mx-auto max-w-xl px-5 py-8">
      <a href="/" className="font-titre font-bold">← Panier Perdu</a>
      <h1 className="mt-6 font-titre text-3xl font-bold">Mentions légales</h1>

      <h2 className="mt-8 font-titre text-xl font-bold">Éditeur du site</h2>
      <p className="mt-2 leading-relaxed">
        Nom ou raison sociale : <A>nom</A>
        <br />
        Statut : <A>auto-entrepreneur, société…</A>
        <br />
        SIRET : <A>numéro SIRET</A>
        <br />
        Adresse : <A>adresse postale</A>
        <br />
        Email : dimitribatard06@gmail.com
        <br />
        Directeur de la publication : <A>nom</A>
      </p>

      <h2 className="mt-8 font-titre text-xl font-bold">Hébergeur</h2>
      <p className="mt-2 leading-relaxed">
        Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, États-Unis.
        Site : vercel.com
      </p>

      <h2 className="mt-8 font-titre text-xl font-bold">Propriété intellectuelle</h2>
      <p className="mt-2 leading-relaxed">
        Les contenus de ce site (textes, visuels, logo) sont la propriété de
        l&apos;éditeur. Toute reproduction sans autorisation est interdite.
      </p>

      <h2 className="mt-8 font-titre text-xl font-bold">Contact</h2>
      <p className="mt-2 leading-relaxed">
        Pour toute question, écrivez à dimitribatard06@gmail.com.
      </p>
    </main>
  );
}
