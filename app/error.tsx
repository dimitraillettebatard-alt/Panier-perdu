"use client";

export default function Erreur({ reset }: { reset: () => void }) {
  return (
    <main className="mx-auto flex min-h-screen max-w-xl flex-col justify-center px-5">
      <h1 className="font-titre text-3xl font-bold">
        Un problème est survenu.
      </h1>
      <p className="mt-3 text-lg text-nuit/80">
        Ce n&apos;est pas de votre faute. Réessayez, ou revenez à l&apos;accueil.
      </p>
      <button
        onClick={() => reset()}
        className="mt-8 rounded-lg bg-corail px-6 py-4 text-lg font-semibold text-white"
      >
        Réessayer
      </button>
      <a href="/" className="mt-4 text-center font-semibold underline">
        Retour à l&apos;accueil
      </a>
    </main>
  );
}
