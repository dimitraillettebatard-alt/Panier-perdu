export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-6 text-center">
      <h1 className="font-titre text-3xl md:text-5xl font-bold text-nuit">
        Panier Perdu
      </h1>
      <p className="mt-4 text-lg text-nuit/70 max-w-md">
        La landing page arrive à la prochaine étape. Pour l&apos;instant, si tu
        vois cette page : le déploiement fonctionne.
      </p>
      <span className="mt-8 inline-block px-4 py-2 rounded-full bg-corail text-white text-sm font-semibold">
        Étape 0 validée
      </span>
    </main>
  );
}
