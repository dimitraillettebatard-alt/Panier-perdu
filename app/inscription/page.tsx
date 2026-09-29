"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";

export default function Inscription() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [motDePasse, setMotDePasse] = useState("");
  const [erreur, setErreur] = useState("");
  const [chargement, setChargement] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setErreur("");
    setChargement(true);

    const supabase = createClient();
    const { error } = await supabase.auth.signUp({
      email,
      password: motDePasse,
    });

    setChargement(false);

    if (error) {
      if (error.message.includes("already registered")) {
        setErreur("Un compte existe déjà avec cet email.");
      } else if (error.message.includes("Password")) {
        setErreur("Le mot de passe doit faire au moins 6 caractères.");
      } else {
        setErreur("Une erreur est survenue. Réessayez.");
      }
      return;
    }

    router.push("/tableau-de-bord");
    router.refresh();
  }

  return (
    <main className="mx-auto flex min-h-screen max-w-sm flex-col justify-center px-5">
      <a href="/" className="font-titre font-bold">← Panier Perdu</a>
      <h1 className="mt-6 font-titre text-3xl font-bold">Créer un compte</h1>
      <p className="mt-2 text-nuit/70">Gratuit à créer, sans carte requise.</p>

      <form onSubmit={handleSubmit} className="mt-8 space-y-4">
        <div>
          <label className="block text-sm font-semibold">Email</label>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1 w-full rounded-lg border border-nuit/20 px-4 py-3 text-lg"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold">Mot de passe</label>
          <input
            type="password"
            required
            minLength={6}
            value={motDePasse}
            onChange={(e) => setMotDePasse(e.target.value)}
            className="mt-1 w-full rounded-lg border border-nuit/20 px-4 py-3 text-lg"
          />
        </div>

        {erreur && <p className="text-sm font-semibold text-corail">{erreur}</p>}

        <button
          type="submit"
          disabled={chargement}
          className="w-full rounded-lg bg-corail px-6 py-4 text-lg font-semibold text-white disabled:opacity-60"
        >
          {chargement ? "Création en cours…" : "Créer mon compte"}
        </button>
      </form>

      <p className="mt-6 text-center text-nuit/70">
        Déjà un compte ? <a href="/connexion" className="font-semibold underline">Se connecter</a>
      </p>
    </main>
  );
}
