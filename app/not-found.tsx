export const metadata = { title: "Page introuvable — Panier Perdu" };

export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-screen max-w-xl flex-col justify-center px-5">
      <p className="font-titre text-6xl font-bold text-corail">404</p>
      <h1 className="mt-4 font-titre text-3xl font-bold">
        Cette page n&apos;existe pas.
      </h1>
      <p className="mt-3 text-lg text-nuit/80">
        Le lien est peut-être erroné, ou la page a été déplacée.
      </p>
      <a
        href="/"
        className="mt-8 block rounded-lg bg-corail px-6 py-4 text-center text-lg font-semibold text-white"
      >
        Retour à l&apos;accueil
      </a>
    </main>
  );
}
